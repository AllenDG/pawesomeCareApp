import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";

import ILbg from "../assets/illustration/bg.jpg"
import ButtonComp from "../components/ButtonComp";

export default function Getstarted({ navigation }) {
  return (
    <ImageBackground source={ILbg} style={styles.page}>
      <View>
        
        <Text style={styles.text}>
        Pawesome Care is the perfect companion for pet owners, providing all the tools and resources you need to ensure the best possible care 
        </Text>
      </View>
      <View>
        <ButtonComp
          title="Get Started"
          onPress={() => navigation.navigate("Register")}
        />
        <View style={{ height: 16 }}></View>
        <ButtonComp
          type="secondary"
          title="Login"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    justifyContent: "space-between",
    flex: 1,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: "center",
    marginTop: 225,
    textShadow: "30px black", 
  },
});
