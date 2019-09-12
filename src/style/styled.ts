import baseStyled, { ThemedStyledInterface } from "styled-components";
import { ThemeRecord } from "./theme";

export type Theme = ThemeRecord;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
