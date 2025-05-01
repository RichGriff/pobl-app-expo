// app/modal-screen.tsx (This could be a dedicated file for your modal component)
import React, { useState } from 'react';
import { View, Modal, Text, Pressable } from 'react-native';
import { Octicons } from '@expo/vector-icons';

const ModalScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View className="flex-1 justify-center items-center">
      {/* Button to show the modal */}
      <Pressable onPress={() => setModalVisible(true)}>
        <View className="p-2 bg-[#FF3F7A10] rounded-md">
          <Octicons name="arrow-switch" size={20} color="#FF3F7A" />
        </View>
      </Pressable>

      {/* Modal */}
      <Modal
        transparent
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-black/50">
          <View className="bg-white p-6 rounded-lg w-4/5">
            <Text className="text-lg font-semibold mb-4">Switch Action</Text>
            <Text className="text-gray-600 mb-6">Here's your modal content.</Text>
            <Pressable onPress={() => setModalVisible(false)} className="self-end">
              <Text className="text-pink-600 font-semibold">Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalScreen;
