import React from "react";
import { View, Text, SafeAreaView, Button, StyleSheet } from "react-native";
import BlackButton from "../components/Buttons";

export default function Cotizador(props) {
  const { navigation } = props;
  return (
    <SafeAreaView style={{ ...styles.container }}>
      <Text style={styles.tittleApp}>Bienvenidos a mi Aplicacion</Text>
      <Text style={styles.textApp}>Desarrollado por: Julian Andres Correa Mejia</Text>
      <View style={{ ...styles.buttonContainer }}>
        <BlackButton
          title="Ir a Cotizador"
          onPress={() => navigation.navigate("cotizador")}
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
    position: "absolute",
    bottom: 0,
    justifyContent: "space-around",
    width: "100%",
  },
  tittleApp: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#34495E",
    textAlign: "center",
    paddingTop: 30,
  },
  textApp:{
    fontSize: 15,
    fontWeight: "bold",
    color: "#34495E",
    textAlign: "center",
    paddingTop: 200,
  },
});
