import { View, Text, Image } from 'react-native';
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
    closeModal: any;
    id: string;
    title: string;
    description: string,
    image: string[],
  }

const SingleImage = ({
    id,
    closeModal,
    title,
    description,
    image
   
  }: Props) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{description}</Text>
      {/* <Image source={image}/> */}
      <TouchableOpacity
        // className="modal-close-button"
        onPress={() => {
          closeModal(false);
        }}
      >
        <Text>X</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SingleImage