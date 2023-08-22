import React from "react";
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import started from "../../assets/images/started.png";
import { StatusBar } from "expo-status-bar";
import { Button } from "../components";

export default GetStarted = ({ navigation }) => {
  const navigateToWelcome = () => {
    navigation.navigate("Welcome");
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={started}
        resizeMode="cover"
        resizeMethod="auto"
        style={styles.backgroundImage}
      >
        <View style={styles.content}>
          <Button
            name="GET STARTED"
            onPress={() => navigation.navigate("RegisterGroup")}
          />
          <View style={styles.textContainer}>
            <Text
              style={{ fontFamily: "Cabin-Bold" }}
              className="text-white text-center text-lg "
            >
              Already have an account?
            </Text>
            <Text
              style={{ fontFamily: "Cabin-Bold" }}
              className="underline text-orange text-lg"
              onPress={() => navigation.navigate("LoginGroup")}
            >
              Sign in here
            </Text>
          </View>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "flex-end",
  },
  content: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Add a semi-transparent background to make text more readable
    padding: 20,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
});
