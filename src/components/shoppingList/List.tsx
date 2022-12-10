import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { Products } from "../../../interfaces";

interface Props {
  item: Products;
}

export const List = ({ item }: Props) => {
  const { id, name, price } = item;

  return (
    <View style={styles.container}>
      <View style={styles.product}>
        <Image
          style={styles.image}
          source={require("../../../assets/check.png")}
        />
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{price}</Text>
      </View>
      <View style={styles.icons}>
        <TouchableOpacity>
          <Image
            style={styles.image}
            source={require("../../../assets/edit.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={styles.image}
            source={require("../../../assets/delete.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    height: 60,
    alignItems: "center",
  },
  product: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  checkbox: {},
  text: {
    fontSize: 19,
    fontWeight: "bold",
    marginHorizontal: 5,
  },
  icons: {
    flexDirection: "row",
  },
  image: {
    width: 27,
    height: 27,
    marginHorizontal: 5,
  },
});
