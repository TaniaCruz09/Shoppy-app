import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { Input } from "../components/login/Input";
import { Bottom } from "../components/login/Bottom";

interface Props {
  navigation: any;
}

export const LoginScreen = ({ navigation }: Props) => {
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
        <Text style={styles.textLostPassword}>¿Olvidaste tu contraseña?</Text>
        <Bottom navigation={navigation} />
        <View style={styles.containerForgetPassword}>
          <Text style={styles.textRegisterI}>¿No tienes una cuenta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.textRegisterII}>Registrarme!</Text>
          </TouchableOpacity>
        </View>
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
  textLostPassword: {
    color: "#9A76A5",
    textAlign: "right",
    fontSize: 12,
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
  containerForgetPassword: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  textRegisterI: {
    color: "grey",
    marginRight: 5,
  },
  textRegisterII: {
    color: "#9A76A5",
    fontWeight: "bold",
  },
});
