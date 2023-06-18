import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: "1rem",
    zIndex: 9,
  },
  input: {
    backgroundColor: "lightgray",
    padding: ".7rem",
    borderRadius: ".2rem",
  },
  searchResults: {
    position: "absolute",
    top: 60,
  },
  resultText: {
    borderRadius: ".1rem",
    padding: "1rem",
    marginBottom: ".2rem",
    backgroundColor: "gray",
    color: "white",
  },
});

export default styles;
