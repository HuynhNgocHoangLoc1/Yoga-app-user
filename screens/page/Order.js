import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useCart } from "../../context/CartContext";
import { useNavigation } from "@react-navigation/native";

export default function Order() {
  const { purchasedClasses } = useCart();
  const navigation = useNavigation();

  const handleBackToHome = () => {
    navigation.navigate("UITab");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order</Text>
      {purchasedClasses.length > 0 ? (
        <>
          <Text style={styles.subtitle}>Purchased Classes</Text>
          <FlatList
            data={purchasedClasses}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <Text style={styles.itemText}>Teacher: {item.teacherName}</Text>
                <Text style={styles.itemText}>Date: {item.date}</Text>
                <Text style={styles.itemText}>
                  Comments: {item.comments || "No comments"}
                </Text>
              </View>
            )}
          />
        </>
      ) : (
        <Text style={styles.noItemsText}>No classes purchased yet.</Text>
      )}
      <TouchableOpacity onPress={handleBackToHome} style={styles.button}>
        <Text style={styles.buttonText}>Back to home</Text>
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
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  itemContainer: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#e6f7ff",
    borderRadius: 20,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    borderWidth: 0.2, 
    borderColor: 'black', 
  },
  itemText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
  noItemsText: {
    fontSize: 18,
    color: "gray",
    marginTop: 30,
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
