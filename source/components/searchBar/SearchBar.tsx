import React from "react";
import { View, TextInput, Dimensions } from "react-native";
import { twMerge } from "tailwind-merge";
import { GlassIcon } from "../../../assets/icons";
import { atom } from "jotai";
import { MotiView } from "moti";

export const isSearchBarOpen = atom(false);
const SearchBar: React.FC<{ className?: string }> = ({ className }) => {
  const windowWidth = Dimensions.get("window").width;
  return (
    <MotiView
      from={{
        width: 0,
        opacity: 0,
      }}
      animate={{ width: windowWidth * 0.9, opacity: 1 }}
      transition={{
        type: "timing",
        duration: 500,
      }}
      className={twMerge(
        "flex flex-row items-center rounded-lg bg-white border gap-x-2 px-2 py-1",
        className
      )}
    >
      <View className="scale-x-[-1]">
        <GlassIcon color={"red"} width={16} height={16} className="" />
      </View>

      <TextInput
        className="flex-1 text-center"
        placeholder="Search for recipes"
      />
      <View className="w-4 aspect-square" />
    </MotiView>
  );
};
export default SearchBar;
