import { FunctionComponent } from "react";
import * as React from "react";
import { GlobalStyle } from "@style/global";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "@style/theme";
import { FullPage } from "@components/FullPage";

export const RootLayout: FunctionComponent = props => (
    <>
        <GlobalStyle />
        <ThemeProvider theme={LightTheme}>
            <FullPage>{props.children}</FullPage>
        </ThemeProvider>
    </>
);
