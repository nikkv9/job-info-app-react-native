import { View, Text, Image, Linking } from "react-native";
import React from "react";
import cls from "./SingleNews.style";
import noImg from "../../assets/no_img.png";

const SingleNews = ({ item }) => {
  return (
    <View style={cls.container}>
      <Image
        source={{ uri: item.urlToImage ? item.urlToImage : noImg }}
        style={cls.img}
      />
      <View style={cls.contentContainer}>
        <Text style={cls.title} onPress={() => Linking.openURL(item.url)}>
          {item.title}
        </Text>
        <Text style={cls.desc}>{item.description}</Text>
        <Text style={cls.publisher}>
          <Text style={cls.publishText}>Published by </Text>
          {item.source.name}
        </Text>
      </View>
    </View>
  );
};

export default SingleNews;
