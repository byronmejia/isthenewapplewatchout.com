import { THEME_UPDATE, ThemeActionTypes } from "./actions";
import { defaultState, ThemeStore } from "./types";

export function themeReducer(
    state = defaultState,
    action: ThemeActionTypes,
): ThemeStore {
    switch (action.type) {
        case THEME_UPDATE:
            return {
                theme: action.payload,
            };
        default:
            return state;
    }
}
