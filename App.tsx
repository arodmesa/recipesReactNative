import { StyleSheet, Text, View } from "react-native";
import "react-native-reanimated";
import "react-native-gesture-handler";
import Home from "./source/components/routes/Home";
import { Provider } from "jotai";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <Provider>
      <SafeAreaProvider>
        <Home />
      </SafeAreaProvider>
    </Provider>
  );
}
