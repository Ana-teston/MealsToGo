import React from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import * as firebase from "firebase";
import { theme } from "./src/features/restaurants/infrastructure/theme";
import { Navigation } from "./src/features/restaurants/infrastructure/navigation";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";


const firebaseConfig = {
        apiKey: "AIzaSyBww2u-K099-kzgLQUhVyFahbXwf9yHY1Y",
        authDomain: "mealstogo-5c7fe.firebaseapp.com",
        projectId: "mealstogo-5c7fe",
        storageBucket: "mealstogo-5c7fe.appspot.com",
        messagingSenderId: "972788393121",
        appId: "1:972788393121:web:228292ffed567392387ce0"
    };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

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
            <AuthenticationContextProvider>
                <Navigation />
            </AuthenticationContextProvider>
        </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
