import React from "react";
import { TouchableOpacity, Text } from "react-native";

export default Button = ({ name, onPress }) => {
  return (
    <TouchableOpacity
      className="w-full bg-orange p-3 rounded-md"
      onPress={onPress}
    >
      <Text
        style={{ fontFamily: "Cabin-Bold" }}
        className={`text-center  text-black text-xl `}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};
