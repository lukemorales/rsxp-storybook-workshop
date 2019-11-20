import styled, { css } from 'styled-components';
import { readableColor } from 'polished';

export const Container = styled.button`
  cursor: pointer;
  font-weight: 700;
  transition: 180ms ease-in-out;

  ${({ inline }) =>
    !inline
      ? css`
          display: flex;
          flex-direction: row-reverse;
          align-items: center;
          justify-content: center;
          min-width: 5.2rem;
          min-height: 5.2rem;
          font-size: 1.4rem;
          text-transform: uppercase;
          border-radius: 4px;
          padding: ${p => (p.large ? '1.6rem 6rem' : '1.6rem')};

          ${({ secondary }) =>
            !secondary
              ? css`
                  border: 0;
                  color: ${p => readableColor(p.color)};
                  background-color: ${p => p.color};
                `
              : css`
                  border: ${p => `2px solid ${p.color}`};
                  color: ${p => readableColor(p.color)};
                `}
        `
      : css`
          color: #7159c1;
        `}

  > span + svg {
    margin-right: 0.8rem;
  }

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
