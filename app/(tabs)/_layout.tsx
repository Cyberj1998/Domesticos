import { Image } from "expo-image";
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

import { useColorScheme } from "@/hooks/use-color-scheme";

export default function TabLayout() {
  const colorScheme = useColorScheme() ?? "light";

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        // tabBarButton: HapticTab, // Uncomment if using your HapticTab
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarActiveTintColor: "#48d769",
        tabBarInactiveTintColor: "#333333",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Tienda",
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                styles.iconWrapper,
                { backgroundColor: focused ? "#FFFFFF" : "transparent" },
              ]}
            >
              <Image
                style={[
                  styles.icon,
                  { tintColor: focused ? "#48d769" : "#333333" },
                ]}
                source={require("../../assets/images/store.png")}
                contentFit="cover"
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Carrito",
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                styles.iconWrapper,
                { backgroundColor: focused ? "#FFFFFF" : "transparent" },
              ]}
            >
              <Image
                style={[
                  styles.icon,
                  { tintColor: focused ? "#48d769" : "#333333" },
                ]}
                source={require("../../assets/images/cart.png")}
                contentFit="cover"
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#48d769",
    borderTopWidth: 0,
    borderRadius: 100,
    height: 70,
    margin: 15,
    paddingBottom: 10,
    paddingTop: 10,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    position: "absolute", // Recommended for floating tab bars
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: "600",
  },
  iconWrapper: {
    width: 45,
    height: 35,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: -5, // Adjust to align with label
  },
  icon: {
    width: 24,
    height: 24,
  },
});
