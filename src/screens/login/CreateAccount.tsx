import React, { useContext, useState } from "react";
import { View, TextInput, Text, Pressable, Image } from "react-native";
// import { ScrollView } from "react-native-gesture-handler";
import { UserContext } from "../../contexts/UserContext";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "../../styles/styles";

const CreateAccount: React.FC = () => {
  const navigation = useNavigation();
  const { register } = useContext(UserContext)!;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ----------------- States for validations -----------------
  //   const [invalidName, setInvalidName] = useState(false);
  //   const [invalidPassword, setInvalidPassword] = useState(false);
  //   const [invalidEmail, setInvalidEmail] = useState(false);

  // ----------------- States for show icons in password and confirm password fields -----------------
  //   const [showCheck, setShowCheck] = useState(false);

  // ----------------- State for checkbox select -----------------
  //   const [isSelected, setIsSelected] = useState(false);

  // ----------------- Validations ----------------

  //   const handlePassword = async (text: string) => {
  //     setPassword(text);
  //     const valid = await schema.isValid({ password: password });
  //     if (!valid) {
  //       setInvalidPassword(true);
  //     } else {
  //       setInvalidPassword(false);
  //       checkPassword(text);
  //     }
  //   };

  //   const handleValidEmail = async (text: string) => {
  //     setEmail(text);
  //     const valid = await schema.isValid({ email: email });
  //     if (!valid) {
  //       setInvalidEmail(true);
  //     } else {
  //       setInvalidEmail(false);
  //     }
  //   };

  //   const handleValidName = async (text: string) => {
  //     setName(text);
  //     const valid = await schema.isValid({ name: name });
  //     if (!valid) {
  //       setInvalidName(true);
  //     } else {
  //       setInvalidName(false);
  //     }
  //   };

  const handleRegister = async () => {
    const success = await register({
      name,
      email,
      password,
    });

    if (success) {
      //@ts-ignore
      console.log("YEAAAA");
      // navigation.replace("Kategorier");
    }
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      {/* <ScrollView> */}
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
 
        <View>
          <Text style={{ fontSize: 20 }}>Skappa ett nytt konto i Enoki</Text>
        </View>

        {/* ----------------- Name Input ---------------- */}

        {/* <View> */}
          <View style={{marginTop: 25, marginBottom: 10}}>
            <Text>Namn</Text>
            <TextInput
              style={globalStyles.inputLogin}
              value={name}
              placeholder="Namn"
              placeholderTextColor="#706F70"
              onChangeText={(text) => {
                setName(text);
              }}
            />
          </View>
        {/* </View> */}

        {/* ----------------- Email Input ---------------- */}

        <View>
          <View style={{ marginBottom: 10}}>
          <Text>E-postaddress</Text>
            <TextInput
              style={globalStyles.inputLogin}
              value={email}
              placeholder="E-postadress"
              placeholderTextColor="#706F70"
              onChangeText={(text) => setEmail(text)}
              autoCapitalize="none"
            />
          </View>
        </View>

        {/* ----------------- Password Input ---------------- */}

        <View>
          <View style={{ marginBottom: 5}}>
          <Text>Ditt superhemligt losenörd</Text>
            <TextInput
              style={globalStyles.inputLogin}
              value={password}
              placeholder="Lösenord"
              placeholderTextColor="#706F70"
              onChangeText={(text) => {
                setPassword(text);
              }}
              autoCapitalize="none"
              secureTextEntry
            />
            {/* {showCheck && (
                <Image
                  source={require("../../../assets/images/check-green.png")}
                  style={styles.inputIcon}
                />
              )} */}
          </View>
          {/* <Text style={styles.passwordConditions}>
              Ditt lösenord måste bestå av minst 8 tecken och får endast
              innehålla siffror eller bokstäver.
            </Text> */}
        </View>

        

        {/* ----------------- Create/Register a new user ---------------- */}


        <Pressable style={globalStyles.button} onPress={handleRegister}>
          <Text style={{ textAlign: "center" }}>Skapa konto</Text>
        </Pressable>

        <View style={{ marginTop: 20, justifyContent: "center", alignItems: "center"}}>
          <Text>Har du redan ett konto? </Text>
          <Pressable
            onPress={() =>
              //@ts-ignore
              navigation.navigate("Login")
            }
          >
            <Text style={{color: "green", fontWeight:"bold", marginTop: 2}}>Logga in</Text>
          </Pressable>
        </View>
      {/* </View> */}
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default CreateAccount;
