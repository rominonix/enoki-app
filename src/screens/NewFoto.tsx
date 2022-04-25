import React, { useContext } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import globalStyles from "../styles/styles";

const NewFoto: React.FC = () => {
  return (
    <>
      <View style={[globalStyles.container]}>
        <Text>NEW FOTO</Text>
        <TouchableOpacity>
          <Text>Ta ett foto</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>Hämta bilder från galleri</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>Cancel</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default NewFoto;
