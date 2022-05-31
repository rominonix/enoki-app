import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { HeartIcon, FilledHeartIcon } from "./Icons";
// import { color } from "../styles/baseStyles"
// import { ContentContext } from '../contexts/content/ContentContext'

type FavoriteButtonProps = {
  isFavorite: boolean;
  mushroomId: string
};

const FavoriteButton = (props: FavoriteButtonProps) => {


  const handleFavoriteButton = () => {
      
    // toggleFavorite(props.mushroomId);
  };

  return (
    // <Pressable style={styles.heartWrapper} onPress={handleFavoriteButton}>
    //   {props.isFavorite ? (
    //     <FilledHeartIcon color={"red"} size={24} />
    //   ) : (
    //     <HeartIcon color={"white"} size={24} />
    //   )}
    // </Pressable>

<Pressable style={styles.heartWrapper} onPress={handleFavoriteButton}>
{props.isFavorite ? (
  <FilledHeartIcon color={"red"} size={24} />
) : (
  <HeartIcon color={"white"} size={24} />
)} 
</Pressable>
  );
};

export default FavoriteButton;

const styles = StyleSheet.create({
  heartWrapper: {
    position: "absolute",
    right: 10,
    top: 10,
    zIndex: 30,
  },
});
