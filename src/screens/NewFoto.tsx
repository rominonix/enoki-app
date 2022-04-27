import React, { useContext, useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Button,
  Image,
  Platform,
} from "react-native";
import globalStyles from "../styles/styles";
import * as ImagePicker from "expo-image-picker";
import axios from 'axios';

interface imageData {
  name: string;
}

const NewFoto: React.FC = () => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    ImagePicker.requestMediaLibraryPermissionsAsync().then((response) => {
      console.log(response);
    });
    ImagePicker.requestCameraPermissionsAsync().then((response) => {
      console.log(response);
    });
  }, []);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      presentationStyle: 0,
      // mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      // aspect: [4, 3],
      // quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      //@ts-ignore
      setImage(result.uri);
    }
  };

  const takePhoto = async () => {
    const result = await ImagePicker.launchCameraAsync({
      presentationStyle: 0,
    });
    if (!result.cancelled) {
      //@ts-ignore
      setImage(result.uri);
    }
  };

  const uploadImg = async () => {
    const formData = new FormData();
    formData.append("image", {
      //@ts-ignore
      name: "randon.jpg",
      type: "image/*",
      //@ts-ignore
      uri: image.uri
       
    });

    console.log(formData);
    
    const response = await axios.post(
      "http://192.168.1.154:3000/api/image", 
      formData
    )
    console.log(response.status, response.data);
    
  };

  return (
    <>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        <Button title="Camera" onPress={takePhoto} />
        {image && (
          <Image source={{ uri: image }} style={{ width: 350, height: 350 }} />
        )}

        <Button title="Spara" onPress={uploadImg} />
      </View>
      {/* <View style={[globalStyles.container]}>
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
      </View> */}
    </>
  );
};

export default NewFoto;
