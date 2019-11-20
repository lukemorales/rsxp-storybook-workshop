import styled from 'styled-components';

export const LeftContainer = styled.aside`
  max-width: 500px;
  width: 100%;
  padding: 4rem 3.6rem;
  background: rgba(0, 0, 0, 0.17);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  header {
    width: 100%;
  }

  h1 {
    text-align: center;
    display: flex;
    align-items: center;

    img {
      max-width: 48rem;
      margin-bottom: 4rem;
      transform: rotate(-90deg);
    }
  }
`;

export const RightContainer = styled.main`
  width: 100%;
  padding: 4rem 3.6rem;
  display: flex;
  flex-direction: column;

  > header {
    text-align: right;
    margin-bottom: calc(8rem - 23px);
  }

  > section {
    max-width: 480px;
    margin: auto;

    h3 {
      margin-bottom: 2rem;
    }

    > section:first-of-type {
      display: flex;
      justify-content: space-between;

      button {
        margin: 0 0.8rem;

        :first-child {
          flex: 1;
          margin-left: 0;
        }

        :last-child {
          margin-right: 0;
        }
      }

      + div {
        position: relative;
        margin: 4rem 0;
        color: #999;

        hr {
          border-color: #999;
        }

        span {
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          background: #0b0a0d;
          padding: 0 1.6rem;
        }
      }
    }

    form {
      div {
        display: flex;
        justify-content: space-between;

        label {
          :first-of-type {
            margin-right: 2rem;
            flex: 1;
          }

          :last-of-type {
            width: 40%;
          }
        }
      }
    }

    > button {
      margin: 4rem 0 0 auto;
    }
  }
`;
