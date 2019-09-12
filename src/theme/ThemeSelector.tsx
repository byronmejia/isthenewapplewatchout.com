import { FunctionComponent } from "react";
import * as React from "react";

export const ThemeSelector: FunctionComponent = props => {
    return (
        <form>
            <div>
                <input
                    type="radio"
                    id="theme-selector-light"
                    name="theme"
                    value="light"
                />
                <label htmlFor="theme-selector-light">Light Theme</label>
            </div>
            <div>
                <input
                    type="radio"
                    id="theme-selector-dark"
                    name="theme"
                    value="dark"
                />
                <label htmlFor="theme-selector-dark">Dark Theme</label>
            </div>
        </form>
    );
};
