import React from "react";
import { View, ImageBackground, Image } from "react-native";
import splash from "../../assets/images/Splash screen.png";
import logo from "../../assets/images/Vector.png";
import { StatusBar } from "expo-status-bar";

export default SplashScreen = () => {
  return (
    <View className="flex-1">
      <StatusBar style="auto" />
      <ImageBackground
        source={splash}
        resizeMode="cover"
        resizeMethod="auto"
        className="flex-1 justify-center items-center"
      />
      <Image source={logo} />
    </View>
  );
};
