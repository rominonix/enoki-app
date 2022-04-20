import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../../contexts/UserContext";
import globalStyle from "../../styles/styles"

const Login: React.FC = () => {
  const navigation = useNavigation();
  const { login } = useContext(UserContext)!;
  const [loginIn, setLoginIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // setLoginIn(true);
    // setButtontext('LOGGAR IN...')
    login(email, password);
    // console.log("loginnn");
  };

  const handleCreateAccount = () => {
    //@ts-ignore
    navigation.navigate("Create account");
  };

  const handleResetPassword = () => {
    //@ts-ignore
    navigation.navigate("Password reset");
  };

  return (
    <SafeAreaView style={globalStyle.container}>
      <View>
        <TextInput
          style={globalStyle.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          autoCapitalize="none"
        />
        <TextInput
          style={globalStyle.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
          autoCapitalize="none"
        />

        <Pressable style={globalStyle.buttonLogin} onPress={handleLogin}>
          <Text style={{ textAlign: "center" }}>Login</Text>
        </Pressable>

        <Pressable onPress={handleResetPassword}>
          <Text style={{ textAlign: "center" }}>Reset password</Text>
        </Pressable>

        <Pressable style={globalStyle.buttonLogin} onPress={handleCreateAccount}>
          <Text style={{ textAlign: "center" }}>Create account</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Login;
