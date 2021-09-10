import { createGlobalStyle  } from "styled-components";

import githubBackground from '../assets/background.svg'
export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: 0;
}
body {
  background: #f0f0f5 url(${githubBackground}) no-repeat 70% top;
  -webkit-font-smoothing: antialiased;
}
body,input,button {
  font: 16px Roboto,sans-serif;
 
}
#root {
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 20px ;


@media (min-width: 768px) {
  font-size: 18px;
}

@media (min-width: 1024px) {
  font-size: 16;
}
}
button { 
  cursor: pointer
}
`