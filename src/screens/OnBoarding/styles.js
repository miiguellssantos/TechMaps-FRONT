import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1e1e1e",
  },
  title: {
    fontFamily: "Righteous",
    fontSize: 30,
    color: "#ACE894",
    marginTop: 25,
  },
  startButton: {
    backgroundColor: "#ACE984",
    padding: 20,
    width: "90%",
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  startButtonText: {
    fontSize: 18,
    color: "#fff",
    fontFamily: "Righteous",
  },
  image: {
    height: 250,
    width: 330,
  }
});

export default styles;
