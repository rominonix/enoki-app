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
      <View>
        <Text>Ange ditt E-postadress</Text>
        <TextInput
          style={globalStyles.input}
          value={email}
          placeholderTextColor="#706F70"
          onChangeText={(text) => setEmail(text)}
          autoCapitalize="none"
          placeholder="E-postadress"
        />
      </View>

      <Pressable
      style={{backgroundColor: "green"}}
         onPress={() => {
            controllEmail(), sendEmail();
          }}
        >
          <Text> Send mail </Text>
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
          <Text> to Login </Text>
        </Pressable>
      </View>
    </View>
 
  );
};

export default ResetPassword;