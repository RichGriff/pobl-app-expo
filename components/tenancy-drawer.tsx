import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import Modal from 'react-native-modal';
import { Picker } from '@react-native-picker/picker';
import { Button } from './button';

interface TenancyDrawerProps {
  isVisible: boolean
  onClose: any
}

const TenancyDrawer = ({ isVisible, onClose } : TenancyDrawerProps) => {
  const [selectedTenancy, setSelectedTenancy] = useState('tenancy1');

  return (
    <Modal
      isVisible={isVisible}
      hasBackdrop={true}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      swipeDirection="down"
      onSwipeComplete={onClose}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      style={{ justifyContent: 'flex-end', margin: 0 }} // Drawer style
    >
      <View className="bg-indigo-900 pt-12 px-8 pb-4">
        <View className='mb-2'>
          <Text className="text-3xl font-semibold text-white">Switch your tenancy</Text>
          <Text className="mb-4 text-white">Here you can switch over to a different tenancy.</Text>
        </View>

        <View className="border border-indigo-600 bg-indigo-600 text-white rounded-md overflow-hidden mb-6">
          <Picker
            selectedValue={selectedTenancy}
            onValueChange={(itemValue) => setSelectedTenancy(itemValue)}
            style={{ color: 'white' }}
            dropdownIconColor="white"
          >
            <Picker.Item label="Apartment 4B, Riverside Towers" value="tenancy1" />
            <Picker.Item label="Apartment 4B, Riverside Towers (former)" value="tenancy2" />
          </Picker>
        </View>

        <Pressable>
          <Button title="Cancel" theme="primary" onPress={onClose} />
        </Pressable>
      </View>
    </Modal>
  );
};

export default TenancyDrawer;
