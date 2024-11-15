import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import colors from '../constants/colors';
import { Login } from '../screens';

const Stack = createStackNavigator();

export default function NavigationApp(props) {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Login"
                screenOptions={{
                    headerTintColor: colors.accent,
                }}
            >
                <Stack.Screen name="Login"
                 component={Login} options={{ headerShown: false }} 
                 />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({});
