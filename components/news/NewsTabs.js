import { View, Text, useWindowDimensions } from "react-native";
import React, { useContext } from "react";
import cls from "./NewsTabs.style.js";
import { useState } from "react";
import { SceneMap, TabView } from "react-native-tab-view";
import Discover from "../../screens/Discover.js";
import News from "../../screens/News.js";
import TopNavigation from "../layout/TopNavigation.js";
import { NewsContext } from "../../api/context_api.js";

const NewsTabs = () => {
  const layout = useWindowDimensions();
  const { index, setIndex } = useContext(NewsContext);

  const [routes] = useState([
    { key: "first", title: "discover" },
    { key: "second", title: "news" },
  ]);

  const renderScene = SceneMap({
    first: Discover,
    second: News,
  });
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={() => <TopNavigation idx={index} setIdx={setIndex} />}
    />
  );
};

export default NewsTabs;
