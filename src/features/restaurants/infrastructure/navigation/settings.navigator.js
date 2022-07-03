import React from "react";
import { SettingsScreen } from "../../../settings/screens/settings.screen";
import { FavouritesScreen } from "../../../settings/screens/favourites.screen";
import { CameraScreen } from "../../../settings/screens/camera.screen";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import {SafeArea} from "../../../../components/utility/safe-area.component";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
    return (
        <SafeArea>
            <SettingsStack.Navigator
                headerMode="screen"
                screenOptions={{
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }}
            >
                <SettingsStack.Screen
                    options={{
                        header: () => null,
                    }}
                    name="Settings"
                    component={SettingsScreen}
                />
                <SettingsStack.Screen name="Favourites" component={FavouritesScreen} />
                <SettingsStack.Screen name="Camera" component={CameraScreen} />
            </SettingsStack.Navigator>
        </SafeArea>
    );
};