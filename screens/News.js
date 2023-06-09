import { View, Text, Dimensions, ScrollView } from "react-native";
import React, { useContext, useState } from "react";
import { NewsContext } from "../api/context_api";
import cls from "./News.style.js";
import SingleNews from "../components/news/SingleNews";

const News = () => {
  const { news } = useContext(NewsContext);
  // console.log(news);
  const newsData = news.articles;

  return (
    <ScrollView>
      <View style={cls.container}>
        {newsData &&
          newsData.map((i) => {
            return <SingleNews item={i} key={i.title} />;
          })}
      </View>
    </ScrollView>
  );
};

export default News;
