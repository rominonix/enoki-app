import React, { useContext, useEffect } from "react";
import { Text, View, Pressable } from "react-native";
import globalStyles from "../styles/styles";
import { UserContext } from "../contexts/UserContext";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile: React.FC = () => {
  const { logout, getStorageData } = useContext(UserContext)!;
  const navigation = useNavigation()

  // console.log("profile", getStorageData());
  
  // useEffect(() => {
  //   getStorageData();
  //   console.log(getStorageData);

  // }, []);

  const handleLogout = () => {
    logout()
  //@ts-ignore
    // navigation.navigate("Login");
  };

  return (
    <>
      <View style={[globalStyles.container]}>
        <Text>PROFILE</Text>
        <Pressable onPress={handleLogout}>
          <Text>Log out</Text>
        </Pressable>
      </View>
    </>
  );
};

export default Profile;
