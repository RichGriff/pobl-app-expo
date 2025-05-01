import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "expo-status-bar";

import "./global.css";

export default function RootLayout() {
  return (
    <>
      <StatusBar hidden={true} />
      <Stack>
        <Stack.Screen
          name="(protected)"
          options={{
            headerShown: false,
            animation: "none",
          }}
        />
        <Stack.Screen
          name="login"
          options={{
            headerShown: false,
            animation: "none",
          }}
        />
      </Stack>
    </>
  );
}