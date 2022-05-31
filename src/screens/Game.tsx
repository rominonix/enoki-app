import React, { useContext } from "react";
import { Pressable, Text, View } from "react-native";
import globalStyles from "../styles/styles";

const Game: React.FC = () => {

  return (
    <>
      <View style={[globalStyles.container]}>
          <Text style={globalStyles.generalTitle}>Spel</Text>
          <Pressable>
            <Text>🍄 🍄 🍄 🍄 🍄 🍄 </Text>
          </Pressable>
      </View>
    </>
  );
};

export default Game;