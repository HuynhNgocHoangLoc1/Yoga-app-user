import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import colors from "../../constants/colors";

export default function Welcome() {
    const navigation = useNavigation();
    const handleStart = () => {
        navigation.navigate("Login");
    }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome</Text>
      {/* <Text style={styles.text}>Universal Yoga</Text> */}
      <TouchableOpacity style={styles.buttonStart} onPress={handleStart}>
        <Text style={styles.startText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
        flex: 1,
        paddingTop: 40,
        position: 'relative',
        justifyContent: "center",
        alignItems: "center",
  },
  buttonStart: {
    width: "80%",
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    elevation: 10,
    position: "absolute",
    bottom: 50,
  },
  text: {
    fontSize: 50,
    fontWeight: "900",
    color: colors.white,
  },
  startText: {
    fontSize: 30,
    fontWeight: "bold",
    paddingHorizontal: 40,
    paddingVertical: 10,
    color: colors.primary,
  },
});
