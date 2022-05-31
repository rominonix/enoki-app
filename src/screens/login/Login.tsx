import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
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
      <Text style={{ fontSize: 16, fontWeight: "500", color: "#828C61", textTransform:"uppercase" }}>
        Välkommen till Enoki 🤓{" "}
      </Text>
      {/* <Text style={{ fontSize: 15, marginTop: 8, color:"#343434", fontWeight: "300" }}>
        Din app för att gå till skogen 🌲
      </Text> */}

      <View style={{ marginTop: 25 }}>
        <Text style={globalStyle.label}>E-postdress</Text>

        <TextInput
          style={globalStyle.inputLogin}
          value={email}
          onChangeText={(text) => setEmail(text)}
          autoCapitalize="none"
          placeholder="E-postadress"
          placeholderTextColor="#706F70"
        />
      </View>

      <View>
        <Text style={globalStyle.label}>Losenörd</Text>
        <TextInput
          style={globalStyle.inputLogin}
          value={password}
          onChangeText={(text) => setPassword(text)}
          autoCapitalize="none"
          placeholder="Losenörd"
          placeholderTextColor="#706F70"
          secureTextEntry
        />
      </View>

      <View style={{ alignItems: "flex-end", width: 290 }}>
        <Pressable onPress={handleResetPassword}>
          <Text
            style={{
              color: "#828C61",
              fontWeight: "600",
              fontSize: 10,
              textTransform: "uppercase",
            }}
          >
            Återställ lösenord
          </Text>
        </Pressable>
      </View>
      <TouchableOpacity style={globalStyle.buttonLogin} onPress={handleLogin}>
        <Text
          style={globalStyle.textButtonLogin}
        >
          Logga in
        </Text>
      </TouchableOpacity>

      <View style={globalStyle.lineContainer}>
        <View style={globalStyle.line} />
        <Text style={globalStyle.label}>Eller</Text>
        <View style={globalStyle.line} />
      </View>

      <TouchableOpacity
        style={globalStyle.buttonLogin}
        onPress={handleCreateAccount}
      >
        <Text style={globalStyle.textButtonLogin}>Skapa konto</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;
