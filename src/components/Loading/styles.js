import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #1b1a1f;
  opacity: ${props => (props.isLoading ? 1 : 0)};
  visibility: ${props => (props.isLoading ? 'visible' : 'hidden')};
  transition: 0.5s ease-in-out;

  img {
    margin-bottom: 20px;
  }
`;
