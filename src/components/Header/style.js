import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
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
    overflow: "hidden"
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
    flexDirection: "row"
    },

  roadmaps: {
    fontSize: 25,
    color: "#306b34",
    textAlign: "left",
  },
  title: {
    flexDirection: "row",
  },
});

export default styles