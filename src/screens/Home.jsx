import React, { useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import profile from "../../assets/images/profile.png";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "../components";

export default Home = () => {
  const [activeTrip, setActiveTrip] = useState(false);
  return (
    <SafeAreaView className="flex-1 px-4 mt-2 ">
      <View className="flex flex-row justify-between items-center mb-4">
        {/* logo and text container */}
        <View className="flex flex-row items-center">
          <Image source={profile} />
          <View className="ml-3">
            <Text style={{ fontFamily: "Karla-Medium" }} className="text-xl">
              Good Morning
            </Text>
            <Text
              style={{ fontFamily: "Syne-Bold" }}
              className="text-2xl text-orange"
            >
              Amanda
            </Text>
          </View>
        </View>
        <Ionicons name="notifications-outline" size={34} color="black" />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={{ fontFamily: "Syne-Bold" }} className="text-xl">
          Ongoing Trips
        </Text>
        <View className="w-full">
          <Image
            source={{
              uri: "https://img.freepik.com/free-vector/vector-illustration-white-bus-realistic-style_1441-759.jpg?w=740&t=st=1692991770~exp=1692992370~hmac=e2e64acc18c5589f2e82ef2d3e382f219d948deb28cc42ab9df2e946c9360860",
            }}
            className="w-full h-56 object-cover my-2 rounded-md"
          />
        </View>
        <Text
          className="text-center text-xl my-2"
          style={{ fontFamily: "Karla-Regular" }}
        >
          You don't have any ongoing trips
        </Text>
        <Button name="START NEW TRIP" />
        <Text style={{ fontFamily: "Syne-Bold" }} className="text-xl my-2">
          Statistics
        </Text>
        {/* stats box */}
        <View className="flex flex-row justify-between items-center mt-2 mb-1 gap-4">
          <View className="flex flex-1 justify-center items-center bg-gray-300 rounded-2xl p-4 py-6 shadow-inner">
            <Text style={{ fontFamily: "Karla-Medium" }} className="text-2xl">
              1893
            </Text>
            <Text style={{ fontFamily: "Karla-Regular" }} className="text-lg">
              Completed Trips
            </Text>
          </View>
          <View className="flex flex-1 justify-center items-center bg-gray-300 rounded-2xl p-4 py-4 py-6 shadow-inner">
            <Text style={{ fontFamily: "Karla-Medium" }} className="text-2xl">
              4.8/5.0
            </Text>
            <Text style={{ fontFamily: "Karla-Regular" }} className="text-lg">
              Average Rating
            </Text>
          </View>
        </View>
        {/* revenue box */}
        <View className="bg-gray-400 p-6 my-4 rounded-2xl">
          <Text style={{ fontFamily: "Karla-Medium" }} className="text-lg">
            Revenue
          </Text>
          <View className="flex flex-row justify-between items-center">
            <View className="flex flex-row items-center">
              {/* amount */}
              <Text
                style={{ fontFamily: "Karla-Medium" }}
                className="text-2xl mr-2"
              >
                GHS 940.00
              </Text>
              <Text style={{ fontFamily: "Karla-Regular" }} className="text-lg">
                this week
              </Text>
            </View>
            <View className="flex flex-row items-center">
              <Text style={{ fontFamily: "Karla-Medium" }} className="text-lg">
                -1.48%
              </Text>
              <Ionicons name="trending-down" size={30} color="black" />
            </View>
          </View>
          {/* performance */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
