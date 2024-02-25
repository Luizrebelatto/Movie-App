import { StatusBar } from "react-native";

import { ThemeProvider } from "styled-components/native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font"
import { Nunito_400Regular, Nunito_700Bold } from "@expo-google-fonts/nunito";
import { Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/roboto";

import theme from './src/Global/theme';
import Routes from "./src/Routes";

export default function App() {

  const [fontsLoaded] = useFonts({
    Nunito_400Regular, Nunito_700Bold,
    Roboto_400Regular, Roboto_500Medium
  })

  if (!fontsLoaded) return AppLoading;

  return (
    
      <ThemeProvider theme={theme}>
        <StatusBar hidden/>
        <Routes/>
      </ThemeProvider>
    
  );
}