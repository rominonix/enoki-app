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
      <View>
 
        <View>
          <Text>Skappa ett nytt konto</Text>
        </View>

        {/* ----------------- Name Input ---------------- */}

        <View>
          <View>
            <TextInput
              style={globalStyles.input}
              value={name}
              placeholder="Namn"
              placeholderTextColor="#706F70"
              onChangeText={(text) => {
                setName(text);
              }}
              autoCapitalize="none"
            />
          </View>
        </View>

        {/* ----------------- Email Input ---------------- */}

        <View>
          <View>
            <TextInput
              style={globalStyles.input}
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
          <View>
            <TextInput
              style={globalStyles.input}
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

        {/* ----------------- Checkbox ---------------- */}

        {/* <View style={styles.checkBoxContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setIsSelected}
              style={styles.checkbox}
              color={isSelected ? "#D7097A" : undefined}
            />
            <Text style={styles.conditions}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero
            </Text>
          </View> */}

        {/* ----------------- Conditions ---------------- */}

        {/* <View style={styles.textContainer}>
            <Text style={styles.boldText}>
              Genom att klicka på registrerade såsom tycker du till 24gossip
            </Text>
            <Pressable
              onPress={() => navigation.navigate("Om 24 Gossip" as never)}
            >
              <Text style={styles.link}> användarvillkor </Text>
            </Pressable>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.boldText}>
              Om du vill veta mer om hur vi använder data
            </Text>
            <Pressable
              onPress={() => navigation.navigate("Om 24 Gossip" as never)}
            >
              <Text style={styles.link}>tryck här</Text>
            </Pressable>
          </View> */}

        {/* ----------------- Create/Register a new user ---------------- */}


        <Pressable style={globalStyles.button} onPress={handleRegister}>
          <Text style={{ textAlign: "center" }}>Skapa konto</Text>
        </Pressable>

        <View>
          <Text>Har du redan ett konto? </Text>
          <Pressable
            onPress={() =>
              //@ts-ignore
              navigation.navigate("Login")
            }
          >
            <Text>Logga in</Text>
          </Pressable>
        </View>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default CreateAccount;
