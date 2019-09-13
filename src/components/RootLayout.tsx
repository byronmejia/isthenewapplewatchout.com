import { FunctionComponent, useEffect } from "react";
import * as React from "react";
import { GlobalStyle } from "@style/global";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "@style/theme";
import { FullPage } from "@components/FullPage";
import { ThemeSelector } from "../theme/ThemeSelector";
import { useDispatch, useSelector } from "react-redux";
import { StateModel } from "../state/createStore";
import { ThemeStore } from "../state/theme/types";
import { THEME_UPDATE } from "../state/theme/actions";

export const RootLayout: FunctionComponent = props => {
    const dispatch = useDispatch();

    useEffect(() => {
        const isDark = window.matchMedia("(prefers-color-scheme: dark)")
            .matches;
        if (isDark) {
            dispatch({
                type: THEME_UPDATE,
                payload: "dark",
            });
        }
    }, []);

    const currentTheme = useSelector<StateModel, ThemeStore["theme"]>(
        state => state.theme.theme,
    );
    const equivalentTheme = currentTheme === "light" ? LightTheme : DarkTheme;
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
