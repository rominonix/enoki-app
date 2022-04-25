import React, { useContext, useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Button, Image } from "react-native";
import globalStyles from "../styles/styles";
import * as ImagePicker from "expo-image-picker";

const NewFoto: React.FC = () => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    ImagePicker.requestMediaLibraryPermissionsAsync().then((response) => {
      console.log(response);
    });
    ImagePicker.requestCameraPermissionsAsync().then((response) => {
      console.log(response);
    })
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
      const result = await ImagePicker.launchCameraAsync({presentationStyle: 0})
      // const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
      // if (permissionResult.granted === false) {
      //    alert("You've refused to allow this appp to access your camera!");
      //    return;
      // }

      // const result = await ImagePicker.launchCameraAsync();
      // if (!result.cancelled) {
      //   //@ts-ignore
      //    setImage(result)
      // }

      if (!result.cancelled) {
        //@ts-ignore
        setImage(result.uri);
      }
   }

  return (
    <>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button
          title="Pick an image from camera roll"
          onPress={pickImage}
        />
        <Button
          title="Camera"
           onPress={takePhoto}
        />
        {image && (
          <Image 
          source={{ uri: image }} 
          style={{ width: 350, height: 350 }} />
        )}
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
