import React, { useContext } from "react";
import { Text, View } from "react-native";
import globalStyles from "../styles/styles";

const Album: React.FC = () => {

  return (
    <>
      <View style={[globalStyles.container]}>
          <Text>FOTO SAMLING</Text>
      </View>
    </>
  );
};

export default Album;