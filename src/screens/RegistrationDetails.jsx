import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Troski, Button } from "../components";
import { AntDesign } from "@expo/vector-icons";

export default RegistrationDetails = () => {
  const radioButtonsData = [
    {
      id: "yes",
      label: "Yes",
      selected: true, // Initial state
    },
    {
      id: "no",
      label: "No",
      selected: false, // Initial state
    },
  ];

  const [selectedRadioButton, setSelectedRadioButton] = useState("yes"); // Default selection

  const handleRadioButtonPress = (id) => {
    setSelectedRadioButton(id);
  };
  return (
    <SafeAreaView className="flex-1 px-4">
      <Troski />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={{ fontFamily: "Cabin-Medium" }} className="text-2xl">
          Just some additional details
        </Text>
        <Text style={{ fontFamily: "Karla-Regular" }} className="text-lg my-4">
          We need to verify a few details to get you up and running
        </Text>
        <View className="w-full">
          <Text
            style={{ fontFamily: "Karla-Regular" }}
            className="text-lg py-1 pt-4"
          >
            Driver's License Number
          </Text>
          <TextInput className="border border-gray w-full p-4 rounded-xl text-base shadow" />
        </View>
        <View className="w-full">
          <Text
            style={{ fontFamily: "Karla-Regular" }}
            className="text-lg py-1 pt-4"
          >
            Vehicle Identity Number (VIN)
          </Text>
          <TextInput
            className="border border-gray w-full p-4 rounded-xl text-base shadow"
            keyboardType="numeric"
          />
        </View>
        <View className="w-full">
          <Text
            style={{ fontFamily: "Karla-Regular" }}
            className="text-lg py-1 pt-4"
          >
            Vehicle Registration Number
          </Text>
          <TextInput className="border border-gray w-full p-4 rounded-xl text-base shadow" />
        </View>
        {/* prompt */}
        <View style={{ flexDirection: "row", marginTop: 16 }}>
          {radioButtonsData.map((radioButton) => (
            <TouchableOpacity
              key={radioButton.id}
              onPress={() => handleRadioButtonPress(radioButton.id)}
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginRight: 24,
              }}
            >
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                  borderWidth: 2,
                  borderColor:
                    selectedRadioButton === radioButton.id ? "orange" : "gray",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 10,
                }}
              >
                {selectedRadioButton === radioButton.id && (
                  <View
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: 100,
                      backgroundColor: "orange",
                      borderColor: "orange",
                    }}
                  />
                )}
              </View>
              <Text style={{ fontFamily: "Cabin-Regular" }} className="text-lg">
                {radioButton.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        {selectedRadioButton === "no" ? (
          <View className="w-full border-2 border-dotted border-orange mt-4 flex items-center justify-center p-6">
            <Text
              style={{ fontFamily: "Karla-Medium" }}
              className="text-2xl font-black"
            >
              Permit
            </Text>
            <Text
              style={{ fontFamily: "Karla-Regular" }}
              className="my-2 text-gray-400 text-lg text-center"
            >
              You need to upload a document that shows you're permitted to use
              this vehicle
            </Text>
            <View className="flex flex-row items-center justify-center">
              <AntDesign name="upload" size={26} color="orange" />
              <Text
                style={{ fontFamily: "Karla-Medium" }}
                className="text-lg ml-2"
              >
                Upload Document
              </Text>
            </View>
          </View>
        ) : (
          ""
        )}
        <View className="my-6">
          <Button name="CONTINUE" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
