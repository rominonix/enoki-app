import { Dimensions, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "../navigators/HomeStack";
// import Favorites from "../screens/main/Favorites";
// import { color } from "../styles/baseStyles";
// import {
//   HomeIcon,
//   SettingsIcon,
//   QuizIcon,
//   DiscoverIcon,
//   HeartIcon,
// } from "../components/icons";
// import SettingsStack from "./SettingsStack";

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  const extraTabBarPadding =
    Platform.OS === "ios" && Dimensions.get("screen").height > 800;

  return (
    <Tab.Navigator
      initialRouteName="Hem"
      screenOptions={({ route }) => ({
        headerShown: false,
        // tabBarActiveTintColor: color.white,
        tabBarInactiveTintColor: '#c5c5c5',
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: true,
        tabBarIconStyle: {
          padding: 0,
        },
        tabBarStyle: {
        //   backgroundColor: color.pink,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          paddingBottom: extraTabBarPadding ? 22 : 10,
          height: extraTabBarPadding ? 75 : 65,
          overflow: "hidden",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        },
        // tabBarIcon: ({ size, color }) => {
        //   if (route.name === "Hem") {
        //     // return <HomeIcon size={20} color={color} />;
        //   }
        //   if (route.name === "Inställningar") {
        //     // return <SettingsIcon size={20} color={color} />;
        //   }
        //   if (route.name === "Favoriter") {
        //     // return <HeartIcon size={20} color={color} />;
        //   }
        //   return null;
        // },
      })}
    >
      <Tab.Screen name="Hem" component={HomeStack} />
{/* 
      <Tab.Screen name="Favoriter" component={Favorites} />
      <Tab.Screen name="Inställningar" component={SettingsStack} /> */}
    </Tab.Navigator>
  );
};

export default MainTabNavigator;