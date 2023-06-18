import { View, Text, Dimensions, ScrollView } from "react-native";
import React, { useContext, useState } from "react";
import { NewsContext } from "../api/context_api";
import cls from "./News.style.js";
import SingleNews from "../components/SingleNews";

const News = () => {
  const { news } = useContext(NewsContext);
  const newsData = news.articles;
  console.log(news);

  return (
    <ScrollView>
      <View style={cls.container}>
        {newsData &&
          newsData.map((i) => {
            return <SingleNews item={i} key={i.publishedAt} />;
          })}
      </View>
    </ScrollView>
  );
};

export default News;
