import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
   ${reset}
   * {
      box-sizing: border-box;
   }
   html {
      -webkit-text-size-adjust: 100%;
      font-family: 'Montserrat', sans-serif;
   }
`;
