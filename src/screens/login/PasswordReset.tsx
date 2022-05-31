import { Text, TextInput, View, Pressable, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import globalStyles from "../../styles/styles";

const ResetPassword: React.FC = () => {
  const { passwordReset } = useContext(UserContext)!;
  const navigation = useNavigation();
  const [email, setEmail] = useState("");

  const controllEmail = () => {
    passwordReset(email);
  };

  const sendEmail = () => {
    Alert.alert("e-post skickat", "Kolla din inkorg", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          //@ts-ignore
          navigation.navigate("Login"), console.log("OK Pressed");
        },
      },
    ]);
  };
  return (
    //   <SafeAreaView>
    <View style={globalStyles.container}>
      {/* <View style={styles.logoView}>
        <Logo width={150} height={75} />
      </View> */}

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
        <Text style={globalStyles.label}>Ange ditt e-postadress</Text>
        <TextInput
          style={globalStyles.inputLogin}
          value={email}
          placeholderTextColor="#706F70"
          onChangeText={(text) => setEmail(text)}
          autoCapitalize="none"
          placeholder="E-postadress"
        />
      </View>

      <Pressable
      style={globalStyles.buttonNewFoto}
         onPress={() => {
            controllEmail(), sendEmail();
          }}
        >
          <Text style={globalStyles.textButton}> skicka e-post </Text>
        </Pressable>
      {/* <Button
        text="skicka email"
        onPress={() => {
          controllEmail(), sendEmail();
        }}
        style={undefined}
      /> */}
      <View >
        <Pressable
          onPress={() => {
            //@ts-ignore
            navigation.navigate("Login");
          }}
        >
          <Text style={{color: "#343434", fontWeight: "600", fontSize: 12, textTransform: "uppercase"}}> Till logga in </Text>
        </Pressable>
      </View>
    </View>
 
  );
};

export default ResetPassword;