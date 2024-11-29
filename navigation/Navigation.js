import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import colors from "../constants/colors";
import {
  Cart,
  ClassDetail,
  ClassInformation,
  Login,
  Order,
  Success,
  Welcome,
} from "../screens";
import Home from "../screens/page/Home";
import UITab from "./UITab";

const Stack = createStackNavigator();

export default function NavigationApp(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerTintColor: colors.primary,
        }}
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="UITab"
          component={UITab}
          options={{ headerShown: false }}
        />

        {/* <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        /> */}

        <Stack.Screen
          name="ClassInformation"
          component={ClassInformation}
          options={{ headerShown: true, title: "" }}
        />

        <Stack.Screen
          name="ClassDetail"
          component={ClassDetail}
          options={{ headerShown: true, title: "" }}
        />

        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{ headerShown: true, title: "" }}
        />

        <Stack.Screen
          name="Success"
          component={Success}
          options={{ headerShown: true, title: "" }}
        />

        <Stack.Screen
          name="Order"
          component={Order}
          options={{ headerShown: true, title: "" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
