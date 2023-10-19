import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Button,
  StyleSheet,
  StatusBar,
} from "react-native";
import BlackButton from "../components/Buttons";
import Form from "../components/Form";
import Footer from "../components/Footer";
import ResultCalculation from "../components/ResultCalculation";
import colors from "../components/colors";

export default function Home(props) {
  const { navigation } = props;
  const [capital, setCapital] = useState(null);
  const [interest, setInterest] = useState(null);
  const [months, setMonths] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (capital && interest && months) calculate();
    else reset();
  }, [capital, interest, months]);

  const calculate = () => {
    reset();
    if (!capital) {
      setErrorMessage("Añade la Cantidad que quieres Solicitar");
    } else if (!interest) {
      setErrorMessage("Añade el Interes del Prestamo");
    } else if (!months) {
      setErrorMessage("Selecciona los meses a Pagar");
    } else {
      const i = interest / 100;
      const fee = capital / ((1 - Math.pow(i + 1, -months)) / i);
      setTotal({
        monthlyFee: fee.toFixed(2).replace(".", ","),
        totalPayable: (fee * months).toFixed(2).replace(".", ","),
      });
    }
  };

  const reset = () => {
    setErrorMessage("");
    setTotal(null);
  };

  return (
    <SafeAreaView style={{ ...styles.container }}>
      <StatusBar barStyle={"light-content"} />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background} />

        <Text style={styles.tittleApp}>Cotizador de Prestamos</Text>

        <Form
          setCapital={setCapital}
          setInterest={setInterest}
          setMonths={setMonths}
        />
      </SafeAreaView>
      <ResultCalculation
        capital={capital}
        interest={interest}
        months={months}
        total={total}
        errorMessage={errorMessage}
      />
      <Footer calculate={calculate} />

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
    position: "absolute",
    bottom: 45,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  safeArea: {
    height: 240,
    alignItems: "center",
  },
  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: "absolute",
    zIndex: -1,
  },
  tittleApp: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    paddingTop: 15,
  },
});
