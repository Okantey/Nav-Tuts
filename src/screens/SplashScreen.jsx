import React, { useEffect } from "react";
import { View, ImageBackground, Image, Text } from "react-native";
import splash from "../../assets/images/splash.png";
import vector from "../../assets/images/Vector.png";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/core";

export default SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("GetStarted");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <View className="flex-1">
      <ImageBackground
        source={splash}
        resizeMode="cover"
        resizeMethod="auto"
        className="flex-1 justify-center items-center h-screen mix-blend-color-burn "
        style={{
          width: "100dvw",
          height: "100dvh",
        }}
      >
        <Image source={vector} />
        <View className="p-4">
          <Text
            style={{ fontFamily: "Syne-Bold" }}
            className=" text-white text-3xl text-center"
          >
            TROSKI
          </Text>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
};
