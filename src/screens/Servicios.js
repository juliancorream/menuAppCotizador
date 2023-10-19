import React, { useState } from "react";
import { View, Text, SafeAreaView, TextInput, StyleSheet } from "react-native";
import BlackButton from "../components/Buttons";
import { Linking } from "react-native";

export default function Servicios(props) {
  const { navigation } = props;
  const [address, setAddress] = useState("");

  const handleOpenMaps = () => {
    const query = encodeURIComponent(address);
    Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${query}`);
  };

  return (
    <SafeAreaView style={{ ...styles.container }}>
      <Text style={styles.tittleApp}>Servicio de Busqueda de Direcciones</Text>

      <View>
        <TextInput
          style={{ ...styles.input }}
          placeholder="Ingrese una dirección"
          onChangeText={(text) => setAddress(text)}
          value={address}
        />
      </View>
      <BlackButton title="Abrir Google Maps" onPress={handleOpenMaps} />

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
    position: "absolute",
    bottom: 0,
    justifyContent: "space-around",
    width: "100%",
  },
  tittleApp: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#34495E",
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 30,
  },
  input: {
    backgroundColor: "#D4E6F1",
    width: "90%",
    height: 50,
    borderRadius: 20,
    margin: 20,
    paddingLeft: 15,
  },
});
