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
            headerMode="screen"
            screenOptions={{
                ...TransitionPresets.ModalPresentationIOS,
            }}
        >
            <RestaurantStack.Screen
                options={{
                    header: () => null,
                }}
                name="Restaurant"
                component={RestaurantsScreen}
            />
            <RestaurantStack.Screen options={{
                header: () => null,
            }}
                name="RestaurantDetail"
                component={RestaurantDetailScreen}
            />
        </RestaurantStack.Navigator>
    );
};