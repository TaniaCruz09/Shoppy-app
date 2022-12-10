import React from "react";
import { StyleSheet, View, Text } from "react-native";
import BottomMenu from "../components/home/BottomMenu";

interface Props {
  navigation: any;
}

export const HomeScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Shoppy</Text>
      <BottomMenu
        text={"Presupuesto para las compras"}
        navigation={() => navigation.navigate("ShoppyBudget")}
      />
      <BottomMenu
        text={"Lista para las compras"}
        navigation={() => navigation.navigate("ShoppyList")}
      />
      <BottomMenu
        text={"Lista de compras guardadas"}
        navigation={() => navigation.navigate("SaveList")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9A76A5",
    alignItems: "center",
    justifyContent: "center",
  },
  tittle: {
    fontSize: 45,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 40,
  },
});
