export const api_url = "https://newsapi.org/v2";

import home from "../assets/home.png";
import tech from "../assets/tech.png";
import entertainment from "../assets/entertainment.png";
import health from "../assets/health.png";
import sports from "../assets/sports.png";

import bbc_news from "../assets/bbc.png";
import cnn_news from "../assets/cnn.png";
import fox_news from "../assets/fox.webp";
import google_news from "../assets/google.webp";

export const categories = [
  {
    id: 1,
    url: home,
    name: "general",
  },
  {
    id: 2,
    url: tech,
    name: "technology",
  },
  {
    id: 3,
    url: entertainment,
    name: "entertainment",
  },
  {
    id: 4,
    url: health,
    name: "health",
  },
  {
    id: 5,
    url: sports,
    name: "sports",
  },
];

export const sources = [
  {
    id: "bbc-news",
    name: "BBC News",
    url: bbc_news,
  },
  {
    id: "cnn",
    name: "CNN",
    url: cnn_news,
  },
  {
    id: "fox-news",
    name: "Fox News",
    url: fox_news,
  },
  {
    id: "google-news",
    name: "Google News",
    url: google_news,
  },
];
