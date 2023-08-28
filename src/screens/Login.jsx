import React from "react";
import { Text, View, TextInput, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Troski, Prompts } from "../components";
import { Button } from "../components";

export default Login = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 px-4">
      <Troski />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Prompts title="Welcome back!" />
        <View>
          <View className="mb-6">
            <Text style={{ fontFamily: "Karla-Regular" }} className="text-base">
              Great to have you back. Please enter your mobile number to
              continue
            </Text>
          </View>
          <View className="w-full mb-8">
            <TextInput
              placeholder="0204698626"
              className="border border-gray w-full p-4 rounded-xl text-base shadow"
              keyboardType="numeric"
            />
          </View>
          <Button
            name="CONTINUE"
            onPress={() => navigation.navigate("VerifyLogin")}
          />
          <View className="my-3 flex flex-row items-center justify-center gap-1 py-10">
            <Text
              style={{ fontFamily: "Cabin-Bold" }}
              className="text-black text-center text-lg "
            >
              Don't have an account?
            </Text>
            <Text
              style={{ fontFamily: "Cabin-Bold" }}
              className="underline text-orange text-lg"
              onPress={() => navigation.navigate("Welcome")}
            >
              Create one here
            </Text>
          </View>
        </View>
        <StatusBar style="dark" />
      </ScrollView>
    </SafeAreaView>
  );
};
