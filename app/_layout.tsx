import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useLayoutEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { createActor } from "xstate";
import taskMachine from "./_machines/taskMachine";
import { getData, storeData } from "@/storage";
import { fetchDataFromAsyncStorage } from "./_utils/localStorage";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export const globalTaskActor = createActor(taskMachine);
globalTaskActor.subscribe(async (snapshot) => {
  if (snapshot.value === "idle") {
    await storeData(JSON.stringify(snapshot.context));
  }
});
globalTaskActor.start();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useLayoutEffect(() => {
    (async () => {
      await getData().then((value) => {
        if (value) {
          globalTaskActor.send({
            type: "loadLocalData",
            value: JSON.parse(value),
          });
        }
      });
    })();
  }, []);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack initialRouteName="index" screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="createTodoModal/index"
          options={{ headerShown: false, presentation: "modal" }}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
