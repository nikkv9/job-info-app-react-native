// App.js

import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import axios from "axios";

const API_KEY = "YOUR_API_KEY"; // Replace with your actual API key
const API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

const HomeScreen = ({ navigation }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get(API_URL);
      const { articles } = response.data;

      setArticles(articles);
    } catch (error) {
      console.log(error);
    }
  };

  const handleArticlePress = (articleUrl) => {
    navigation.navigate("ArticleDetail", { articleUrl });
  };

  const renderArticleItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleArticlePress(item.url)}>
        <View style={{ padding: 10 }}>
          <Image
            source={{ uri: item.urlToImage }}
            style={{ width: 100, height: 100 }}
          />
          <Text style={{ marginTop: 10 }}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1, paddingTop: 50 }}>
      <FlatList
        data={articles}
        renderItem={renderArticleItem}
        keyExtractor={(item) => item.url}
      />
    </View>
  );
};

const ArticleDetailScreen = ({ route }) => {
  const { articleUrl } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Article Detail Screen</Text>
      <Text>Article URL: {articleUrl}</Text>
    </View>
  );
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ArticleDetail" component={ArticleDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
