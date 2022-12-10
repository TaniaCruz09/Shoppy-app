import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/screen/HomeScreen";
import { SplashScreen } from "./src/screen/SplashScreen";
import { RegisterScreen } from "./src/screen/RegisterScreen";
import { LoginScreen } from "./src/screen/LoginScreen";
import { ShoppingListScreen } from "./src/screen/ShoppingListScreen";
import { ShoppingBudgetScreen } from "./src/screen/ShoppingBudgetScreen";
import SaveListScreen from "./src/screen/SaveListScreen";

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ShoppyBudget" component={ShoppingBudgetScreen} />
        <Stack.Screen name="ShoppyList" component={ShoppingListScreen} />
        <Stack.Screen name="SaveList" component={SaveListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
