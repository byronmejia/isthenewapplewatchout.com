import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { ThemeStore } from "../state/theme/types";
import { DarkTheme, LightTheme } from "@style/theme";

export interface GlobalStyleProps {
    theme: ThemeStore["theme"];
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
   @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
   ${reset}
   * {
      box-sizing: border-box;
   }
   html {
      -webkit-text-size-adjust: 100%;
      font-family: 'Montserrat', sans-serif;
   }
   body {
      transition: background-color, color 300ms ease-out;
      background-color: ${props =>
          props.theme === "light"
              ? LightTheme.primaryBackground
              : DarkTheme.primaryBackground};
      color: ${props =>
          props.theme === "light"
              ? LightTheme.primaryColor
              : DarkTheme.secondaryColor};
   }
`;
