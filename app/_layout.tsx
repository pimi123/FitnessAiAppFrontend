import { Stack, useRouter } from "expo-router";
import { useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import { ActivityIndicator, View } from "react-native";
import { userAuthStore } from '../src/srores/authStore';

import "./globals.css"

export default function RootLayout() {
  const router = useRouter();
  const setIsLogedin = userAuthStore((state) => state.setIsLogedin)
  const isLogedIn = userAuthStore((state) => state.isLogedin)

  useEffect(() => {
    // const checkLogin = async () => {

    //   const token = await SecureStore.getItemAsync("token");

    //   if (!token) {
    //     setIsLogedin(false);
    //     return;
    //   }
    // }
    // checkLogin();
  }, []);

  useEffect(() => {
    // if (!isLogedIn) {
    //   router.replace("/auth/login")
    // }
  }, [])



  return <Stack >

    <Stack.Screen name="auth/login" options={{ headerShown: false }} />
    <Stack.Screen name="auth/register" options={{ headerShown: false }} />


    <Stack.Screen
      name="(tabs)"
      options={{ headerShown: false }}>
    </Stack.Screen>


  </Stack>;
}
