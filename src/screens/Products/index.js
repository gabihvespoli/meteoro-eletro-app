import React from "react";
import { View, Text, ScrollView, ImageBackground, Image } from "react-native";
import { Card, Button, Icon } from "react-native-elements";

import styles from "./styles";
import Earth from "../../../assets/meteor-earth.jpg";
import listaProdutos from "./produtos";

function Products() {
  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={Earth} style={styles.imgBackground}>
        <View style={styles.content}>
          {listaProdutos.map((produto, id) => {
            return (
              <Card>
                <Card.Title>OFERTA</Card.Title>
                <Card.Divider />
                <Text
                  key={id}
                  style={{
                    fontSize: "25",
                    fontWeight: "bold",
                    color: "black",
                    marginBottom: 10,
                    alignSelf: "center",
                  }}
                >
                  {produto.titulo}
                </Text>
                <Text
                  style={{
                    color: "black",
                    marginBottom: 10,
                    alignSelf: "center",
                  }}
                >
                  {produto.descricao}
                </Text>
                <Card.Image
                  style={styles.image}
                  source={produto.avatar}
                ></Card.Image>
                <Text
                  style={{
                    fontSize: "25",
                    fontWeight: "bold",
                    color: "black",
                    marginBottom: 10,
                    alignSelf: "center",
                  }}
                >
                  {produto.valor}
                </Text>
                <Button
                  buttonStyle={{
                    borderRadius: 20,
                    marginHorizontal: 80,
                    marginVertical: 10,
                    backgroundColor: "purple",
                  }}
                  title="COMPRAR"
                />
              </Card>
            );
          })}
        </View>
      </ImageBackground>
    </ScrollView>
  );
}
export default Products;
