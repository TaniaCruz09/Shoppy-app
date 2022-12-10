import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, FlatList } from "react-native";
import { BottomPrimary } from "../components/BottonPrimary";
import { Header } from "../components/Header";
import { List } from "../components/shoppingList/List";
import { HttpClient } from "../../services/http.service";
import { ListProductsResponse } from "../../interfaces";

interface Props {
  navigation: any;
}

const products = new HttpClient();

export const ShoppingListScreen = ({ navigation }: Props) => {
  const [product, setProduct] = useState<ListProductsResponse>({
    data: [],
    metadata: {
      nextPage: 1,
      currentPage: 1,
      perPage: 1,
    },
  });

  const getProduct = async () => {
    const response = await products.get<ListProductsResponse>("products");
    setProduct(response);
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <View style={styles.container}>
      <Header
        text={"Mi lista de compras"}
        navigation={() => navigation.navigate("Home")}
      />
      <View style={styles.containerB}>
        <View style={styles.containerIputII}>
          <TextInput style={styles.inputProducto} placeholder={"Producto"} />
          <TextInput style={styles.inputPrecio} placeholder={"Precio"} />
        </View>
        <BottomPrimary text={"Agregar"} accion={getProduct} />
      </View>
      <View style={styles.containerListaDeCompra}>
        <FlatList
          style={styles.container}
          data={product.data}
          keyExtractor={(item): any => item.id}
          renderItem={({ item, index }) => <List item={item} />}
        />
      </View>
      <Text style={styles.texto}>Total</Text>
      <TextInput style={styles.input} />
      <BottomPrimary text={"Finalizar"} accion={getProduct} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
  },
  header: {
    height: 120,
  },
  containerB: {
    height: 50,
  },
  texto: {
    fontSize: 22,
    fontWeight: "bold",
  },
  input: {
    borderBottomWidth: 3,
    borderColor: "#62355C",
    height: 40,
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
  },
  containerIputII: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  inputProducto: {
    borderBottomWidth: 3,
    borderColor: "#62355C",
    width: "60%",
    height: 40,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  inputPrecio: {
    borderBottomWidth: 3,
    borderColor: "#62355C",
    width: "30%",
    height: 40,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  containerListaDeCompra: {
    marginTop: 130,
    height: "48%",
    backgroundColor: "#EEE4F1",
    marginVertical: 20,
    paddingVertical: 30,
  },
  btnEnd: {
    backgroundColor: "#9C66AD",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 60,
    borderRadius: 10,
    marginVertical: 20,
    marginTop: 10,
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 17,
  },
});
