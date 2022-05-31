import React, { useContext, useEffect, useState } from "react";
import { Text, View, Image, ListRenderItem, Pressable } from "react-native";
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { UserContext } from "../contexts/UserContext";
import SingleImage from "../components/SingleImage";
import globalStyles from "../styles/styles";
//@ts-ignore
import Photo from "../../assets/mushroom-collage.jpeg";
import { Mushroom } from "../contexts/types";

const Album = () => {
  const { getAlbums, mushrooms } = useContext(UserContext)!;
  const [singleImageId, setSingelImageId] = useState("");
  const [showImage, setShowImage] = useState(false);
  const [singleMushroom, setSingleMushroom] = useState(null);
  const [description, setDescription] = useState("");

  useEffect(() => {
    mushrooms;
    getAlbums();
  }, []);

  const getSingleImage = async () => {
    const singleImg = mushrooms?.filter(
      (mushroom) => mushroom._fieldsProto.id.stringValue === singleImageId
    );
    console.log(typeof singleImg);
    //@ts-ignore
    setSingleMushroom(singleImg);
    console.log("Holi", singleMushroom);
  };

  return (
    <>
      <ScrollView>
        <View style={[globalStyles.container]}>
          <Text style={globalStyles.generalTitle}> Mina svampar 🍄 </Text>
          
          <View
            style={{
              backgroundColor: "transparent",
              flex: 1,
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-evenly",
              marginTop: 30,
            }}
          >
            {mushrooms?.map((mushroom) => {
              return (
                <TouchableOpacity
                  style={globalStyles.samlingContainer}
                  key={mushroom._fieldsProto.id.stringValue}
                  onPress={() => {
                    setSingelImageId(mushroom._fieldsProto.id.stringValue);
                    // getSingleImage();
                    setDescription(
                      mushroom._fieldsProto.description.stringValue
                    );
                    setShowImage(true);
                  }}
                >
                  {/* <Image
                  source={{
                    uri: mushroom._fieldsProto.images.arrayValue.values[0]
                      .urlValue,
                  }}
                  style={globalStyles.imgContainerAlbum}
                /> */}
                  <Image
                    source={Photo}
                    style={globalStyles.imgContainerAlbum}
                  />

                  <Text style={globalStyles.imageTitle}>
                    {mushroom._fieldsProto.title.stringValue}
                  </Text>
                  <View style={globalStyles.singleImage}></View>
                </TouchableOpacity>

                // <View
                //   style={globalStyles.samlingContainer}
                //   key={mushroom._fieldsProto.id.stringValue}
                // >
                //   {/* <Image
                //     source={{
                //       uri: mushroom._fieldsProto.images.arrayValue.values[0]
                //         .urlValue,
                //     }}
                //     style={globalStyles.imgContainerAlbum}
                //   /> */}
                //   <Image
                //     source={Photo}
                //     style={globalStyles.imgContainerAlbum}
                //   />

                //   <Text style={globalStyles.imageTitle}>
                //     {mushroom._fieldsProto.title.stringValue}
                //   </Text>
                //   <View style={globalStyles.singleImage}></View>
                // </View>
              );
            })}
          </View>
          {showImage && (
            <View style={{zIndex: 2, backgroundColor: "red", height: 500, width: 350, position: "absolute", top:0, bottom: 0}}>
              <Text>{description}</Text>
            </View>
          )}
          
        </View>
      </ScrollView>
    </>
  );
};

export default Album;
