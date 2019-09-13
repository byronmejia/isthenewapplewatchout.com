export type CSSVariableTypes =
    | "primaryBackground"
    | "secondaryBackground"
    | "primaryColor"
    | "secondaryColor";
export type ThemeRecord = Readonly<Record<CSSVariableTypes, string>>;

export const LightTheme: ThemeRecord = {
    primaryBackground: "#ffffff",
    secondaryBackground: "#46B1E9",
    primaryColor: "#1c1c26",
    secondaryColor: "#EF6F6C",
};

export const DarkTheme: ThemeRecord = {
    primaryColor: "#ffffff",
    secondaryColor: "#46B1E9",
    primaryBackground: "#1c1c26",
    secondaryBackground: "#EF6F6C",
};
