import { Tabs } from "expo-router";
import React from "react";
import { FontAwesome6, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#EC4899', tabBarInactiveTintColor: '#64748B' }}>
      <Tabs.Screen 
        name="index" 
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-variant" size={size} color={color} />
          )
        }}
      />
      <Tabs.Screen 
        name="payments"
        options={{
          title: "Payments",
          headerShown: false, 
          popToTopOnBlur: true,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="payments" size={size} color={color} />
          )
        }} 
      />
      <Tabs.Screen 
        name="tickets" 
        options={{
          title: "Tickets",
          tabBarBadge: 2,
          tabBarBadgeStyle: {
            minWidth: 18,
            height: 18,
            lineHeight: 18,
            fontSize: 12,
            paddingHorizontal: 0,
            paddingVertical: 0,
            textAlign: 'center',
            textAlignVertical: 'center', // Android-specific
            backgroundColor: 'red',
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubble-ellipses" size={size} color={color} />
          )
        }} 
      />
      <Tabs.Screen 
        name="profile" 
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="circle-user" size={size} color={color} />
          )
        }} 
      />
    </Tabs>
  )
}

export default TabLayout