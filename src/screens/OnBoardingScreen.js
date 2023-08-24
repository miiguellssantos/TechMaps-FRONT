import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useFonts } from "expo-font";

const OnBoardingScreen = ({ navigation, islogged }) => {
  const [loaded] = useFonts({
    Righteous: require("../../assets/fonts/Righteous-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#1e1e1e",
      }}
    >
      <View>
        <Text
          style={{
            fontFamily: "Righteous",
            fontSize: 30,
            fontWeight: "bold",
            color: "#ACE894",
            marginTop: 25,
          }}
        >
          TECHMAPS
        </Text>
      </View>

      <View>
        <Text style={{ color: "#FFF" }}>Era pra ter um texto legal aqui.</Text>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "#ACE984",
          padding: 20,
          width: "90%",
          borderRadius: 5,
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 25,
        }}
        onPress={() => navigation.navigate("Roadmaps")}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            color: "#fff",
            fontFamily: "Righteous",
          }}
        >
          Começar
        </Text>
        <Icon name={"arrow-right"} size={22} color={"#FFF"} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OnBoardingScreen;
