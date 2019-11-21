import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { shuffle } from 'lodash';
import { Container, Header, Partner, Partners } from './styles';

import BannerGrid from '../../components/BannerGrid';

import partnersList from '../../services/partners';
import banners from '../../services/banners';
import Button from '../../components/Button';

export default function Home() {
  const [partners, setPartners] = useState(partnersList);

  return (
    <>
      <Container>
        <Header>
          <a
            href="https://rocketseat.com.br/experience"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://rocketseat.com.br/static/images/experience/logo.svg"
              alt="RS/XP"
            />
          </a>
          <Button secondary as={Link} to="/signup">
            Nova Conta
          </Button>
        </Header>
        <BannerGrid banners={banners} />
        <h2>
          Apoiadores
          <Button inline onClick={() => setPartners(shuffle(partnersList))}>
            Randomizar
          </Button>
        </h2>
        <Partners>
          {partners.map(partner => (
            <Partner key={partner.name}>
              <img alt={partner.name} src={partner.src} />
            </Partner>
          ))}
        </Partners>
      </Container>
    </>
  );
}
