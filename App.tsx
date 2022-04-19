import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import UserContextProvider from "./src/contexts/UserContext";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <UserContextProvider>
        <View style={styles.container}>
          <Text>ENOKI 🍄 </Text>
          <StatusBar style="auto" />
        </View>
      </UserContextProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e9ffb8",
    alignItems: "center",
    justifyContent: "center",
  },
});
