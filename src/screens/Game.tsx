import React, { useContext } from "react";
import { Pressable, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import globalStyles from "../styles/styles";

const Game: React.FC = () => {
  return (
    <>
      <View style={[globalStyles.container]}>
        <Text style={globalStyles.generalTitle}>Spel</Text>
        <View style={{ width: 140, height: 140, borderColor: "#828C61", borderWidth: 0.5, borderRadius: 70, justifyContent: "center", alignItems: "center", marginBottom: 20, backgroundColor: "white"}}>
        <Text style={{ fontSize: 70}}>🍄</Text>

        </View>

        <Text style={globalStyles.homeSubtitle}>Amanita muscaria</Text>

        <TouchableOpacity
              
              style={globalStyles.buttonGame}
            >
              <Text style={[globalStyles.textButtonLogin, {textAlign: "center"}]}>magisk 🌟</Text>
            </TouchableOpacity>

            <TouchableOpacity
              
              style={globalStyles.buttonGame}
            >
              <Text style={[globalStyles.textButtonLogin, {textAlign: "center"}]}>ätlig 🍴</Text>
            </TouchableOpacity>

            <TouchableOpacity
              
              style={globalStyles.buttonGame}
            >
              <Text style={[globalStyles.textButtonLogin, {textAlign: "center"}]}>giftig ☠️ </Text>
            </TouchableOpacity>
      </View>
    </>
  );
};

export default Game;
