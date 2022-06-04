import React from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/features/restaurants/infrastructure/theme";
import { Navigation } from "./src/features/restaurants/infrastructure/navigation";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";



export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
        <ThemeProvider theme={theme}>
            <LocationContextProvider>
            <RestaurantsContextProvider>
                    <Navigation />
                </RestaurantsContextProvider>
            </LocationContextProvider>
        </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
