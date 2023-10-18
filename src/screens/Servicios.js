import React from "react";
import { View, Text, SafeAreaView, Button, StyleSheet } from "react-native";
import BlackButton from "../components/Buttons";

export default function Servicios(props) {
  const { navigation } = props;
  return (
    <SafeAreaView style={{ ...styles.container }}>
      <Text>Estamos en los Servicios</Text>
      <View style={{ ...styles.buttonContainer }}>
        <BlackButton
          title="Ir a Home"
          onPress={() => navigation.navigate("home")}
        />

        <BlackButton
          title="Ir a Cotizador"
          onPress={() => navigation.navigate("cotizador")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  },
});
