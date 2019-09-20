import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { ThemeStore } from "../state/theme/types";
import { DarkTheme, LightTheme, SystemTheme } from "@style/theme";

export interface GlobalStyleProps {
    theme: ThemeStore["theme"];
}

export function inferBackgroundColor(theme: ThemeStore["theme"]): string {
    switch (theme) {
        case "dark":
            return DarkTheme.primaryBackground;
        case "light":
            return LightTheme.primaryBackground;
        case "system":
            return SystemTheme.primaryBackground;
    }
}

export function inferColor(theme: ThemeStore["theme"]): string {
    switch (theme) {
        case "dark":
            return DarkTheme.primaryColor;
        case "light":
            return LightTheme.primaryColor;
        case "system":
            return SystemTheme.primaryColor;
    }
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  :root {
     --primary-background: ${LightTheme.primaryBackground};
     --secondary-background: ${LightTheme.secondaryBackground};
     --primary-color: ${LightTheme.primaryColor};
     --secondary-color: ${LightTheme.secondaryColor};
     
     @media (prefers-color-scheme: dark) {
       --primary-background: ${DarkTheme.primaryBackground};
       --secondary-background: ${DarkTheme.secondaryBackground};
       --primary-color: ${DarkTheme.primaryColor};
       --secondary-color: ${DarkTheme.secondaryColor};
     }
     
     @media (prefers-color-scheme: light) {
       --primary-background: ${LightTheme.primaryBackground};
       --secondary-background: ${LightTheme.secondaryBackground};
       --primary-color: ${LightTheme.primaryColor};
       --secondary-color: ${LightTheme.secondaryColor};
     }
  }
   
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
      background-color: ${props => inferBackgroundColor(props.theme)};
      color: ${props => inferColor(props.theme)};
   }
`;
