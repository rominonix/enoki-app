import React, { useContext } from "react";
import { Text, View } from "react-native";
import globalStyles from "../styles/styles";

const Profile: React.FC = () => {

  return (
    <>
      {/* <Header home /> */}
      <View style={[globalStyles.container]}>
          <Text>PROFILE</Text>
      </View>
    </>
  );
};

export default Profile;