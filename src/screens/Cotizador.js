import React from "react";
import { View, Text, SafeAreaView, Button, StyleSheet } from "react-native";
import BlackButton from "../components/Buttons";

export default function Cotizador(props) {
  const { navigation } = props;
  return (
    <SafeAreaView style={{ ...styles.container }}>
      <Text>Estamos en el Cotizador</Text>
      <View style={{ ...styles.buttonContainer }}>
        <BlackButton
          title="Ir a Home"
          onPress={() => navigation.navigate("home")}
        />

        <BlackButton
          title="Ir a Servicios"
          onPress={() => navigation.navigate("servicios")}
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
