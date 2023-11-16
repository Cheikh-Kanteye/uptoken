import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useTheme } from "../../components/ThemeProvider";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../themes/actions";
import {
  Header,
  HeaderLeft,
  ProfileContainer,
  Title,
} from "../../themes/styles";
import { THEMES } from "../../themes/themes";
import { setStatusBarStyle } from "expo-status-bar";

const Page = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  const switchTheme = () => dispatch(toggleTheme());

  useEffect(() => {
    if (theme == THEMES.dark) {
      setStatusBarStyle("light");
    } else {
      setStatusBarStyle("dark");
    }
  }, [theme]);

  return (
    <View style={[styles.container, { backgroundColor: theme.bg }]}>
      <Header>
        <Title $color={theme.title}>Your account</Title>
        <HeaderLeft>
          <ProfileContainer></ProfileContainer>
        </HeaderLeft>
      </Header>
      <Button title="Switch theme" onPress={switchTheme} />
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
