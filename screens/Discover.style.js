import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: "1rem",
  },
  catgHeading: {
    fontSize: "1.1rem",
    borderBottomColor: "teal",
    borderBottomWidth: ".2rem",
    paddingBottom: ".2rem",
    paddingHorizontal: ".1rem",
    width: "fit-content",
    fontWeight: 600,
  },
  catgContainer: {
    flexDirection: "row",
    marginTop: "2rem",
  },
  catgs: {
    alignItems: "center",
  },
  catgImg: {
    height: 80,
    width: 80,
    marginRight: "1rem",
  },
  catgName: {
    fontWeight: 600,
  },
});

export default styles;
