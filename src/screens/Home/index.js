import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";

import styles from "./styles";
import Earth from "../../../assets/meteor-earth.jpg";
import Logo from "../../../assets/meteoro-eletro.png";

function Home() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.top}>
        <ImageBackground style={styles.img} source={Earth} />
      </View>

      <View style={styles.logoview}>
        <Image style={styles.logo} source={Logo} />
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
          Seja bem vindo(a)!
        </Text>
        <Text
          style={{
            color: "#F1F1F1",
            fontSize: 20,
            alignSelf: "center",
            marginBottom: 15,
            fontWeight: "300",
          }}
        >
          Aqui em nossa loja, programadores tem desconto nos produtos para a sua
          casa!
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "#F1F1F1", fontSize: 20, fontWeight: "bold" }}>
            Ver Produtos
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
export default Home;
