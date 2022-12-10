import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

interface Props {
  text: string;
  navigation: () => {};
}

export const Header = ({ text, navigation }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigation}>
        <FontAwesome5 name="chevron-left" size={30} color="#9C66AD" />
      </TouchableOpacity>
      <Text style={styles.textHeader}>{text}</Text>
      <TouchableOpacity>
        <Image
          style={styles.image}
          source={require("../../assets/logoShoppy.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginBottom: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textHeader: {
    fontSize: 25,
    color: "#9C66AD",
    fontWeight: "bold",
  },
  image: {
    width: 60,
    height: 60,
  },
});
