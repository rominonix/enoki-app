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
import { TouchableOpacity } from 'react-native';

const Login: React.FC = () => {
  const navigation = useNavigation();
  const { login, getStorageData } = useContext(UserContext)!;
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

  useEffect(() => {
    getStorageData();
  }, []);

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

        <TouchableOpacity style={globalStyle.button} onPress={handleLogin}>
          <Text style={{ textAlign: "center" }}>Login</Text>
        </TouchableOpacity>

        <Pressable onPress={handleResetPassword}>
          <Text style={{ textAlign: "center" }}>Reset password</Text>
        </Pressable>

        <Pressable style={globalStyle.button} onPress={handleCreateAccount}>
          <Text style={{ textAlign: "center" }}>Create account</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Login;
