import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from "react-native";

import styles from "./styles";
import Logo from "../../../assets/astronauta.png";

function Login() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="position" enabled>
      <View style={styles.top}>
        <Image style={styles.img} source={Logo} />
      </View>

      <View style={styles.inputs}>
        <Text
          style={{
            color: "#F1F1F1",
            fontSize: 30,
            alignSelf: "center",
            marginBottom: 15,
          }}
        >
          Meteoro Eletro
        </Text>
        <TextInput placeholder="Digite seu usuário" style={styles.input} />
        <TextInput
          placeholder="Digite sua senha"
          style={styles.input}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "#F1F1F1", fontSize: 20, fontWeight: "bold" }}>
            Entrar
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
export default Login;
