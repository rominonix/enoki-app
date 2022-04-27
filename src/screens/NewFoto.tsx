import React, { useContext, useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Button,
  Image,
  Platform,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";
import { TextInput } from "react-native-gesture-handler";
import globalStyles from "../styles/styles";


const NewFoto: React.FC = () => {
  const { newImage } = useContext(UserContext)!;
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    ImagePicker.requestMediaLibraryPermissionsAsync().then((response) => {
      console.log(response);
    });
    ImagePicker.requestCameraPermissionsAsync().then((response) => {
      console.log(response);
    });
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      presentationStyle: 0,
      // mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      // aspect: [4, 3],
      // quality: 1,
    });
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
      uri: image.uri,
    });

    // console.log(formData);

    const response = await axios.post(
      "http://192.168.1.154:3000/api/image",
      formData
    );
    // console.log(response.status, response.data);
  };

  const saveImageInfo = async () => {
    //@ts-ignore
    newImage(name, description);
  };

  return (
    <>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        <Button title="Camera" onPress={takePhoto} />
        {image && (
          <Image source={{ uri: image }} style={{ width: 350, height: 350 }} />
        )}

        <TextInput
          style={globalStyles.input}
          value={name}
          onChangeText={(text) => setName(text)}
          autoCapitalize="none"
        />

        <TextInput
         style={globalStyles.input}
         value={description}
         onChangeText={(text) => setDescription(text)}
         autoCapitalize="none"
         />

        <Button title="Spara" onPress={saveImageInfo} />
      </View>
    </>
  );
};

export default NewFoto;
