import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Bottom } from "../components/register/Bottom";
import { Input } from "../components/register/Input";

interface Props {
  navigation: any;
}

export const RegisterScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("../../assets/logoShoppy.png")}
        />
        <Text style={styles.textHeader}>Shoppy</Text>
      </View>
      <View style={styles.containerB}>
        <Text style={styles.textInitSesion}>Inicia sesion</Text>
        <Input />
        <View style={styles.containerForgetPassword}>
          <Text style={styles.textRegisterI}>Ya tengo una cuenta.</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.textRegisterII}>Acceder!</Text>
          </TouchableOpacity>
        </View>
        <Bottom />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DCD7DE",
  },
  header: {
    flex: 0.5,
    backgroundColor: "#DCD7DE",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 70,
    height: 70,
  },
  textHeader: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#9A76A5",
  },
  containerForgetPassword: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  textRegisterI: {
    color: "grey",
    marginRight: 5,
  },
  textRegisterII: {
    color: "#9A76A5",
    fontWeight: "bold",
  },
  containerB: {
    flex: 2,
    backgroundColor: "#fff",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    paddingHorizontal: 30,
  },
  textInitSesion: {
    fontSize: 25,
    fontWeight: "800",
    marginTop: 30,
  },
});
