// components/ui/card.js
import React from 'react';
import { View } from 'react-native';

export function Card({ children, className = '', ...props }) {
  return (
    <View
      className={`bg-white rounded-md p-0 ${className}`}
      {...props}
    >
      {children}
    </View>
  );
}

export function CardHeader({ children, className = '', ...props }) {
  return (
    <View
      className={`bg-white rounded-t-md ${className}`}
      {...props}
    >
      {children}
    </View>
  );
}

export function CardContent({ children, className = '', ...props }) {
  return (
    <View className={`p-2 ${className}`} {...props}>
      {children}
    </View>
  );
}