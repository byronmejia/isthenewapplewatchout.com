export interface ThemeStore {
    theme: "dark" | "light";
}
export const defaultState: Readonly<ThemeStore> = {
    theme: "light",
};
