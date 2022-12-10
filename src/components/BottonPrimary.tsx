import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface Props {
  text: string;
  accion: () => void;
}

export const BottomPrimary = ({ text, accion }: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={accion}>
      <Text style={styles.btntext}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#9C66AD",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: 110,
    height: 50,
    borderRadius: 10,
    marginVertical: 20,
  },
  btntext: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
