import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from '../screens/home/Home';


import { createStackNavigator } from "@react-navigation/stack";;

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator 
    screenOptions={{headerShown:false}}
    initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
  )
}

export default HomeStack