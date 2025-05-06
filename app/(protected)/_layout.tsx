import useAuth from "@/store/useAuth";
import { Redirect, Stack } from "expo-router";

export default function ProtectedLayout() {
  const { isLoggedIn } = useAuth();
  
  if(!isLoggedIn) {
    return <Redirect href={'/login'} />
  }

  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          animation: "none",
        }}
      />
    </Stack>
  )
}
