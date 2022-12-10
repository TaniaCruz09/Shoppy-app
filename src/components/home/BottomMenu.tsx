import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

interface Props {
  text: string;
  navigation: () => {};
}

export default function BottomMenu({ text, navigation }: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={navigation}>
      <Text style={styles.btntext}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    width: "80%",
    height: "15%",
    borderRadius: 20,
    marginVertical: 20,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: "#62355C",
  },
  btntext: {
    color: "#3F4652",
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
  },
});
