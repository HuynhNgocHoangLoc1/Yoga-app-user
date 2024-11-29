import { StyleSheet, Image, View, Text, StatusBar } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import icons from "../constants/icons";
import { Cart, Home, Order } from "../screens";
import Profile from "../screens/page/Profile";

const Tab = createBottomTabNavigator();

const getTabBarIcon = (route, focused, color, size) => {
  let iconName;
  if (route.name === "Home") {
    iconName = icons.homeTab;
  } else if (route.name === "Cart") {
    iconName = icons.cartTab;
  }else if (route.name === "Profile") {
    iconName = icons.profileTab;
  }

  return (
    <Image
      source={iconName}
      style={{
        width: size,
        height: size,
        tintColor: color, 
      }}
    />
  );
};

const UITab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary, 
        tabBarInactiveTintColor: "#808080", 
        tabBarIcon: ({ focused, color, size }) =>
          getTabBarIcon(route, focused, color, size),
        tabBarLabel: "", // Không hiển thị tên tab
        tabBarStyle: styles.tabBar,
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        listeners={{ focus: () => StatusBar.setBarStyle("dark-content") }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        listeners={{ focus: () => StatusBar.setBarStyle("dark-content") }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        listeners={{ focus: () => StatusBar.setBarStyle("dark-content") }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    borderTopWidth: 0.5, 
  },
});

export default UITab;
