import React, { useContext } from "react";
import { Pressable, Text, View } from "react-native";
import globalStyles from "../styles/styles";

const Game: React.FC = () => {

  return (
    <>
      <View style={[globalStyles.container]}>
          <Text>GAME</Text>
          <Pressable>
            <Text>bla bla bla</Text>
          </Pressable>
      </View>
    </>
  );
};

export default Game;