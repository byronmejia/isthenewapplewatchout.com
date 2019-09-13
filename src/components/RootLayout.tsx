import { FunctionComponent } from "react";
import * as React from "react";
import { GlobalStyle } from "@style/global";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme, ThemeRecord } from "@style/theme";
import { FullPage } from "@components/FullPage";
import { ThemeSelector } from "../theme/ThemeSelector";
import { useSelector } from "react-redux";
import { StateModel } from "../state/createStore";
import { ThemeStore } from "../state/theme/types";

export const extractTheme = (theme: ThemeStore["theme"]): ThemeRecord => {
    switch (theme) {
        case "dark":
            return DarkTheme;
        case "light":
            return LightTheme;
        case "system":
            return window.matchMedia("(prefers-color-scheme: dark)").matches
                ? DarkTheme
                : LightTheme;
    }
};

export const RootLayout: FunctionComponent = props => {
    const currentTheme = useSelector<StateModel, ThemeStore["theme"]>(
        state => state.theme.theme,
    );
    const equivalentTheme = extractTheme(currentTheme);
    return (
        <>
            <GlobalStyle theme={currentTheme} />
            <ThemeProvider theme={equivalentTheme}>
                <FullPage>
                    <ThemeSelector />
                    {props.children}
                </FullPage>
            </ThemeProvider>
        </>
    );
};
