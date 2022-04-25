import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from '../screens/home/HomeScreen';
import Album from '../screens/Album';
import NewFoto from '../screens/NewFoto';
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator 
    screenOptions={{headerShown:false}}
    initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} />
    {/* <Stack.Screen name="Album" component={Album} />
    <Stack.Screen name="New foto" component={NewFoto} /> */}

  </Stack.Navigator>
  )
}

export default HomeStack