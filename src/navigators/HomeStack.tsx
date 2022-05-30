import React from 'react'
import Home from '../screens/homeScreen/HomeScreen';
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator 
    screenOptions={{headerShown:false}}
    initialRouteName="Home">
    <Stack.Screen name="Lära dig" component={Home} />
  </Stack.Navigator>
  )
}

export default HomeStack