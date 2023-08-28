import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import activity from "../../assets/images/activity-bus.png";

export default Recent = () => {
  return (
    <SafeAreaView className="flex-1 mt-6 mx-4">
      <Text style={{ fontFamily: "Cabin-Medium" }} className="text-2xl">
        My Activity
      </Text>
      <View className="relative w-full mt-2">
        <Image
          source={{
            uri: "https://img.freepik.com/premium-photo/bus-driving-sunset-along-road-against-backdrop-illuminated-buildings-city-rooftop-view_124507-81787.jpg?w=740",
          }}
          className="w-full h-48 object-cover object-center mb-6 rounded-md"
        />
        <Text
          style={{ fontFamily: "Karla-Medium" }}
          className="absolute top-2 right-2 text-lg rounded-lg text-white bg-orange p-2"
        >
          Most recent
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="flex-row items-center my-4 ">
            <Image
              source={activity}
              className="w-20 h-20 object-cover rounded-2xl "
            />
            <View className="flex-2 ml-6">
              <Text style={{ fontFamily: "Cabin-Bold" }} className="text-lg">
                Trip from Dansoman to Madina
              </Text>
              <Text style={{ fontFamily: "Cabin-Regular" }} className="text-md">
                Wednesday 7 July 2023
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
