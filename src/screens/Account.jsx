import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import profile from "../../assets/images/profile.png";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default Account = () => {
  const accountLinks = [
    {
      id: 1,
      name: "Language",
      iconOne: <Ionicons name="language" size={30} color="gray" />,
      iconTwo: (
        <Ionicons name="arrow-forward-circle-outline" size={30} color="gray" />
      ),
    },

    {
      id: 2,
      name: "Notifications",
      iconOne: <Ionicons name="notifications-outline" size={30} color="gray" />,
      iconTwo: (
        <Ionicons name="arrow-forward-circle-outline" size={30} color="gray" />
      ),
    },

    {
      id: 3,
      name: "Terms and Privacy Policy",
      iconOne: <Ionicons name="newspaper-outline" size={30} color="gray" />,
      iconTwo: (
        <Ionicons name="arrow-forward-circle-outline" size={30} color="gray" />
      ),
    },

    {
      id: 4,
      name: "Get Help",
      iconOne: <Ionicons name="chatbubbles-outline" size={30} color="gray" />,
      iconTwo: (
        <Ionicons name="arrow-forward-circle-outline" size={30} color="gray" />
      ),
    },

    {
      id: 5,
      name: "Software Licenses",
      iconOne: (
        <Ionicons
          name="ios-information-circle-outline"
          size={30}
          color="gray"
        />
      ),
      iconTwo: (
        <Ionicons name="arrow-forward-circle-outline" size={30} color="gray" />
      ),
    },
  ];
  return (
    <SafeAreaView className="flex-1 px-4 mt-8">
      <View className="border border-orange p-6 rounded-lg relative">
        <View className="absolute top-[-30%] left-5">
          <Image source={profile} />
        </View>
        <View className="mt-4 flex-row items-center justify-between">
          <View>
            <Text style={{ fontFamily: "Karla-Medium" }} className="text-xl">
              Zuleiha Mohammed
            </Text>
            <Text style={{ fontFamily: "Karla-Regular" }} className="text-lg">
              zuleiha@mohammed.com
            </Text>
            <Text style={{ fontFamily: "Karla-Regular" }} className="text-lg">
              +233 50 669 8372
            </Text>
          </View>
          <View className="border border-gray-400 px-4 py-1 rounded-xl flex justify-center items-center">
            <AntDesign name="edit" size={30} color="gray" />
            <Text style={{ fontFamily: "Karla-Medium" }} className="text-lg">
              Edit
            </Text>
          </View>
        </View>
      </View>
      {/*  */}
      <View className="my-6 px-4">
        {accountLinks.map((link) => {
          return (
            <TouchableOpacity
              key={link.id}
              className="flex-row justify-between items-center py-4"
            >
              <View className="flex-row items-center">
                <View className="mr-6">{link.iconOne}</View>
                <Text
                  style={{ fontFamily: "Karla-Medium" }}
                  className="text-xl text-gray-600"
                >
                  {link.name}
                </Text>
              </View>
              <View>{link.iconTwo}</View>
            </TouchableOpacity>
          );
        })}
      </View>
      {/*signout */}
      <TouchableOpacity className="flex-row justify-between items-center mt-4 border border-orange p-4 rounded-xl">
        <Text
          style={{ fontFamily: "Karla-Regular" }}
          className="text-lg text-orange"
        >
          SignOut
        </Text>
        <Text style={{ fontFamily: "Karla-Regular" }} className="text-lg">
          zuleiha@mohammed.com
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
