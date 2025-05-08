import { View, Text, ScrollView, Image, Pressable, FlatList, useColorScheme } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, FontAwesome6, Ionicons, MaterialIcons, Octicons } from '@expo/vector-icons'
import { Card, CardContent, CardHeader } from '@/components/card'
import { Button } from '@/components/button'
import TenancySwitcherModal from '@/components/tenancy-switcher'
import TenancyDrawer from '@/components/tenancy-drawer'
import useAuth from '@/store/useAuth'

const tickets = [
  {
    id: '1',
    title: 'Direct Debit Query',
    description: 'How can I go about setting up a new direct debit',
    status: 'In Progress',
  },
  {
    id: '2',
    title: 'Payment Issue',
    description: 'I was charged twice for a subscription',
    status: 'New',
  },
  // Add more ticket items here
];

const appointments = [
  {
    id: '1',
    date: 'May 5th, 2025',
    time: '10:00 am - 12:00 pm'
  },
  {
    id: '2',
    date: 'May 25th, 2025',
    time: '16:00 am - 16:30 pm'
  },
  // Add more ticket items here
];

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const theme = useColorScheme()
  const { user } = useAuth()

  return (
    <View className={`flex-1 bg-[#f0ecfd]`}>
      <ScrollView
        className='flex-1'
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        {/* HEADER */}
        <View className="bg-white border-b border-b-[#F2F2F2] flex-row items-center pt-12 pb-6 min-h-[80px] px-4 gap-4">
          {/* Left side (icon + text) */}
          <View className="flex-1 flex-row items-center gap-3">
            <Pressable onPress={() => setDrawerVisible(true)}>
              <View className="p-3 bg-[#FF3F7A10] rounded-md">
                <Octicons name="arrow-switch" size={20} color="#FF3F7A" />
              </View>
            </Pressable>

            {/* Text with wrapping */}
            <Text className="text-2xl ml-2 font-medium flex-1 flex-wrap text-pretty">
              Apartment 4B, Riverside Towers, CF32 7HH
            </Text>
          </View>

          {/* Avatar (fixed size, no shrink) */}
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1528892952291-009c663ce843?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbGUlMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D' }}
            className="w-12 h-12 rounded-full"
            style={{ flexShrink: 0 }}
          />
        </View>

        <TenancySwitcherModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />

        <TenancyDrawer
          isVisible={drawerVisible}
          onClose={() => setDrawerVisible(false)}
        />

        {/* <View className={`flex-1 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
          <Text className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            {theme}
          </Text>
        </View> */}

        <View className='mt-6 px-4'>
          <Text className='text-lg'>Welcome back! <Text className='font-medium text-pink-500'>{user?.fullname}</Text></Text>
        </View>

        {/* SUMMARY */}
        <View className='my-4 px-4'>
          <View className="grid grid-cols-2 gap-4">
            <Card className="p-2">
              <CardContent className="p-4">
                <View className='flex-row justify-start items-center gap-4'>
                  {/* <Ionicons name="wallet-outline" size={48} color="#FF3F7A" /> */}
                  <FontAwesome6 name="receipt" size={48} color="#FF3F7A" />
                  <View className="flex-1 items-end">
                    <Text className="font-medium text-5xl mt-4 mb-2">$1,250.00</Text>
                    <Text className="text-xl text-gray-500">Contract Balance</Text>
                  </View>
                </View>
                <View className='h-[1px] bg-gray-100 my-4' />
                <View className='flex justify-start items-start gap-2'>
                  <View className='w-full flex flex-row justify-between items-center'>
                    <Text className="text-gray-500 text-lg">Next Billing Date</Text>
                    <Text className="text-lg">Jan 13, 2024</Text>
                  </View>
                  <View className='w-full flex flex-row justify-between items-center'>
                    <Text className="text-gray-500 text-lg">Last Billing Date</Text>
                    <Text className="text-lg">Dec 13, 2024</Text>
                  </View>
                </View>
                <View className='mt-10'>
                  <Button title='Make a payment' theme='primary' />
                  <Button title='Manage Direct Debit' theme='secondary' />
                </View>
              </CardContent>
            </Card>
          </View>
        </View>

        {/* PAYMENT CTA */}
        {/* <View className='my-4 px-4'>
          <View className="bg-indigo-600 rounded-md p-5">
            <Text className="text-white font-bold text-3xl my-3 text-center">Want to Make Payment?</Text>
            <Pressable
              onPress={() => {}}
              className="w-[150px] bg-pink-500 flex-row items-center justify-center rounded-full mx-auto px-5 py-2 my-4"
            >
              <Text className="font-semibold text-lg tracking-wider text-white">
                Pay Now
              </Text>
            </Pressable>
          </View>
        </View> */}

        {/* TICKETS */}
        <View className="my-4">
          <View className="flex-1">
            <View className="flex-row justify-between items-center mb-2 pl-4">
              <Text className="font-semibold text-lg">Recent Tickets</Text>
            </View>

            <FlatList
              data={tickets}
              horizontal
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingLeft: 16 }} // Add left padding
              renderItem={({ item }) => (
                <Card className="mr-3 w-80 p-2">
                  <CardContent className="flex flex-row justify-start items-center gap-4 p-4">
                    <View className="flex-1">
                      <AntDesign name="message1" size={28} color="#FF3F7A" />
                      <Text className="font-medium text-2xl mt-4">{item.title}</Text>
                      <Text className="text-lg text-gray-500">{item.description}</Text>
                    </View>
                    <Text className="absolute top-0 right-0 text-yellow-500 text-base bg-yellow-100 px-2 py-0.5 rounded">
                      {item.status}
                    </Text>
                  </CardContent>
                </Card>
              )}
            />
          </View>
        </View>

        {/* TENANCY INFO */}
        <View className='my-4 px-4'>
          <View className="flex-row justify-between items-center mb-2">
            <Text className="font-semibold text-lg">Tenancy Information</Text>
          </View>
          <Card>
            <CardHeader className=''>
              <Image
                source={{ uri: 'https://plus.unsplash.com/premium_vector-1724312667136-41d648226d89?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
                className="h-40 w-full rounded-tl rounded-tr mb-2"
                resizeMode="cover"
              />
            </CardHeader>
            <CardContent className=''>
              <View className='px-4'>
                <View className='flex flex-row justify-between items-start gap-6 mt-4'>
                  <View>
                    <Text className="font-bold text-2xl mb-1">ACC-2002708/2</Text>
                    <Text className="text-lg text-gray-500 mb-2">Jan 15, 2023 - Jan 14, 2024</Text>
                  </View>
                  <Text className="text-orange-500 text-base bg-orange-100 px-2 py-0.5 rounded">Current</Text>
                </View>

                <View className='flex flex-row justify-between items-center mb-8 mt-4'>
                  <View className='bg-gray-100 p-2 rounded-md flex flex-row items-center'>
                    <Ionicons name="person" size={24} color="#555" />
                    <Text className="text-lg font-semibold ml-1">x 2</Text>
                  </View>
                  <View className='flex flex-row justify-start items-center gap-2'>
                    <View className='bg-emerald-500 p-2 rounded-xl flex flex-row'>
                      <MaterialIcons name="gas-meter" size={24} color="white" />
                    </View>
                    <View className='bg-red-500 p-2 rounded-xl flex flex-row '>
                      <Ionicons name="flame" size={24} color="white" />
                    </View>
                    <View className='bg-emerald-500 p-2 rounded-xl flex flex-row'>
                      <MaterialIcons name="electrical-services" size={24} color="white" />
                    </View>
                  </View>
                </View>
                <Button title="View More" theme="secondary" />
              </View>
            </CardContent>
          </Card>
        </View>

        {/* APPOINTMENTS */}
        <View className="my-4">
          <View className="flex-1">
            <View className="flex-row justify-between items-center mb-2 pl-4">
              <Text className="font-semibold text-lg">Upcoming Appointments</Text>
            </View>

            <FlatList
              data={appointments}
              horizontal
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingLeft: 16 }} // Add left padding
              renderItem={({ item }) => (
                <Card className="mr-3 w-80 p-2">
                  <CardContent className="flex flex-row justify-start items-center gap-4 p-4">
                    <Ionicons name="calendar-outline" size={32} color="#FF3F7A" />
                    <View className="flex-1">
                      <Text className="font-medium text-2xl mt-2">{item.date}</Text>
                      <Text className="text-lg text-gray-500">{item.time}</Text>
                    </View>
                  </CardContent>
                </Card>
              )}
            />
          </View>
        </View>

      </ScrollView>
    </View>
  )
}

export default HomeScreen