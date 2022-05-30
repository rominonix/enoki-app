// import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/homeScreen/HomeScreen"
import Album from "../screens/Album";
import NewFoto from "../screens/NewFoto";
import Game from "../screens/Game";
import Profile from "../screens/profile/Profile";
import {
  HomeIcon,
  AlbumIcon,
  QuizIcon,
  CameraIcon,
  ProfileIcon,
} from "../components/Icons";

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
//   const extraTabBarPadding =
//     Platform.OS === "ios" && Dimensions.get("screen").height > 800;

  return (
    <Tab.Navigator
      initialRouteName="Lär mig"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "#F1FFE0",
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: true,    
        tabBarIconStyle: {
          padding: 5,
        },
        tabBarStyle: {
          backgroundColor: "#B3E96F",
          paddingBottom: 10,
          paddingTop: 18,
          height: 55,
          overflow: "hidden",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        },

       
        tabBarIcon: ({ size, color }) => {
          if (route.name === "Lär mig") {
            return <HomeIcon size={23} color={color} />;
          }
          if (route.name === "Samling") {
            return <AlbumIcon size={28} color={color} />;
          }
          if (route.name === "Ny kort") {
            return <CameraIcon size={26} color={color} />;
          }

          if (route.name === "Spel") {
            return <QuizIcon size={23} color={color} />;
          }

          if (route.name === "Profil") {
            return <ProfileIcon size={24} color={color} />;
          }
          return null;
        },
      })}
    >
      <Tab.Screen name="Lär mig" component={Home} />
      <Tab.Screen name="Samling" component={Album} />
      <Tab.Screen name="Ny kort" component={NewFoto} />
      <Tab.Screen name="Spel" component={Game} />
      <Tab.Screen name="Profil" component={Profile} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
