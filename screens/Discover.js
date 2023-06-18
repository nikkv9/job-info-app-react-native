import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useContext } from "react";
import cls from "./Discover.style";
import { categories, sources } from "../api/api";
import { NewsContext } from "../api/context_api";
import Search from "../components/layout/Search";

const Discover = () => {
  const { setCategory, setSource } = useContext(NewsContext);

  const capitalizeFirstLetter = (string) => {
    if (string.length === 0) return string;
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <View style={cls.container}>
      {/* search  */}
      <Search />

      {/* category  */}
      <Text style={cls.subTitle}>Categories</Text>
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

      {/* source  */}
      <Text style={cls.subTitle}>Sources</Text>
      <View style={cls.srcContainer}>
        {sources.map((s) => {
          return (
            <TouchableOpacity
              style={cls.srcs}
              key={s.id}
              onPress={() => setSource(s.id)}
            >
              <Image source={{ uri: s.url }} style={cls.srcImg} />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default Discover;
