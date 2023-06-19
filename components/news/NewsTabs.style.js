import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: "2rem",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "1rem",
    marginVertical: "1rem",
  },
  title: {
    fontSize: "1.2rem",
    fontWeight: 600,
  },
  btn: {
    color: "gray",
    fontWeight: 600,
  },
  err: {
    color: "crimson",
    marginVertical: ".5rem",
  },
});

export default styles;
