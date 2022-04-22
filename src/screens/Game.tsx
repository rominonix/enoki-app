import React, { useContext } from "react";
import { Text, View } from "react-native";
import globalStyles from "../styles/styles";

const Game: React.FC = () => {

  return (
    <>
      {/* <Header home /> */}
      <View style={[globalStyles.container]}>
          <Text>GAME</Text>
      </View>
    </>
  );
};

export default Game;