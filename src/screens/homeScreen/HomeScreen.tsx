
import React, { useContext } from "react";
import { Pressable, Text, View, TouchableOpacity } from 'react-native';
import globalStyles from "../../styles/styles";

const HomeScreen: React.FC = () => {

  return (
    <>
      <View style={[globalStyles.container]}>
          <Text>HOMIS</Text>

          <Pressable>
            <Text>akakakka</Text>
          </Pressable>
          <TouchableOpacity>
            <Text>blablablablalaba</Text>
          </TouchableOpacity>
      </View>
    </>
  );
};

export default HomeScreen 