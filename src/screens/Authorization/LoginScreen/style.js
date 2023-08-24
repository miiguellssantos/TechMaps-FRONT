import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeArea: {
    justifyContent: "center",
    color: "#FFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "flex-end",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 20,
    padding: 20
  },
  logoImage: {
    height: 100,
    width: 100,
  },
  headerText: {
    fontFamily: "Righteous",
    fontSize: 30,
    color: "#FFF"
  },
  loginText: {
    fontSize: 28,
    fontFamily: "InterRegular",
    color: "#FFF",
    marginBottom: 30,
  },
  gradient: {
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    overflow: "hidden",
    justifyContent: "center",
  },
  container: {
    paddingHorizontal: 25
  },
  inputView: {
    flexDirection: "row",
    borderBottomColor: "#",
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 25,
  },
  input: {
    color: "#FFF",
    marginLeft: 5,
    flex:1,
    paddingVertical: 0
  }
});

export default styles;
