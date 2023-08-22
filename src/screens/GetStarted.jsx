import React from "react";
import { Text, View, ImageBackground, TouchableOpacity } from "react-native";
import started from "../../assets/images/started.png";
import { StatusBar } from "expo-status-bar";
import { Button } from "../components";

export default GetStarted = ({ navigation }) => {
  const navigateToWelcome = () => {
    navigation.navigate("Welcome");
  };
  return (
    <View className="flex-1">
      <ImageBackground
        source={started}
        resizeMode="cover"
        resizeMethod="auto"
        className="flex-1 justify-center items-center h-screen mix-blend-color-burn "
      ></ImageBackground>
      <StatusBar style="auto" />
      <View className="w-full px-4 mb-4">
        <Button
          name="GET STARTED"
          onPress={() => navigation.navigate("Welcome")}
        />
        <View className="my-3 flex flex-row items-center justify-center gap-1 py-2">
          <Text
            style={{ fontFamily: "Cabin-Bold" }}
            className="text-white text-center text-lg "
          >
            Already have an account?
          </Text>
          <Text
            style={{ fontFamily: "Cabin-Bold" }}
            className="underline text-orange text-lg"
          >
            Sign in here
          </Text>
        </View>
      </View>
    </View>
  );
};
