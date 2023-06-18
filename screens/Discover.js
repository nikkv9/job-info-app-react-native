import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useContext } from "react";
import cls from "./Discover.style";
import { categories, sources } from "../api/api";
import { NewsContext } from "../api/context_api";

const Discover = () => {
  const { setCategory } = useContext(NewsContext);

  const capitalizeFirstLetter = (string) => {
    if (string.length === 0) return string; // Handle empty string case
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <View style={cls.container}>
      <Text style={cls.catgHeading}>Categories</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={cls.catgContainer}>
          {categories.map((c) => {
            return (
              <TouchableOpacity
                style={cls.catgs}
                key={c.id}
                onPress={() => setCategory(c.name)}
              >
                <Image source={{ uri: c.url }} style={cls.catgImg} />
                <Text style={cls.catgName}>
                  {capitalizeFirstLetter(c.name)}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Discover;
