import { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { loadAsync } from "expo-font"
import { hideAsync, preventAutoHideAsync } from "expo-splash-screen";
import { Nunito_400Regular, Nunito_700Bold } from "@expo-google-fonts/nunito";
import { Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/roboto";

import theme from './src/Global/theme';
import { Routes } from "./src/Routes";

export default function App() {

  const [appReady, setAppReady] = useState(false)

  useEffect(() => {
    (async () => {
      try {
        await preventAutoHideAsync()
        await loadAsync({
          "Nunito_400Regular": Nunito_400Regular,
          "Nunito_700Bold": Nunito_700Bold,
          "Roboto_400Regular": Roboto_400Regular,
          "Roboto_500Medium": Roboto_500Medium
        })
      } catch (e) {
        console.warn(e)
      } finally {
        setAppReady(true)
      }
    })()
  }, [])

  if (!appReady) {
    return null
  }
  hideAsync()

  return (
    
      <ThemeProvider theme={theme}>
        <StatusBar hidden/>
        <Routes/>
      </ThemeProvider>
    
  );
}