import useStore from "@/store/useStore";
import { Redirect, Stack } from "expo-router";

export default function ProtectedLayout() {
  const { isLoggedIn } = useStore();
  
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
