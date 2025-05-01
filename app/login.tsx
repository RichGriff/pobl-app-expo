
import { Button } from "@/components/button";
import useStore from "@/store/useStore";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Text, View } from "react-native";

export default function LoginScreen() {
  const { isLoggedIn, setIsLoggedIn } = useStore()

  const router = useRouter()

  useEffect(() => {
    if (isLoggedIn) {
      router.replace('/')
    }
  }, [isLoggedIn]);

  return (
    <View className="flex-1 justify-center p-4">
      <Text>
        Login Screen
      </Text>
      <Button title="Log in!" theme="primary" onPress={() => setIsLoggedIn(true) } />
    </View>
  );
}