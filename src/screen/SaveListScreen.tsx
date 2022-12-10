import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Header } from "../components/Header";
import { List } from "../components/SaveList/List";
import Navigation from "../../Navigation";

interface Props {
  navigation: any;
}

interface IProducts {
  id: number;
  nombre: string;
  precio: number;
}

export default function SaveListScreen({ navigation }: Props) {
  const productos: IProducts[] = [
    {
      id: 1,
      nombre: "Azucar",
      precio: 8,
    },
    {
      id: 2,
      nombre: "cafe",
      precio: 6,
    },
    {
      id: 3,
      nombre: "arroz",
      precio: 16,
    },
    {
      id: 6,
      nombre: "chile",
      precio: 4,
    },
    {
      id: 7,
      nombre: "leche",
      precio: 60,
    },
    {
      id: 8,
      nombre: "salsa",
      precio: 30,
    },
    {
      id: 9,
      nombre: "salsa",
      precio: 30,
    },
  ];
  return (
    <View style={styles.container}>
      <Header
        text={"Compras realizadas"}
        navigation={() => navigation.navigate("Home")}
      />
      <View style={styles.containerB}>
        <FlatList
          style={styles.container}
          data={productos}
          keyExtractor={(item: IProducts): any => item.id}
          renderItem={({ item, index }) => <List item={item} />}
          ItemSeparatorComponent={() => (
            <View style={{ marginVertical: 0 }}></View>
          )}
        />
      </View>
      <TouchableOpacity style={styles.btnDelete}>
        <Text style={styles.btntext}>Eliminar todo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
  },
  containerB: {
    backgroundColor: "#EEE4F1",
    height: "78%",
    marginBottom: 10,
  },
  btnDelete: {
    width: 120,
    height: 50,
    backgroundColor: "#DE0000",
    alignSelf: "center",
    borderRadius: 10,
    justifyContent: "center",
  },
  btntext: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
});
