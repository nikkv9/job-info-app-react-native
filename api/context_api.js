import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { api_url } from "./api";
import { api_key } from "@env";

// Create a new context
export const NewsContext = createContext();

// Create a provider component
export const ContextApi = ({ children }) => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("");
  const [source, setSource] = useState("");
  const [index, setIndex] = useState(1);

  const newsFetch = async () => {
    try {
      const { data } = await axios.get(
        `${api_url}/top-headlines?language=en&category=${category}&apiKey=${api_key}`
      );
      console.log(data);
      setNews(data);
      setIndex(1);
    } catch (error) {
      console.log(error);
    }
  };
  const sourceFetch = async () => {
    try {
      const { data } = await axios.get(
        `${api_url}/top-headlines?sources=${source}&apiKey=${api_key}`
      );
      console.log(data);
      setNews(data);
      setIndex(1);
    } catch (error) {
      console.log(error);
    }
  };

  const refreshNews = async () => {
    try {
      const { data } = await axios.get(
        `${api_url}/top-headlines?language=en&category=general&apiKey=${api_key}`
      );

      console.log(data);
      setNews(data);
      setIndex(1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newsFetch();
    sourceFetch();
  }, [category, source]);
  return (
    <NewsContext.Provider
      value={{
        news,
        index,
        setIndex,
        setCategory,
        setSource,
        newsFetch,
        sourceFetch,
        refreshNews,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
