import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function BlackButton(props) {
  const { title, onPress } = props;
  return (
    <TouchableOpacity
      style={{ ...styles.button, backgroundColor: "#A9CCE3" }}
      onPress={onPress}
    >
      <Text style={{ ...styles.buttontext }}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    paddingVertical: 5,
    width: "40%",
    borderRadius: 15,
    marginVertical: 20,
    marginRight: 10,
    borderColor: "#1B4F72",
    borderWidth: 2,
  },
  buttontext: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#34495E",
    fontSize: 15,
  },
});
