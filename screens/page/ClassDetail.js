import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { useCart } from "../../context/CartContext"; 
import { useNavigation } from "@react-navigation/native";

export default function ClassDetail({ route }) {
  const { classDetails } = route.params; 
  const { addToCart } = useCart(); 
  const navigation = useNavigation(); 


  const handleAddToCart = () => {
    addToCart(classDetails); 
    // console.log(`${classDetails.teacherName} has been added to the cart.`); 
    navigation.navigate("Cart"); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Class Details</Text>
      <Text style={styles.label}>Teacher *</Text>
      <Text style={styles.input}>{classDetails.teacherName}</Text>

      <Text style={styles.label}>Date *</Text>
      <Text style={styles.input}>{classDetails.date}</Text>

      <Text style={styles.label}>Comments</Text>
      <Text style={styles.input}>{classDetails.comments || "Optional"}</Text>

      <TouchableOpacity onPress={handleAddToCart} style={styles.button}>
        <Text style={styles.buttonText}>Add To Cart</Text>
      </TouchableOpacity>
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
    color: colors.primary,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    alignSelf: "flex-start",
  },
  input: {
    fontSize: 20,
    padding: 10,
    backgroundColor: "#f0f0f0",
    width: "100%",
    marginBottom: 20,
    borderRadius: 20,
    borderWidth: 0.2, 
    borderColor: 'black', 
  },
  button: {
    backgroundColor: colors.primary, 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
