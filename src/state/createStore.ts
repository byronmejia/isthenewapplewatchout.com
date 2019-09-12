import { combineReducers, createStore as reduxCreateStore } from "redux";
import { themeReducer } from "./theme/reducer";

const reducer = combineReducers({
    theme: themeReducer,
});

export const createStore = () => reduxCreateStore(reducer);
