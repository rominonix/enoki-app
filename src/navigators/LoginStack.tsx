import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/login/Login";
import CreateAccount from "../screens/login/CreateAccount";


const Stack = createStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
      <Stack.Screen name="Create account" component={CreateAccount} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

export default LoginStack;