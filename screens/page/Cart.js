// screens/Cart.js
import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import { useCart } from "../../context/CartContext"; 

export default function Cart({ navigation }) {
  const { cartItems, purchaseClass } = useCart(); 

  const handleBuy = () => {
    purchaseClass(); 
    navigation.navigate("Success");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item, index) => (item.id + index).toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>Teacher: {item.teacherName}</Text>
            <Text style={styles.itemText}>Date: {item.date}</Text>
            <Text style={styles.itemText}>
              Comments: {item.comments || "None"}
            </Text>
          </View>
        )}
      />

      {/* Nút Buy để mua các lớp học trong giỏ hàng */}
      {cartItems.length > 0 && (
        <TouchableOpacity onPress={handleBuy} style={styles.button}>
          <Text style={styles.buttonText}>Buy class</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 40,
    color: colors.primary,
  },
  itemContainer: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#e6f7ff', 
    borderRadius: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    borderWidth: 0.2, 
    borderColor: 'black', 
  },
  itemText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },  
  button: {
    position: "absolute", 
    bottom: 20, 
    left: 20, 
    right: 20, 
    backgroundColor: colors.primary, 
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
