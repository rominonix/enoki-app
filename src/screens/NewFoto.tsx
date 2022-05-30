import React, { useContext, useState, useEffect } from "react";
import { ScrollView, View, Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { UserContext } from "../contexts/UserContext";
import { TextInput } from "react-native-gesture-handler";
import globalStyles from "../styles/styles";

const NewFoto: React.FC = () => {
  const { titleAndDescription } = useContext(UserContext)!;
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
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
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      presentationStyle: 0,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
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

  const saveImageInfo = async () => {
    const formData = new FormData();
    formData.append("image", {
      //@ts-ignore
      name: "random.jpg",
      type: "image/*",
      uri: image,
    });

    formData.append("title", title)
    formData.append("description", description)
    titleAndDescription(title, description, formData); 
  };

  return (
    <>
      <ScrollView>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Button title="Pick an image from camera roll" onPress={pickImage} />
          <Button title="Camera" onPress={takePhoto} />
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 350, height: 350 }}
            />
          )}

          <TextInput
            style={globalStyles.input}
            value={title}
            onChangeText={(text) => setTitle(text)}
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
      </ScrollView>
    </>
  );
};

export default NewFoto;
