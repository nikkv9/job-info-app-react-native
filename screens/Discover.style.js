import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: "1rem",
  },
  subTitle: {
    fontSize: "1.1rem",
    borderBottomColor: "teal",
    borderBottomWidth: ".2rem",
    paddingBottom: ".2rem",
    paddingHorizontal: ".1rem",
    width: "fit-content",
    fontWeight: 600,
    marginVertical: "1rem",
  },
  catgContainer: {
    flexDirection: "row",
    marginTop: "1rem",
  },
  catgs: {
    borderBottomColor: "teal",
    borderBottomWidth: ".1rem",
    paddingBottom: "1rem",
    alignItems: "center",
    marginRight: "2rem",
  },
  catgImg: {
    height: 70,
    width: 70,
    marginRight: "1rem",
  },
  catgName: {
    fontWeight: 600,
  },
  srcContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingVertical: ".5rem",
  },
  srcs: {
    height: 100,
    width: 120,
    borderRadius: ".5rem",
    marginHorizontal: ".5rem",
    marginVertical: "1rem",
    backgroundColor: "teal",
  },
  srcImg: {
    height: "100%",
    borderRadius: ".5rem",
    resizeMode: "cover",
    width: "100%",
  },
});

export default styles;
