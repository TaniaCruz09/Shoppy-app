import React from "react";
import {
  TextInput,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from "react-native";

export const Bottom = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.textButton}>Iniciar sesion</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#9A76A5",
  },
  textButton: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#9A76A5",
  },
});
