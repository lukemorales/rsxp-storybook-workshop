import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Loading({ isLoading }) {
  return (
    <Container isLoading={isLoading}>
      <img
        src="https://rocketseat.com.br/static/images/logo-rocketseat.svg"
        alt="Rocketseat"
      />
    </Container>
  );
}

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
