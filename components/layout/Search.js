import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import cls from "./Search.style";
import { NewsContext } from "../../api/context_api";

const Search = () => {
  const { news } = useContext(NewsContext);
  const newsData = news.articles;

  const [searchResults, setSearchResults] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [currNews, setCurrNews] = useState();

  const searchHandle = (text) => {
    if (!text) {
      setSearchResults([]);
      return;
    }
    setSearchResults(newsData.filter((query) => query.title.includes(text)));
  };
  return (
    <View style={cls.container}>
      <TextInput
        style={cls.input}
        placeholder="Search for news"
        placeholderTextColor="gray"
        onChangeText={(text) => searchHandle(text)}
      />

      <View style={cls.searchResults}>
        {searchResults.slice(0, 5).map((data) => (
          <TouchableOpacity key={data.title} activeOpacity={0.7}>
            <Text style={cls.resultText}>{data.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Search;
