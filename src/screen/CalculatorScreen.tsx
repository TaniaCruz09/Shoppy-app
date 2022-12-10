import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export const CalculatorScreen = () => {
  const [multip, setMultip] = useState({
    cantidad: "",
    precioUnidad: "",
    total: "",
  });

  const handleForm = (text: string, input: string) => {
    setMultip({
      ...multip,
      [input]: text,
    });
  };

  const multiplicar = () => {
    const cantidad = Number(multip.cantidad);
    const precioUnidad = Number(multip.precioUnidad);

    if (isNaN(cantidad) || isNaN(precioUnidad)) {
      alert("Ingresa numeros valido");
    } else {
      const total = String(cantidad * precioUnidad);
      setMultip({
        ...multip,
        total,
        cantidad: "",
        precioUnidad: "",
      });
    }
  };
  return (
    <View>
      <View style={styles.containerMultiplicar}>
        <Text style={styles.textoCalculadora}>Cantidad LB</Text>
        <TextInput
          style={styles.inputCalculadora}
          onChangeText={(text) => handleForm(text, "cantidad")}
          value={String(multip.cantidad)}
        />
        <Text style={styles.textoCalculadora}>Precio por Unidad</Text>
        <TextInput
          style={styles.inputCalculadora}
          onChangeText={(text) => handleForm(text, "precioUnidad")}
          value={String(multip.precioUnidad)}
        />
        <Button
          title="Calcular"
          onPress={() => multiplicar()}
          color={"#474B4E"}
        />
        <Text style={styles.textoCalculadora}>Resultado</Text>
        <TextInput
          style={styles.inputCalculadora}
          onChangeText={(text) => handleForm(text, "precioUnidad")}
          value={String(multip.total)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMultiplicar: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "#6798",
    width: "33%",
    height: 200,
  },
  inputCalculadora: {
    borderWidth: 1.5,
    borderRadius: 100,
    width: "95%",
    height: 25,
    marginBottom: 10,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
  textoCalculadora: {
    fontSize: 15,
  },
});
