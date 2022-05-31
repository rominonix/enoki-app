import React, { useContext, useEffect } from "react";
import { Text, View, Pressable } from "react-native";
import globalStyles from "../../styles/styles";
import { UserContext } from "../../contexts/UserContext";
import { TouchableOpacity } from "react-native-gesture-handler";
import globalStyle from "../../styles/styles";


const Profile: React.FC = () => {
  const { logout, user } = useContext(UserContext)!;

  console.log("profile", user);

  // useEffect(() => {
  //   getStorageData();
  //   console.log(getStorageData);

  // }, []);

  const handleLogout = async () => {
    logout();
  };

  return (
    <>
      <View style={[globalStyles.container]}>
        <Text style={globalStyle.generalTitle}> din profil 🤓 </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
            alignItems: "center",
            width: 180,
          }}
        >
          <Text style={globalStyle.homeSubtitle}> Hej {user?.name}! </Text>
          <View
            style={{
              backgroundColor: "white",
              width: 80,
              height: 80,
              borderRadius: 100,
              marginVertical: 20,
              justifyContent: "center",
              alignItems: "center",
              borderColor: "#828C61",
              borderWidth: 0.5,
            }}
          >
            <Text style={{ fontSize: 40 }}>🍄</Text>
          </View>

          {/* <HomeIcon size={50} color={"violet"}/> */}
        </View>
        <View style={{ marginBottom: 30 }}>
          <Text style={globalStyle.optionInProfile}>💪 Mina poäng</Text>
          <Text style={globalStyle.optionInProfile}>😍 Mina svampar</Text>
          <Text style={globalStyle.optionInProfile}>🤯 Ändra lösenord</Text>
          <Text style={globalStyle.optionInProfile}>😢 avsluta konto</Text>
          <Text style={globalStyle.optionInProfile}>🤔 Hjälp</Text>
        </View>

        <TouchableOpacity
          onPress={handleLogout}
          style={globalStyle.buttonLogin}
        >
          <Text style={globalStyle.textButtonLogin}>Logout</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Profile;
