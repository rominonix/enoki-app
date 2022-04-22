
import React, { useContext } from "react";
import { Text, View } from "react-native";
import globalStyles from "../../styles/styles";

const Home: React.FC = () => {

  return (
    <>
      {/* <Header home /> */}
      <View style={[globalStyles.container]}>
          <Text>HOMIS</Text>
      </View>
    </>
  );
};

export default Home;