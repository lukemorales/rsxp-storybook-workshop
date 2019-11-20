import styled from 'styled-components';

export const Container = styled.div`
  color: #e6e6e6;
  position: relative;
  width: 100%;
  max-width: 100rem;

  h2 {
    display: flex;
    justify-content: space-between;
    margin: 4rem 0 2rem;
  }
`;

export const Header = styled.header`
  margin: 4rem 0 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    max-height: 4.8rem;
  }
`;

export const Partners = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  background: #2e2d33;
  border-radius: 4px;
  padding: 0 2rem 2rem;
  margin: 0 auto 8rem auto;

  @media (max-width: 1000px) {
    margin: 0 auto 120px auto;
  }
`;

export const Partner = styled.div`
  width: 13%;
  background: #1b1a1f;
  height: 10rem;
  padding: 4rem 0;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0 0;

  img {
    margin: 0 auto;
    max-width: 10rem;
  }

  @media (max-width: 780px) {
    height: 100px;
  }
`;
