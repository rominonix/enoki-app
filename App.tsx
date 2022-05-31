import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import LoginStack from "./src/navigators/loginStack";
import AuthNavigator from "./src/navigators/AuthNavigator";
import { LogBox } from "react-native";
import UserContextProvider from "./src/contexts/UserContext";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import Login from "./src/screens/login/Login";
LogBox.ignoreLogs([
  "Seems like you're using an old API with gesture components, check out new Gestures system!","Possible Unhandled Promise Rejection (id: 1)"
]);
export default function App() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <NavigationContainer>
      <UserContextProvider>
        <AuthNavigator />
        <StatusBar style="auto" />
      </UserContextProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

// const styles = StyleSheet.create({
//   app: {
//     flex: 1,
//     backgroundColor: "#e9ffb8",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
