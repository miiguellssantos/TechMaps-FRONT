import { StyleSheet } from "react-native";
import {Color, Border, Padding}  from "../../RoadmapItem/GlobalStyles";

const styles = StyleSheet.create({
    btnCriarRoadmap: {
        backgroundColor: Color.darkolivegreen,
        paddingHorizontal: 20,
        paddingVertical: Padding.p_8xs,
        justifyContent: "center",
        flexDirection: "row",
        borderRadius: Border.br_mini,
        zIndex: 2,
      },
      bodyPosition: {
        zIndex: 2,
        marginTop: 10,
        alignItems: "center",
      },
      novoRoadmap: {
        height: 18,
        width: 1,
      },
})

export default styles;