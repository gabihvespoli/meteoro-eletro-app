import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import Products from "./src/screens/Products";

function App() {
  return (
    <View>
      {/* <Login /> */}
      {/* <Home /> */}
      <Products />
      <StatusBar style="auto" />
    </View>
  );
}
export default App;
