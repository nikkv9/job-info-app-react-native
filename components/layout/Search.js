import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  Dimensions,
} from "react-native";
import React, { useContext, useState } from "react";
import cls from "./Search.style";
import { NewsContext } from "../../api/context_api";
import SingleNews from "../news/SingleNews";
import Icon from "react-native-vector-icons/FontAwesome";

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

  const modalHandle = (n) => {
    setOpenModal(true);
    setCurrNews(n);
  };
  return (
    <View style={cls.container}>
      <TextInput
        style={cls.input}
        placeholder="Search for news"
        placeholderTextColor="gray"
        onChangeText={(text) => searchHandle(text)}
      />

      {/* search results  */}
      <View style={cls.searchResults}>
        {searchResults.slice(0, 5).map((data) => (
          <TouchableOpacity
            key={data.title}
            activeOpacity={0.7}
            onPress={() => modalHandle(data)}
          >
            <Text style={cls.resultText}>{data.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* modal  */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={openModal}
        onRequestClose={() => setOpenModal(!openModal)}
      >
        <TouchableOpacity
          onPress={() => setOpenModal(!openModal)}
          style={cls.crossIconContainer}
        >
          <Icon name="times" size={20} color="red" />
        </TouchableOpacity>
        <View>
          <SingleNews item={currNews} />
        </View>
      </Modal>
    </View>
  );
};

export default Search;
