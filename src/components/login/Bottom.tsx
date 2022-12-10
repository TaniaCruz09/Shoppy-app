import React from "react";
import {
  TextInput,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from "react-native";

interface Props {
  navigation: any;
}

export const Bottom = ({ navigation }: Props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Home")}
    >
      <Text style={styles.textButton}>Iniciar sesion</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#9A76A5",
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    borderRadius: 10,
  },
  textButton: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});
