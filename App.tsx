import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import UserContextProvider from "./src/contexts/UserContext";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import Login from "./src/screens/login/Login";

export default function App() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <UserContextProvider>
        <Login />
        <StatusBar style="auto" />
      </UserContextProvider>
    </SafeAreaProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#e9ffb8",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
