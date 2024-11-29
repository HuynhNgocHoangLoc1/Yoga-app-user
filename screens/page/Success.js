// screens/Success.js
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Success() {
    const navigation = useNavigation();
    const handleToOrder = () => {
        navigation.navigate('Order');
    }
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/icons/check.png')} // Thay thế với đường dẫn hình ảnh dấu tích của bạn
        style={styles.checkIcon}
      />
      <Text style={styles.successText}>Thank you for buying</Text>
      <TouchableOpacity onPress={handleToOrder} style={styles.button}>
        <Text style={styles.buttonText}>Order page</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  checkIcon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  button: {
    position: 'absolute', // Đặt vị trí tuyệt đối
    bottom: 20,          // Cách đáy 20px
    left: 20,            // Cách cạnh trái 20px (tùy chỉnh)
    right: 20,           // Cách cạnh phải 20px (tùy chỉnh)
    backgroundColor: colors.primary, // Màu xanh lá cây
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
