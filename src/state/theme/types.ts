export interface ThemeStore {
    theme: "dark" | "light" | "system";
}
export const defaultState: Readonly<ThemeStore> = {
    theme: "system",
};
