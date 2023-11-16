import React from "react";
import { Stack } from "expo-router";
import { ThemeProvider } from "../components/ThemeProvider";
import { StatusBar } from "expo-status-bar";

const Layout = () => {
  return (
    <>
      <ThemeProvider>
        <StatusBar translucent />
        <Stack screenOptions={{ headerShown: false }} />
      </ThemeProvider>
    </>
  );
};

export default Layout;
