import { Dimensions, StyleSheet } from "react-native";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    marginBottom: "3rem",
    borderBottomColor: "lightgray",
    borderBottomWidth: ".1rem",
  },
  contentContainer: {
    padding: "1rem",
  },
  img: {
    height: windowHeight * 0.4,
    width: windowWidth,
    resizeMode: "cover",
  },
  title: {
    fontSize: "1.4rem",
    marginVertical: ".5rem",
  },
  desc: {
    color: "gray",
    fontSize: "1rem",
  },
  publisher: {
    fontSize: "1rem",
    marginVertical: "1rem",
  },
  publishText: {
    color: "gray",
    fontSize: ".9rem",
  },
});

export default styles;
