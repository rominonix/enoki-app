import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/login/Login";
import CreateAccount from "../screens/login/CreateAccount";
import ResetPassword from "../screens/login/PasswordReset";

const Stack = createStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          title: "Logga in"
        }}
      />
      <Stack.Screen
        name="Create account"
        component={CreateAccount}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Password reset"
        component={ResetPassword}
        options={{ title: "Lösenordsåterställning", headerLeft: () => null,  headerStyle: { backgroundColor: "#F1FFE0", borderColor: "#F1FFE0"}, headerTitleStyle: { fontSize: 16, fontWeight: "400"} }}
      />
    </Stack.Navigator>
  );
};

export default LoginStack;
