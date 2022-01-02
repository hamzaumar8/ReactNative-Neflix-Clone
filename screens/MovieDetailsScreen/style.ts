import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  image: {
    width: "100%",
    // height: 200,
    aspectRatio: 16 / 9,
    resizeMode: "cover",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  match: {
    color: "#00aa00",
    fontWeight: "bold",
    marginRight: 5,
  },
  year: {
    color: "lightgrey",
    marginRight: 5,
  },
  ageContainer: {
    backgroundColor: "#e6e229",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 3,
    marginRight: 5,
    borderRadius: 2,
  },
  age: {
    color: "#000",
    fontWeight: "bold",
  },
  playButton: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    borderRadius: 3,
    marginVertical: 5,
  },
  playButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  downloadButton: {
    backgroundColor: "#1d1d1d",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    borderRadius: 3,
    marginVertical: 5,
  },
  downloadButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
