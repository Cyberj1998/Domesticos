import { Image } from "expo-image";
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

import { HapticTab } from "@/components/haptic-tab";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function TabLayout() {
  const colorScheme = useColorScheme() ?? "light";

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Tienda",
          tabBarIcon: () => (
            <Image
              style={styles.icon}
              source={require("../../assets/images/store.png")}
              contentFit="cover"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Carrito",
          tabBarIcon: () => (
            <Image
              style={styles.icon}
              source={require("../../assets/images/cart.png")}
              contentFit="cover"
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#48d769",
    borderTopWidth: 1,
    borderRadius: 100,
    borderTopColor: "#eeeeee",
    height: 65,
    paddingBottom: 10,
    paddingTop: 10,
    elevation: 8,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: "#333333",
  },
  icon: {
    width: 30,
    height: 30,
  },
});
