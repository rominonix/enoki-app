import React from 'react' 
import { Text, View, Image, ImageSourcePropType } from 'react-native'
import styles from "../styles"
import { TouchableOpacity } from 'react-native-gesture-handler';

interface MenuItemProps {
    text: string, 
    iconSource: ImageSourcePropType,
    iconStyle: object, 
    onPress: () => void,
}

const MenuItem = (props: MenuItemProps) => {
  return (
        <TouchableOpacity
        style={styles.menuRow}
        onPress={() => props.onPress()}
      >
        <View style={styles.iconWrapper}>
        <Image style={[styles.menuIcon, props.iconStyle]} source={props.iconSource} />
        </View>
    
        <Text style={styles.menuText}>{props.text}</Text>
        </TouchableOpacity>
  )
}

export default MenuItem