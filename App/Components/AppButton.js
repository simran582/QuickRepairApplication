import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import color from "../config/color";

function AppButton({ title, color = "black", width = "50%", onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: color, width: width }]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: color.black,
    borderRadius: 25,
    alignItems: "center",
    alignSelf: "center",
    padding: 10,
     width: "100%",
    marginTop: 15,
    marginBottom: 10,
  },
  text: {
    color: "white",
    fontSize: 14,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
export default AppButton;
