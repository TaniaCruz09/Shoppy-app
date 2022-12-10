import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { ListProductsResponse } from "../../interfaces";
import { HttpClient } from "../../services/http.service";
import { BottomPrimary } from "../components/BottonPrimary";
import { Header } from "../components/Header";
import { List } from "../components/shoppingBudget/List";
import { Products } from "../../interfaces/index";

interface Props {
  navigation: any;
}
const products = new HttpClient();

export const ShoppingBudgetScreen = ({ navigation }: Props) => {
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
        text={"Mi presupuesto"}
        navigation={() => navigation.navigate("Home")}
      />
      <View style={styles.containerB}>
        <Text style={styles.texto}>Dinero por gastar</Text>
        <TextInput style={styles.input} />
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
      <TouchableOpacity style={styles.btnEnd}>
        <Text style={styles.btnText}>Finalizar compras</Text>
      </TouchableOpacity>
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
    fontSize: 18,
    fontWeight: "bold",
  },
  input: {
    borderBottomWidth: 3,
    borderColor: "#62355C",
    height: 45,
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
    height: 45,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  inputPrecio: {
    borderBottomWidth: 3,
    borderColor: "#62355C",
    width: "30%",
    height: 45,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  containerListaDeCompra: {
    marginTop: 200,
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
