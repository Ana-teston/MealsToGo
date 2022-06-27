import React from "react";
import { SettingsScreen } from "../../../settings/screens/settings.screen"
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
    return (
        <SettingsStack.Navigator
            headerMode="screen"
            screensOptions={{
                cardStyleInterpolator:
                CardStyleInterpolators.forHorizontalIOS,
            }}
        >
            <SettingsStack.Screen
                options={{header: () => null}}
                name="Settings"
                component={SettingsScreen}
            />
            <SettingsStack.Screen
                name="favourites"
                component={() => null}
            />
        </SettingsStack.Navigator>
    )
}