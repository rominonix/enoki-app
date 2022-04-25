
import React, { useContext } from "react";
import { Text, View } from "react-native";
import globalStyles from "../../styles/styles";

const HomeScreen: React.FC = () => {

  return (
    <>
      <View style={[globalStyles.container]}>
          <Text>HOMIS</Text>
      </View>
    </>
  );
};

export default HomeScreen 