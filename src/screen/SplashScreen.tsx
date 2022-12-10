import React from "react";
import { StyleSheet, View } from "react-native";
import * as Animatable from "react-native-animatable";

interface Props {
  navigation: any;
}

export const SplashScreen = ({ navigation }: Props) => {
  const goToLoginScreen = (routeName: string) => {
    navigation.navigate(routeName);
  };

  setTimeout(() => {
    goToLoginScreen("Login");
  }, 2000);

  return (
    <View style={styles.container}>
      <Animatable.Text
        style={styles.title}
        animation="zoomInUp"
        easing={"linear"}
      >
        Shoppy
      </Animatable.Text>
      <Animatable.Image
        style={styles.logo}
        source={require("../../assets/logoShoppy.png")}
        animation="pulse"
        easing={"ease-out"}
        iterationCount="infinite"
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
  title: {
    fontSize: 50,
    color: "#fff",
    fontWeight: "bold",
  },
  logo: {
    marginTop: 20,
    width: 120,
    height: 120,
  },
});
