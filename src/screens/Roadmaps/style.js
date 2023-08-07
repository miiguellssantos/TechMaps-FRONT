import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    body: {
        alignSelf: "stretch",
        overflow: "hidden",
        padding: 10,
        flex: 1
        },
    
    bodySpaceBlock: {
        padding: 10,
        flex: 1
        },

    bodyPosition: {
        zIndex: 2,
        marginTop: 10,
        alignItems: "center"
        },

    techmapsRoadmaps: {
        backgroundColor: "#1e1e1e",
        width: "100%",
        height: 800,
        overflow: "hidden"
        }
})

export default styles