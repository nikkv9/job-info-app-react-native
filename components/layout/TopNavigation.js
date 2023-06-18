import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import cls from "./TopNavigation.style";
import Icon from "react-native-vector-icons/MaterialIcons";

const TopNavigation = ({ idx, setIdx }) => {
  return (
    <View style={cls.container}>
      {idx === 0 ? (
        <></>
      ) : (
        <TouchableOpacity
          style={cls.left}
          onPress={() => setIdx(idx === 0 ? 1 : 0)}
        >
          <Icon name="arrow-back" size={20} color="teal" />
          <Text>Discover</Text>
        </TouchableOpacity>
      )}
      <Text style={cls.mid}>{idx ? "ALL NEWS" : "DISCOVER"}</Text>

      {idx ? (
        <TouchableOpacity
          style={cls.right}
          //   onPress={() => fetchNews("general")}
        >
          <Text>
            <Icon name="refresh" size={20} color="teal" />
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={cls.left}
          onPress={() => setIdx(idx === 0 ? 1 : 0)}
        >
          <Text>All News</Text>
          <Icon name="arrow-forward" size={20} color="teal" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TopNavigation;
