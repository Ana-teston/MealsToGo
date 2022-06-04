import React from "react";
import {
    createStackNavigator,
    TransitionPresets,
} from "@react-navigation/stack";
 import  { RestaurantsScreen } from "../../screens/restaurants.screens";
import {RestaurantDetailScreen} from "../../screens/restaurant-detail.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
    return (
        <RestaurantStack.Navigator
            headerMode="none"
            screenOptions={{
                ...TransitionPresets.ModalPresentationIOS,
            }}
        >
            <RestaurantStack.Screen
                name="Restaurants"
                component={RestaurantsScreen}
            />
            <RestaurantStack.Screen
                name="RestaurantDetail"
                component={RestaurantDetailScreen}
            />
        </RestaurantStack.Navigator>
    );
};