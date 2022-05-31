import React, { useContext, useEffect, useState, useRef } from "react";
import { Text, View, TouchableOpacity, ScrollView, Image } from "react-native";
import { UserContext } from "../../contexts/UserContext";
import globalStyles from "../../styles/styles";
//@ts-ignore
import Photo from "../../../assets/mushroom-collage.jpeg";
import FavoriteButton from "../../components/FavoriteButton";

const HomeScreen: React.FC = () => {
  const { getRandomMushroom, randomMushroom } = useContext(UserContext)!;
  const scrollRef: React.MutableRefObject<any> = useRef();

  // useEffect(() => {
  //   getRandomMushroom();  
  // }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  }, [randomMushroom]);

 const newMushroom = () => {
  getRandomMushroom();
 }

  return (
    <>
      <ScrollView ref={scrollRef}>
        <View>
          <View style={[globalStyles.container]}>
            <Text style={globalStyles.generalTitle}>Dagensvamp 🍄</Text>
            <Text style={globalStyles.homeSubtitle}>
              {randomMushroom?._fieldsProto.swedishName.stringValue}
            </Text>
            <View>
              {/* <Image
              style={globalStyles.imgHome}
              source={{ uri: randomMushroom?.firebaseUrl }}
            /> */}
            <FavoriteButton isFavorite={false} mushroomId={""}/>
              <Image style={globalStyles.imgHome} source={Photo} />
              <Text style={globalStyles.imageAuthor}>
                {randomMushroom?._fieldsProto.imageAuthor.stringValue}
              </Text>
            </View>
            <View style={globalStyles.ingress}>
              <Text style={globalStyles.name}>
                {randomMushroom?._fieldsProto.swedishName.stringValue} 🍄
              </Text>
              <Text style={[globalStyles.ingressSoloText]}>
                {" "}
                Latinska namn:{" "}
                {randomMushroom?._fieldsProto.scientificName.stringValue}
              </Text>
              <Text style={[globalStyles.ingressSoloText, { lineHeight: 24 }]}>
                {" "}
                Biotoper: {randomMushroom?._fieldsProto.biotope.stringValue}
              </Text>
              <Text style={globalStyles.ingressSoloText}>
                {" "}
                Ekologiska grupper:{" "}
                {randomMushroom?._fieldsProto.ecologicalGroup.stringValue}
              </Text>
            </View>
            <Text style={globalStyles.homeDescription}> 
              {randomMushroom?._fieldsProto.description.stringValue}
            </Text>

            <TouchableOpacity style={globalStyles.buttonLogin} onPress={newMushroom}>
            <Text style={globalStyles.textButtonLogin}> En svamp till </Text>
          </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default HomeScreen;
