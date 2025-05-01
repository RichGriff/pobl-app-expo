import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { Modal, View, Text, Pressable } from 'react-native';
import { Button } from './button';

interface TenancySwitcherModalProps {
  modalVisible: boolean
  setModalVisible: any
}

const TenancySwitcherModal = ({ modalVisible, setModalVisible } : TenancySwitcherModalProps) => {
  const [selectedTenancy, setSelectedTenancy] = useState('tenancy1');

  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View className="flex-1">
        <View className="p-6">
          <Text className="text-3xl font-semibold">Switch your tenancy</Text>
          <Text className="mb-4">Here you can switch over to a different tenancy.</Text>

          {/* Picker Dropdown */}
          <View className="border border-gray-300 rounded-md overflow-hidden mb-6">
            <Picker
              selectedValue={selectedTenancy}
              onValueChange={(itemValue) => setSelectedTenancy(itemValue)}
            >
              <Picker.Item label="Tenancy 1" value="tenancy1" />
              <Picker.Item label="Tenancy 2" value="tenancy2" />
              <Picker.Item label="Tenancy 3" value="tenancy3" />
            </Picker>
          </View>

          <Pressable>
            <Button title="Close" theme="primary" onPress={() => setModalVisible(false)} />
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default TenancySwitcherModal;
