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
// import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../../contexts/UserContext";

const Login: React.FC = () => {
  //   const navigation = useNavigation();
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

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          style={styles.loginInput}
          value={email}
          onChangeText={(text) => setEmail(text)}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.loginInput}
          value={password}
          onChangeText={(text) => setPassword(text)}
          autoCapitalize="none"
        />

        <Pressable style={styles.buttonLogin} onPress={handleLogin}>
          <Text style={{ textAlign: "center" }}>Login</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
  loginInput: {
    backgroundColor: "violet",
    width: 300,
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 3,
  },
  buttonLogin: {
    width: 200,
    borderRadius: 30,
    marginTop: 20,
    alignSelf: "center",
    padding: 15,
    backgroundColor: "skyblue",
  },
});

export default Login;
