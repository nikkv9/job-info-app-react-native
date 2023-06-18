import { Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import cls from "./HeaderBtn.style.js";

const HeaderBtn = ({ iconUrl, handlePress }) => {
  return (
    <TouchableOpacity style={cls.container} onPress={handlePress}>
      <Image source={iconUrl} style={cls.imgIcon} />
    </TouchableOpacity>
  );
};

export default HeaderBtn;
