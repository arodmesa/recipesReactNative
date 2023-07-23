import React from "react";
import SearchBar from "../searchBar/SearchBar";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home: React.FC = () => {
  return (
    <SafeAreaView>
      <View className="relative justify-center w-full flex items-center">
        <SearchBar className="fixed top-0" />
      </View>
    </SafeAreaView>
  );
};

export default Home;
