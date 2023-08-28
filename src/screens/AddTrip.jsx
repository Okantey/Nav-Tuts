import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "../components";

export default AddTrip = ({ navigation }) => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <SafeAreaView className="flex-1 px-4 mt-6">
      <TouchableOpacity
        className="flex-row items-center my-4"
        onPress={() => navigation.navigate("Tabs")}
      >
        <Ionicons name="chevron-back-outline" size={40} color="black" />
        <Text style={{ fontFamily: "Karla-Medium" }} className="text-2xl">
          Back
        </Text>
      </TouchableOpacity>
      <Text style={{ fontFamily: "Cabin-Bold" }} className="text-2xl mb-4">
        Start a new trip
      </Text>
      <View className="flex-row my-3 w-full border border-gray-400 p-4 rounded-lg shadow-inner">
        <Ionicons name="location-outline" size={30} color="black" />
        <TextInput
          className="w-full ml-2 text-lg"
          style={{ fontFamily: "Cabin-Regular" }}
          placeholder="Enter your starting point"
        />
      </View>
      <View className="flex-row my-3 w-full border border-gray-400 p-4 rounded-lg shadow-inner">
        <Ionicons name="locate-outline" size={30} color="black" />
        <TextInput
          className="w-full ml-2 text-lg"
          style={{ fontFamily: "Cabin-Regular" }}
          placeholder="Enter your destination point"
        />
      </View>
      <Text style={{ fontFamily: "Cabin-Bold" }} className="text-2xl my-4">
        Route
      </Text>
      <Text style={{ fontFamily: "Karla-Regular" }} className="text-lg ">
        Choose your preferred route
      </Text>
      <View className="flex-row items-center my-3 w-full border border-gray-400 px-4 py-1 rounded-lg shadow-inner">
        <Ionicons name="trending-down" size={30} color="black" />
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
      <View className="my-4">
        <Button name="START TRIP" />
      </View>
    </SafeAreaView>
  );
};
