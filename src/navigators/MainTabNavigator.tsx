import { Dimensions, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "../navigators/HomeStack";
import Album from "../screens/Album";
import NewFoto from "../screens/NewFoto";
import Game from "../screens/Game";
import Profile from "../screens/Profile";
import {
  HomeIcon,
  AlbumIcon,
  QuizIcon,
  CameraIcon,
  ProfileIcon
} from "../components/Icons";

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  const extraTabBarPadding =
    Platform.OS === "ios" && Dimensions.get("screen").height > 800;

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#F1FFE0",
        tabBarInactiveTintColor: "black",
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: true,
        tabBarIconStyle: {
          padding: 0,
        },
        tabBarStyle: {
          backgroundColor: "#B3E96F",
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
        tabBarIcon: ({ size, color }) => {
          if (route.name === "Home") {
            return <HomeIcon size={25} color={color} />;
          }
          if (route.name === "Album") {
            return <AlbumIcon size={28} color={color} />;
          }
          if (route.name === "New foto") {
            return <CameraIcon size={27} color={color} />;
          }

          if (route.name === "Game") {
            return <QuizIcon size={24} color={color} />;
          }

          if (route.name === "Profile") {
            return <ProfileIcon size={24} color={color} />;
          }
          return null;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Album" component={Album} />
      <Tab.Screen name="New foto" component={NewFoto} />
      <Tab.Screen name="Game" component={Game} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;