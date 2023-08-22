import React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

export default Prompts = ({ title }) => {
  return (
    <View className="my-2">
      <Text style={{ fontFamily: "Cabin-Bold" }} className="text-2xl">
        {title}
      </Text>
    </View>
  );
};
