import React from "react";
import { View, ImageBackground } from "react-native";
import splash from "../../assets/images/splash-screen.png";
import { StatusBar } from "expo-status-bar";

export default SplashScreen = () => {
  return (
    <View className="flex-1">
      <ImageBackground
        source={splash}
        resizeMode="cover"
        className="flex-1 justify-center items-center"
      ></ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
};
