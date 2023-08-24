import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  body: {
    alignSelf: "stretch",
    overflow: "hidden",
    padding: 10,
    flex: 1,
  },

  bodySpaceBlock: {
    padding: 10,
    flex: 1,
  },

  bodyPosition: {
    zIndex: 2,
    marginTop: 10,
    alignItems: "center",
  },

  techmapsRoadmaps: {
    backgroundColor: "#1e1e1e",
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
  gearsixFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  userVectorIcon: {
    width: 34,
    height: 33,
  },
  gearVectorIcon: {
    width: 29,
    height: 27,
  },
  userIcon: {
    paddingHorizontal: 0,
    paddingVertical: 4,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },

  header: {
    height: 80,
    width: "100%",
    paddingHorizontal: 15,
    zIndex: 1,
    marginTop: 10,
    backgroundColor: "#ACE894",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 15,
    overflow: "hidden",
    flexDirection: "row",
  },

  roadmaps: {
    fontFamily: 'Righteous',
    fontSize: 25,
    color: "#306b34",
    textAlign: "left",
  },
  title: {
    flexDirection: "row",
  },
});

export default styles;
