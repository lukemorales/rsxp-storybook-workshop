import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    height: 100%;
  }

  body, #root {
    min-height: 100vh;
    position: relative;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale;
    background: #100f12;
    color: #e6e6e6;
  }

  body, input, textarea, button {
    font: 1.6rem -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    line-height: 1.48;
  }

  #root {
    display: flex;
    justify-content: center;
    background: url('https://skylab.rocketseat.com.br/static/7c60c57e4fd20119d82b5970028b2d1b.svg')
      center bottom repeat-x,
    url('https://skylab.rocketseat.com.br/static/d963b8944752859b3c6ccb0bda539c46.svg')
      repeat-x,
      #100f12;
  }

  a {
    text-decoration: none;
  }

  button {
    background: none;
    font-weight: 700;
    cursor: pointer;
    border: 0;
    transition: 180ms ease-in-out;
  }

  a, button {
    color: #7159c1;
  }

  ul {
    list-style: none;
    padding: 0;
    margin-top: 2rem;
    text-align: left;
  }

  ::-webkit-scrollbar {
    width: 0.6rem;
    height: 0.6rem;
    margin-right: 10px;
  }
  ::-webkit-scrollbar-corner {
    border: none;
    background: none;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #232527;
    border-radius: 3px;
    cursor: move;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
    border: none;
  }

`;
