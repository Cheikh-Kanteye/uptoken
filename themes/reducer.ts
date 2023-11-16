// reducers/themeReducer.js
import { TOGGLE_THEME, ToggleThemeAction } from "./actions";

export type ThemeState = {
  darkMode: boolean;
};

const initialState: ThemeState = {
  darkMode: false,
};

const themeReducer = (
  state = initialState,
  action: ToggleThemeAction
): ThemeState => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
};

export default themeReducer;
