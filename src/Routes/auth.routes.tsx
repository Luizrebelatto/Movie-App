import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Screens/Login";
import {TabRoutes} from "./tab.routes"

export function AuthRoutes(){
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName="login" screenOptions={{ headerShown: false, gestureEnabled: false }}>
            <Stack.Screen name="login" component={Login}/>
            <Stack.Screen name="tabRoutes" component={TabRoutes}/>
        </Stack.Navigator>
    )
}