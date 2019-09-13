import { FunctionComponent } from "react";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StateModel } from "../state/createStore";
import { ThemeStore } from "../state/theme/types";
import { THEME_UPDATE } from "../state/theme/actions";
import Select from "react-select";
import { styled } from "@style/styled";

const options = [
    { value: "light", label: "Light Theme" },
    { value: "dark", label: "Dark Theme" },
];

export const StyledThemeSelector = styled(Select)`
    &.theme-selector {
        position: absolute;
        top: 0.5em;
        left: 0.5em;
        width: 10em;
        color: ${props => props.theme.primaryColor};
        background-color: ${props => props.theme.primaryBackground};
        border-color: ${props => props.theme.primaryColor};

        .select__control,
        .select__value-container,
        .select__single-value,
        .select__menu,
        .select__option {
            color: inherit;
            background-color: inherit;
            border-color: inherit;
        }

        .select__option {
            background-color: ${props => props.theme.primaryBackground};
            &:hover {
                background-color: ${props => props.theme.secondaryBackground};
            }
        }

        .select__option--is-selected {
            background-color: ${props => props.theme.secondaryBackground};
            color: ${props => props.theme.primaryColor};
        }
    }
`;

export const ThemeSelector: FunctionComponent = () => {
    const currentTheme = useSelector<StateModel, ThemeStore["theme"]>(
        state => state.theme.theme,
    );
    const currentThemeOption =
        currentTheme === "light" ? options[0] : options[1];
    const dispatch = useDispatch();
    return (
        <StyledThemeSelector
            value={currentThemeOption}
            onChange={option =>
                dispatch({
                    type: THEME_UPDATE,
                    payload: option.value,
                })
            }
            options={options}
            className="theme-selector"
            classNamePrefix="select"
        />
    );
};
