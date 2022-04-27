import React, { useContext } from "react";
import {
  Pressable,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "../../styles/styles";
//@ts-ignore
import Photo from "../../../assets/adaptive-icon.png";

const HomeScreen: React.FC = () => {
  return (
    <>
      {/* <SafeAreaView> */}
      {/* <ScrollView > */}
      <View style={[globalStyles.container]}>
        <View style={globalStyles.imgContainerHome}>
          <Image style={globalStyles.imgHome} source={Photo} />
        </View>
        <View>
          <Text>Latinska Namn</Text>
          <Text>Svamp Namn</Text>
          <Text>Beskrivning</Text>
        </View>

        {/* <TouchableOpacity style={globalStyles.button}>
            <Text style={{textAlign: "center"}}>Next</Text>
          </TouchableOpacity> */}
      </View>
      {/* </ScrollView> */}
      {/* </SafeAreaView> */}
    </>
  );
};

export default HomeScreen;
