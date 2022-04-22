import React, { useContext } from "react";
import { Text, View } from "react-native";
import globalStyles from "../styles/styles";

const NewFoto: React.FC = () => {

  return (
    <>
      {/* <Header home /> */}
      <View style={[globalStyles.container]}>
          <Text>NEW FOTO</Text>
      </View>
    </>
  );
};

export default NewFoto;