import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TextInput } from "react-native";
import { Troski, Button } from "../components";

export default VerifyRegistration = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 px-4">
      <Troski />
      <Text className="text-2xl" style={{ fontFamily: "Cabin-Regular" }}>
        Enter the 6-digit code sent to you on
      </Text>
      {/* OTP section */}

      <View className="flex-row mt-6 justify-between">
        <TextInput className="flex-1 border border-gray-300 p-4 mr-4 rounded-xl" />
        <TextInput className="flex-1 border border-gray-300 p-4 mr-4 rounded-xl" />
        <TextInput className="flex-1 border border-gray-300 p-4 mr-4 rounded-xl" />
        <TextInput className="flex-1 border border-gray-300 p-4 mr-4 rounded-xl" />
        <TextInput className="flex-1 border border-gray-300 p-4 mr-4 rounded-xl" />
        <TextInput className="flex-1 border border-gray-300 p-4 rounded-xl" />
      </View>
      <View className="mt-10">
        <Button
          name="CONTINUE"
          onPress={() => navigation.navigate("RegistrationDetails")}
        />
      </View>
      <View className="flex flex-row justify-between my-8">
        <View className="flex flex-row">
          <Text className="text-lg" style={{ fontFamily: "Karla-Regular" }}>
            Didn't get code?{" "}
          </Text>
          <Text
            className="text-lg font-black underline text-orange"
            style={{ fontFamily: "Karla-Medium" }}
          >
            Resend code
          </Text>
          <Text className="text-lg" style={{ fontFamily: "Karla-Regular" }}>
            {" "}
            in
          </Text>
        </View>
        <View className="flex flex-row">
          <Text
            className="text-lg font-black text-orange"
            style={{ fontFamily: "Karla-Regular" }}
          >
            00:30
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
