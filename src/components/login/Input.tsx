import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const Input = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Correo</Text>
      <View style={styles.containerInput}>
        <Entypo name="email" size={20} color="#9A76A5" />
        <TextInput placeholder="Ejemplo@gmail.com" style={styles.input} />
      </View>
      <Text style={styles.text}>Contraseña</Text>
      <View style={styles.containerInput}>
        <MaterialCommunityIcons name="key-outline" size={20} color="#9A76A5" />
        <TextInput placeholder="Ejemplo@gmail.com" style={styles.input} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  containerInput: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
    backgroundColor: "#DCD7DE",
    borderRadius: 10,
    paddingHorizontal: 20,
    height: 50,
    borderWidth: 0.5,
    borderColor: "grey",
  },
  text: {
    marginVertical: 5,
    color: "grey",
  },
  input: {
    marginLeft: 5,
  },
});
