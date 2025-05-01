import { View, Text, ScrollView, Image, Pressable, FlatList, Modal } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, Ionicons, MaterialIcons, Octicons } from '@expo/vector-icons'
import { Card, CardContent, CardHeader } from '@/components/card'
import { Button } from '@/components/button'
import { Link, useRouter } from 'expo-router'
import TenancySwitcherModal from '@/components/tenancy-switcher'
import TenancyDrawer from '@/components/tenancy-drawer'

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

  return (
    <View className='flex-1 bg-[#f0ecfd]'>
      <ScrollView
        className='flex-1'
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        {/* HEADER */}
        <View className="bg-white border-b border-b-[#F2F2F2] flex-row justify-between items-center pt-12 pb-6 min-h-[80px] px-4">
          <View className="flex-row items-center justify-start gap-3">
            {/* <View className='p-2 bg-[#FF3F7A10] rounded-md'>
              <Octicons name="arrow-switch" size={20} color="#FF3F7A" />
            </View> */}
            <Pressable 
              onPress={() => setDrawerVisible(true)} 
              // android_ripple={null}
              // style={({ pressed }) => ({
              //   // Do not change style on press
              //   backgroundColor: 'transparent',
              // })}
            >
              <View className="p-2 bg-[#FF3F7A10] rounded-md">
                <Octicons name="arrow-switch" size={20} color="#FF3F7A" />
              </View>
            </Pressable>
            <Text className="text-2xl font-medium ml-2">Apartment 4B, Riverside Towers</Text>
          </View>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1528892952291-009c663ce843?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbGUlMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D' }}
            className="w-10 h-10 rounded-full"
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

        {/* SUMMARY */}
        <View className='my-4 px-4'>
          <View className="flex-row justify-between">
            <Card className="flex-1 mr-2 py-6 p-2">
              <CardContent className='flex flex-row justify-start items-center gap-2 p-4'>
                <Ionicons name="wallet-outline" size={36} color="black" />
                <View>
                  <Text className="text-base text-gray-500">Contract Balance</Text>
                  <Text className="text-2xl font-bold">$1,250.00</Text>
                </View>
              </CardContent>
            </Card>
            <Card className="flex-1 mr-2 py-6 p-2">
              <CardContent className='flex flex-row justify-start items-center gap-2 p-4'>
                <Ionicons name="calendar-number-outline" size={36} color="black" />
                <View>
                  <Text className="text-base text-gray-500">Next Billing Date</Text>
                  <Text className="text-2xl font-bold">Jan 13, 2024</Text>
                </View>
              </CardContent>
            </Card>
          </View>
        </View>

        {/* PAYMENT CTA */}
        <View className='my-4 px-4'>
          <View className="bg-indigo-600 rounded-md p-5">
            <Text className="text-white font-bold text-3xl my-3 text-center">Want to Make Payment?</Text>
            {/* <Button title="Pay now" theme='primary' /> */}
            <Pressable
              onPress={() => {}}
              className="w-[150px] bg-pink-500 flex-row items-center justify-center rounded-full mx-auto px-5 py-2 my-4"
            >
              <Text className="font-semibold text-lg tracking-wider text-white">
                Pay Now
              </Text>
            </Pressable>
          </View>
        </View>

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
                      <Text className="font-medium text-2xl mt-2">{item.title}</Text>
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