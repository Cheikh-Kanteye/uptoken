export const TOGGLE_THEME = "TOGGLE_THEME" as const;

export type ToggleThemeAction = {
  type: typeof TOGGLE_THEME;
};

export const toggleTheme = (): ToggleThemeAction => {
  return {
    type: TOGGLE_THEME,
  };
};
