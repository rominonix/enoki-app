import React, { useContext, useEffect } from "react";
import { Text, View, Pressable } from "react-native";
import globalStyles from "../../styles/styles";
import { UserContext } from "../../contexts/UserContext";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Password } from "../../components/Icons";
import globalStyle from "../../styles/styles";
import MenuItem from "./components/MenuItem";
import styles from "./styles"
const Profile: React.FC = () => {
  const { logout } = useContext(UserContext)!;
  // const navigation = useNavigation()

  // console.log("profile", getStorageData());

  // useEffect(() => {
  //   getStorageData();
  //   console.log(getStorageData);

  // }, []);

  const handleLogout = async () => {
    // await AsyncStorage.removeItem("token")
    logout();
    //@ts-ignore
    navigation.navigate("Login");
  };

  return (
    <>
      <View style={[globalStyles.container]}>
        <Text>PROFILE</Text>
        <MenuItem
          text="Ändra lösenord"
          iconSource={0}
          iconStyle={styles.passwordIcon}
          onPress={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
         <MenuItem
          text="Hjälp"
          iconSource={0}
          iconStyle={styles.passwordIcon}
          onPress={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      
        <TouchableOpacity onPress={handleLogout} style={globalStyle.button}>
          <Text style={{ textAlign: "center" }}>Logout</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Profile;
