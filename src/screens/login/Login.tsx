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
import globalStyle from "../../styles/styles";
import { TouchableOpacity } from "react-native";

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
      {/* <View> */}
      <View
        style={{
          backgroundColor: "#F1FFE0",
          borderRadius: 200,
          justifyContent: "center",
          alignItems: "center",
          width: 120,
          height: 120,
          marginBottom: 15,
        }}
      >
        <Text style={{ fontSize: 70 }}>🍄</Text>
      </View>
      <Text style={{ fontSize: 20 }}>Välkommen till Enoki</Text>
      <Text style={{ fontSize: 15, marginTop: 8 }}>
        Din app för att gå till skogen 🌲
      </Text>

      <View style={{ marginTop: 25 }}>
        <Text>E-postdress</Text>

        <TextInput
          style={globalStyle.inputLogin}
          value={email}
          onChangeText={(text) => setEmail(text)}
          autoCapitalize="none"
        />
      </View>

      <View>
        <Text>Losenörd</Text>
        <TextInput
          style={globalStyle.inputLogin}
          value={password}
          onChangeText={(text) => setPassword(text)}
          autoCapitalize="none"
        />
      </View>

      <TouchableOpacity style={globalStyle.button} onPress={handleLogin}>
        <Text style={{ textAlign: "center" }}>Login</Text>
      </TouchableOpacity>

      <Pressable onPress={handleResetPassword}>
        <Text style={{ textAlign: "center", marginTop: 8 }}>Reset password</Text>
      </Pressable>

      <Pressable style={globalStyle.button} onPress={handleCreateAccount}>
        <Text style={{ textAlign: "center" }}>Create account</Text>
      </Pressable>
      {/* </View> */}
    </SafeAreaView>
  );
};

export default Login;
