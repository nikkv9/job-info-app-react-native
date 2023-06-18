import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: "1rem",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "lightgray",
    borderBottomWidth: ".07rem",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: ".3rem",
  },
  mid: {
    fontWeight: 600,
    fontSize: "1rem",
    paddingHorizontal: ".2rem",
    paddingBottom: ".2rem",
  },
});

export default styles;
