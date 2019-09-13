import { combineReducers, createStore as reduxCreateStore } from "redux";
import { themeReducer as theme } from "./theme/reducer";
import { ThemeStore } from "./theme/types";

export interface StateModel {
    theme: ThemeStore;
}

const reducer = combineReducers<StateModel>({
    theme,
});

export const createStore = () => reduxCreateStore(reducer);
