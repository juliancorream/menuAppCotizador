import React from "react";
import { View, Text, SafeAreaView, Button, StyleSheet } from "react-native";
import BlackButton from "../components/Buttons";

export default function Home(props) {
  const { navigation } = props;
  return (
    <SafeAreaView style={{ ...styles.container }}>
      <Text>Estamos en la Home</Text>
      <View style={{ ...styles.buttonContainer }}>
        <BlackButton
          title="Ir a Servicios"
          onPress={() => navigation.navigate("servicios")}
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
