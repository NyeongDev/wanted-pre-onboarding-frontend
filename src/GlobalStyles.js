import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    margin: 0;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  
  body, div, span, h1, h2, h3, h4, h5, h6,
  p, i, ol, ul, li, form, label, header, nav,
  input, textarea, button {
    margin: 0;
    padding: 0;
    border: 0;
    font-weight: normal;
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    font-size: 14px;
  }

a {
  color: inherit;
  text-decoration: none;
}

button {
  background-color: transparent;
}

ul, ol, li {
  list-style: none;
  padding-left: 0;
  margin-left: 0;
}

button:focus,
button:active,
textarea:focus,
textarea:active,
input:focus,
input:active {
  box-shadow: none;
  outline: none;
}

textarea {
  resize: none;
}
`;

export default GlobalStyles;
