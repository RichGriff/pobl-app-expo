import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Button } from '@/components/button'
import useStore from '@/store/useStore'
import { useRouter } from 'expo-router'

const ProfileScreen = () => {
  const { isLoggedIn, setIsLoggedIn } = useStore()

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