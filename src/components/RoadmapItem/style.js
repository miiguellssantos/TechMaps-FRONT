import { StyleSheet } from "react-native";
import { Padding, FontFamily, Border, FontSize, Color } from "./GlobalStyles";

const styles = StyleSheet.create({
  bodySpaceBlock: {
    padding: Padding.p_3xs,
    flex: 1,
  },
  formPosition: {
    zIndex: 0,
    height: 1,
    left: "50%",
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  headerFlexBox: {
    marginTop: 10,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  roadmapsTypo: {
    textAlign: "left",
    fontFamily: FontFamily.righteousRegular,
  },
  bodyPosition: {
    zIndex: 2,
    marginTop: 10,
    alignItems: "center",
  },
  roadmap1Layout: {
    borderRadius: Border.br_3xs,
    backgroundColor: "transparent",
    alignItems: "center",
    padding: Padding.p_3xs,
    overflow: "hidden",
  },
  bodyFlexBox: {
    alignSelf: "stretch",
    overflow: "hidden",
  },
  textTypo: {
    marginLeft: 3,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    textAlign: "left",
  },
  profile: {
    marginTop: -390,
    marginLeft: -170,
    width: 340,
  },
  vectorIcon: {
    width: 34,
    height: 33,
  },
  userIcon: {
    paddingHorizontal: 0,
    paddingVertical: 4,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  roadmaps: {
    fontSize: 25,
    color: Color.darkolivegreen,
  },
  title: {
    flexDirection: "row",
  },
  vectorIcon1: {
    width: 29,
    height: 27,
  },
  gearsix: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  header: {
    height: 80,
    paddingHorizontal: 15,
    zIndex: 1,
    marginTop: 10,
    backgroundColor: "transparent",
    justifyContent: "space-between",
    paddingVertical: 0,
    alignItems: "center",
    borderRadius: Border.br_mini,
    overflow: "hidden",
  },
  form: {
    marginTop: 0,
    marginLeft: 0,
    width: 1,
  },
  groupIcon: {
    width: 60,
    height: 60,
  },
  iconChild: {
    borderStyle: "solid",
    borderColor: "#eee5e9",
    borderRightWidth: 2,
    width: 2,
    height: 72,
    marginLeft: 5,
  },
  icon: {
    alignItems: "center",
    flexDirection: "row",
  },
  python101: {
    fontSize: 20,
    color: Color.white,
  },
  checkcircleIcon: {
    width: 25,
    height: 25,
    overflow: "hidden",
  },
  text: {
    color: Color.white,
  },
  timeSpent: {
    marginLeft: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  statLine1: {
    marginTop: 2,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  text2: {
    color: "#eee5e9",
  },
  stats: {
    padding: Padding.p_8xs,
    marginLeft: 10,
  },
  signinIcon: {
    width: 45,
    height: 45,
    overflow: "hidden",
  },
  enter: {
    marginLeft: 10,
    overflow: "hidden",
  },
  roadmap1: {
    height: 100,
    marginTop: 10,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-around",
    zIndex: 1,
  },
  pluscircleIcon: {
    width: 30,
    height: 30,
    overflow: "hidden",
  },
  novoRoadmap: {
    height: 18,
    width: 1,
  },
  btnCriarRoadmap: {
    backgroundColor: Color.darkolivegreen,
    paddingHorizontal: 20,
    paddingVertical: Padding.p_8xs,
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: Border.br_mini,
    zIndex: 2,
  },
  body: {
    alignSelf: "stretch",
    overflow: "hidden",
    padding: Padding.p_3xs,
    flex: 1,
  },
  vectorIcon2: {
    width: 27,
    height: 25,
  },
  selected: {
    width: 50,
    height: 50,
    justifyContent: "center",
  },
  chartpiesliceIcon: {
    width: 40,
    height: 40,
    marginLeft: 150,
    overflow: "hidden",
  },
  footer: {
    height: 70,
    paddingHorizontal: 50,
    zIndex: 3,
    backgroundColor: "transparent",
    justifyContent: "space-between",
    paddingVertical: 0,
    alignItems: "center",
    borderRadius: Border.br_mini,
    overflow: "hidden",
  },
  techmapsRoadmaps: {
    backgroundColor: "#1e1e1e",
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default styles;
