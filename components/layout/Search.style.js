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
  crossIconContainer: {
    position: "absolute",
    zIndex: 999,
    right: 0,
    margin: "1rem",
    height: "2.5rem",
    width: "2.5rem",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderColor: "red",
    borderWidth: ".1rem",
  },
});

export default styles;
