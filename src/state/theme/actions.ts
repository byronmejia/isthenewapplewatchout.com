import { ThemeStore } from "./types";

export const THEME_UPDATE = "THEME/UPDATE";

export interface ThemeUpdateAction {
    type: typeof THEME_UPDATE;
    payload: ThemeStore["theme"];
}

export type ThemeActionTypes = ThemeUpdateAction;
