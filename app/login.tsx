
import { Button } from "@/components/button";
import useAuth from "@/store/useAuth";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Alert, Image, Text, TextInput, View } from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { isLoggedIn, login } = useAuth()

  const router = useRouter()

  const handleLogin = async () => {
    try {
      await login('rich.griffiths@poblgroup.co.uk', 'Welcome123!');
      // Navigate or show success
    } catch (error) {
      Alert.alert('Login Failed', 'Please check your credentials.');
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      router.replace('/')
    }
  }, [isLoggedIn]);

  return (
    <View className="flex-1 justify-center p-4 bg-[#f0ecfd]">
      <Image
        source={require('@/assets/images/pobllinc.png')}
        style={{ width: 300, height: 200 }}
        resizeMode="contain"
        className="mx-auto"
      />
      <View className="px-4">
        <Text className="mb-2 text-gray-700">Email Address</Text>
        <TextInput
          className="bg-white rounded-xl h-12 px-4 py-2 mb-4"
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="you@example.com"
          value={email}
          onChangeText={setEmail}
        />

        <Text className="mb-2 text-gray-700">Password</Text>
        <TextInput
          className="bg-white rounded-xl h-12 px-4 py-2 mb-6"
          secureTextEntry
          placeholder="••••••••"
          value={password}
          onChangeText={setPassword}
        />
        <View className="mt-4">
          <Button title="Log in" theme="primary" onPress={handleLogin} />
          <Button title="Register" theme="secondary"  />
        </View>
      </View>
    </View>
  );
}