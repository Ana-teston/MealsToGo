import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../../map/screens/map.screen";
import { SettingsNavigator } from "./settings.navigator";
import { RestaurantsContextProvider } from "../../../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../../../services/location/location.context";
import { FavouritesContextProvider } from "../../../../services/favourites/favourites.context";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
    Restaurants: "md-restaurant",
    Map: "md-map",
    Settings: "md-settings",
};

const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
        tabBarIcon: ({ size, color }) => (
            <Ionicons name={iconName} size={size} color={color} />
        ),
    };
};
export const AppNavigator = () => (
    <FavouritesContextProvider>
        <LocationContextProvider>
            <RestaurantsContextProvider>
                <Tab.Navigator
                    headerMode="screen"
                    screenOptions={createScreenOptions}
                    tabBarOptions={{
                        activeTintColor: "tomato",
                        inactiveTintColor: "gray",
                    }}
                >
                    <Tab.Screen options={{
                        header: () => null,
                    }} name="Restaurants" component={RestaurantsNavigator} />
                    <Tab.Screen options={{
                        header: () => null,
                    }} name="Map" component={MapScreen} />
                    <Tab.Screen options={{
                        header: () => null,
                    }} name="Settings" component={SettingsNavigator} />
                </Tab.Navigator>
            </RestaurantsContextProvider>
        </LocationContextProvider>
    </FavouritesContextProvider>
);

