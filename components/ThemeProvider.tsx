import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeProvider as StyledThemeProvider } from "styled-components/native";
import {
  Provider as ReduxProvider,
  useDispatch,
  useSelector,
} from "react-redux";
import { toggleTheme } from "../themes/actions";
import { UseSelector } from "react-redux/es/hooks/useSelector";
import { THEMES } from "../themes/themes";
import { RootState, store } from "../themes/stores";
import { DefaultRouterOptions } from "@react-navigation/native";

interface ThemeContextProps {
  theme: typeof THEMES.light | typeof THEMES.dark;
}

interface Props {
  children: React.ForwardRefExoticComponent<
    Omit<Omit<DefaultRouterOptions<string>, any>, any>
  >;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const restoreTheme = async () => {
      const savedTheme = await AsyncStorage.getItem("theme");
      if (savedTheme) {
        dispatch(toggleTheme());
      }
    };

    restoreTheme();
  }, [dispatch]);

  const theme = useSelector((state: RootState) =>
    state.theme.darkMode ? THEMES.dark : THEMES.light
  );
  return (
    <ThemeContext.Provider value={{ theme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

const AppThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </ReduxProvider>
  );
};

const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { AppThemeProvider as ThemeProvider, useTheme };

const styles = StyleSheet.create({});
