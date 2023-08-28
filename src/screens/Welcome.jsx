import React from "react";
import { Text, View, TextInput, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Troski, Prompts } from "../components";
import { Button } from "../components";

export default Welcome = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 px-4">
      <Troski />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Prompts title="Let's get to know you" />
        <View>
          <View className="mb-6">
            <Text style={{ fontFamily: "Karla-Regular" }} className="text-base">
              Kindly fill out this form to get started
            </Text>
          </View>
          {/* form details */}
          <View className=" w-full flex-row justify-between items-center">
            <View className="flex-1 mr-6">
              <Text
                style={{ fontFamily: "Karla-Regular" }}
                className="text-lg py-1"
              >
                First Name
              </Text>
              <TextInput
                placeholder="Gideon"
                className="border border-gray w-full p-4 rounded-xl text-base shadow"
              />
            </View>
            <View className="flex-1">
              <Text
                style={{ fontFamily: "Karla-Regular" }}
                className="text-lg py-1"
              >
                Other Names
              </Text>
              <TextInput
                placeholder="Nana Kwame"
                className="border border-gray w-full p-4 rounded-xl text-base shadow"
              />
            </View>
          </View>
          {/* surname container */}
          <View className="w-full">
            <Text
              style={{ fontFamily: "Karla-Regular" }}
              className="text-lg py-1 pt-4"
            >
              Surname
            </Text>
            <TextInput
              placeholder="Okantey"
              className="border border-gray w-full p-4 rounded-xl text-base shadow"
            />
          </View>
          {/* phone number */}
          <View className="w-full mb-8">
            <Text
              style={{ fontFamily: "Karla-Regular" }}
              className="text-lg py-1 pt-4"
            >
              Phone Number
            </Text>
            <TextInput
              placeholder="0204698626"
              className="border border-gray w-full p-4 rounded-xl text-base shadow"
              keyboardType="numeric"
            />
          </View>
          <Button
            name="CONTINUE"
            onPress={() => navigation.navigate("VerifyRegistration")}
          />
          <View className="my-3 flex flex-row items-center justify-center gap-1 py-10">
            <Text
              style={{ fontFamily: "Cabin-Bold" }}
              className="text-black text-center text-lg "
            >
              Already have an account?
            </Text>
            <Text
              style={{ fontFamily: "Cabin-Bold" }}
              className="underline text-orange text-lg"
              onPress={() => navigation.navigate("AuthStack")}
            >
              Sign in here
            </Text>
          </View>
        </View>
        <StatusBar style="dark" />
      </ScrollView>
    </SafeAreaView>
  );
};
