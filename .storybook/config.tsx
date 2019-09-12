import * as React from "react";
import { configure, addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import PrimaryTheme from "../src/components/style/theme";
import { GlobalStyle } from "../src/components/style/styled";

const src = require.context("../src", true, /\.stories\.tsx$/);

const loadStories = () => {
    src.keys().forEach(fileName => src(fileName));
};

addDecorator(story => (
    <>
        <GlobalStyle />
        <ThemeProvider theme={PrimaryTheme}>{story()}</ThemeProvider>
    </>
));

configure(loadStories, module);
