import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Button } from '@/components/button'
import { useRouter } from 'expo-router'
import useAuth from '@/store/useAuth'

const ProfileScreen = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth()

  const router = useRouter()
  
  useEffect(() => {
    if (!isLoggedIn) {
      router.replace('/login')
    }
  }, [isLoggedIn]);

  return (
    <View className='flex-1 justify-center p-6'>
      <Text>ProfileScreen</Text>
      <Button title='Logout' theme='destructive' onPress={() => setIsLoggedIn(false)} />
    </View>
  )
}

export default ProfileScreen