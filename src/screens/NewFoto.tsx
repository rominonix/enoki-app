import React, { useContext, useState, useEffect } from "react";
import { ScrollView, View, Button, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
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

    formData.append("title", title);
    formData.append("description", description);
    titleAndDescription(title, description, formData);
  };

  return (
    <>
      <ScrollView>
        <View
          style={globalStyles.container}
          // style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text>Välj ett alternative</Text>
          <View style={globalStyles.buttonContainer}>
            <TouchableOpacity
              onPress={pickImage}
              style={globalStyles.buttonNewFoto}
            >
              <Text>Välj en bild</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={takePhoto}
              style={globalStyles.buttonNewFoto}
            >
              <Text>Ta ett ny bild</Text>
            </TouchableOpacity>
          </View>
          {/* <Button title="Välj en bild från ditt galleri" onPress={pickImage} /> */}
          {/* <Button title="Ta ett ny bild" onPress={takePhoto} /> */}

          <View style={{ width: 350, height: "auto", marginVertical: 20 }}>
            {/* <Text>din bild kommer sinas här</Text> */}

            {image && (
              <Image
                source={{ uri: image }}
                style={{ width: 350, height: 400 }}
              />
            )}
          </View>
          <Text>Namn på svampen</Text>
          <TextInput
            style={globalStyles.input}
            value={title}
            onChangeText={(text) => setTitle(text)}
            autoCapitalize="none"
          />
          <Text>Anteckning</Text>
          <TextInput
            multiline={true}
            style={globalStyles.textArea}
            value={description}
            onChangeText={(text) => setDescription(text)}
            autoCapitalize="none"
          />

          <TouchableOpacity
            onPress={saveImageInfo}
            style={globalStyles.buttonNewFoto}
          >
            <Text>Spara</Text>
          </TouchableOpacity>
          {/* <Button title="Spara" onPress={saveImageInfo} /> */}
        </View>
      </ScrollView>
    </>
  );
};

export default NewFoto;
