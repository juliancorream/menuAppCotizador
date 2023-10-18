import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Cotizador from "../screens/Cotizador";
import Servicios from "../screens/Servicios";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={Home} options={{ title: "Home" }} />
      <Stack.Screen
        name="cotizador"
        component={Cotizador}
        options={{ title: "Cotizador" }}
      />
      <Stack.Screen
        name="servicios"
        component={Servicios}
        options={{ title: "Servicios" }}
      />
    </Stack.Navigator>
  );
}

/*

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={Home} options={{ title: "Home" }} />
      <Tab.Screen
        name="cotizador"
        component={Cotizador}
        options={{ title: "Cotizador" }}
      />
      <Tab.Screen
        name="servicios"
        component={Servicios}
        options={{ title: "Servicios" }}
      />
    </Tab.Navigator>
  );
}
*/
