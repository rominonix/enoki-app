import React, { useContext, useEffect, useState } from "react";
import { Text, View, Image, ListRenderItem, Pressable } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { Mushroom } from "../contexts/types";
import { UserContext } from "../contexts/UserContext";
import globalStyles from "../styles/styles";

// type MushroomsListProps = {
//   // paginated?: boolean
//   mushroom: Mushroom[]
// }

const Album = () => {
  const { getAlbums, mushrooms } = useContext(UserContext)!;
  // const [imageUrl, setImageUrl] = useState("");

  // const handleView = (mushroom: any) => {
  //   console.log("holi");
  //   //@ts-ignore
  //   // navigation.navigate("", {  });

  // }

  // const pictures = () => {
  //   mushrooms?.map((url) => {
  //     console.log(imageUrl);
      
  //     setImageUrl(url._fieldsProto.images.arrayValue.values.urlValue);
  //   });
  // };

  useEffect(() => {
    mushrooms;
    getAlbums();
    // pictures()
  }, []);

  // const renderList:ListRenderItem<Mushroom> = ({ item, index }) => {
  //   return (
  //     <Pressable
  //       onPress={() => {handleView(item)}}
  //       style={globalStyles.articleCard}
  //     >
  //       {/* <LinearGradient
  //         style={styles.gradient}
  //         colors={["transparent", "rgba(0,0,0,0.8)"]}
  //         locations={[0.6, 1]}
  //       /> */}
  //       <>
  //         <Image
  //           style={globalStyles.imgContainerAlbum}
  //           source={{}}
  //         />
  //         {/* <FavoriteButton isFavorite={isFavorite} articleId={item.sys.id} /> */}
  //         <Text>holi{}</Text>
  //       </>
  //     </Pressable>
  // )
  // }

  return (
    <>
      <ScrollView>
        <View style={[globalStyles.container]}>
          <Text>FOTO SAMLING</Text>
          <View
            style={{
              backgroundColor: "white",
              width: 350,
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            {mushrooms?.map((mushroom) => {
              return (
                <View key={mushroom._fieldsProto.id.stringValue}>
                  <Image
                    source={{uri: mushroom._fieldsProto.images.arrayValue.values[0].urlValue}}
                    style={globalStyles.imgContainerAlbum}
                  />
                  {/* <Image source={require(mushroom._fieldsProto.images.arrayValue.values[0].stringValue)} style={globalStyles.imgContainerAlbum}/> */}

                  <Text>{mushroom._fieldsProto.title.stringValue}</Text>

                  <Text>
                    {
                      mushroom._fieldsProto.images.arrayValue.values[0]
                        .stringValue
                    }
                  </Text>
                  <Text>{mushroom._fieldsProto.description.stringValue}</Text>
                  {/* <Text>{mushroom._fieldsProto.userId.stringValue}</Text> */}
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Album;
