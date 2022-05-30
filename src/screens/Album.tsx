import React, { useContext, useEffect, useState } from "react";
import { Text, View, Image, ListRenderItem, Pressable } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { Mushroom } from "../contexts/types";
import { UserContext } from "../contexts/UserContext";
import globalStyles from "../styles/styles";
//@ts-ignore
import Photo from "../../assets/mushroom-collage.jpeg";

const Album = () => {
  const { getAlbums, mushrooms } = useContext(UserContext)!;

  useEffect(() => {
    mushrooms;
    getAlbums();
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
          <Text style={globalStyles.generalTitle}>🍄 Mina svampar 🍄 </Text>
          <View>
            {mushrooms?.map((mushroom) => {
              return (
                <View
                  style={globalStyles.samlingContainer}
                  key={mushroom._fieldsProto.id.stringValue}
                >
                  {/* <Image
                    source={{
                      uri: mushroom._fieldsProto.images.arrayValue.values[0]
                        .urlValue,
                    }}
                    style={globalStyles.imgContainerAlbum}
                  /> */}
                  <View >
                    <Image
                      source={Photo}
                      style={globalStyles.imgContainerAlbum}
                    />
                    <View style={{ paddingVertical: 10, paddingHorizontal: 30, alignItems: "center" }}>
                      <Text style={{ fontSize: 18, textTransform: "capitalize"}}>{mushroom._fieldsProto.title.stringValue}</Text>
                      {/* <Text>
                        {mushroom._fieldsProto.description.stringValue}
                      </Text> */}
                    </View>
                  </View>
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
