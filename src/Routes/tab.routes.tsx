import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Movies from "../Screens/Movies";
import Favorites from "../Screens/Favorites";
import MyTabBar from "./TabBarContent";

export function TabRoutes(){
    const Tab = createMaterialTopTabNavigator();

    return (
        <Tab.Navigator 
            tabBar={props => <MyTabBar {...props} />}
        >
            <Tab.Screen name="movies" component={Movies} options={{ title: "Todos os Filmes" }}/>
            <Tab.Screen name="favorites" component={Favorites} options={{ title: "Filmes Favoritos" }}/>
        </Tab.Navigator>
    )
}