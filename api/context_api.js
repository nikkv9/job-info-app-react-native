import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { api_key, api_url } from "./api";

// Create a new context
export const NewsContext = createContext();

// Create a provider component
export const ContextApi = ({ children }) => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("");
  const [source, setSource] = useState("");
  const [index, setIndex] = useState(1);

  const newsFetch = async () => {
    const { data } = await axios.get(
      `${api_url}/top-headlines?language=en&category=${category}&sources=${source}&apiKey=${api_key}`
    );
    console.log(data);
    setNews(data);
    setIndex(1);
  };

  useEffect(() => {
    newsFetch();
  }, [category, source]);
  return (
    <NewsContext.Provider
      value={{ news, index, setIndex, setCategory, setSource }}
    >
      {children}
    </NewsContext.Provider>
  );
};
