import React from "react";
import { Tabs } from "expo-router";
import { useTheme } from "../../components/ThemeProvider";
import { WIDTH, radius, spacings, tabHeight } from "../../misc/metrics";
import { Feather } from "@expo/vector-icons";
import Icon from "react-native-remix-icon";

const Page = () => {
  const { theme } = useTheme();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.title,
          height: tabHeight,
          position: "absolute",
          width: WIDTH - spacings.l * 2,
          bottom: spacings.m,
          left: spacings.l,
          borderRadius: radius.xll,
          overflow: "hidden",
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.green,
        tabBarInactiveTintColor: theme.grey,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "HOME",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home-4-line" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="transfer"
        options={{
          title: "TRANSFER",
          tabBarIcon: ({ color, size }) => (
            <Icon name="arrow-left-right-fill" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cards"
        options={{
          title: "CARDS",
          tabBarIcon: ({ color, size }) => (
            <Icon name="bank-card-2-line" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="crypto"
        options={{
          title: "CRYTO",
          tabBarIcon: ({ color, size }) => (
            <Feather name="grid" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Page;
