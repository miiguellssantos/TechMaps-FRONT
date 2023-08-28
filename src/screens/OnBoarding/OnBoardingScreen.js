import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";

const OnBoardingScreen = ({ navigation }) => {
  const [loaded] = useFonts({
    Righteous: require("../../../assets/fonts/Righteous-Regular.ttf"),
    InterBlack: require("../../../assets/fonts/Inter-Regular.ttf"),
    InterBold: require("../../../assets/fonts/Inter-Bold.ttf"),
    InterExtraBold: require("../../../assets/fonts/Inter-ExtraBold.ttf"),
    InterExtraLight: require("../../../assets/fonts/Inter-ExtraLight.ttf"),
    InterLight: require("../../../assets/fonts/Inter-Light.ttf"),
    InterMedium: require("../../../assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("../../../assets/fonts/Inter-Regular.ttf"),
    InterSemiBold: require("../../../assets/fonts/Inter-SemiBold.ttf"),
    InterThin: require("../../../assets/fonts/Inter-Thin.ttf"),
    DMSans: require("../../../assets/fonts/DMSans-Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <Image
        style={styles.image}
        source={require("../../../assets/onBoardingImage.png")}
      />

      <View style={styles.content}>
        <Text style={{ fontSize: 30, fontFamily: "Righteous" }}>
          Dê um level-up no seu aprendizado com
        </Text>
        <Text
          style={{ color: "#306B34", fontFamily: "Righteous", fontSize: 30 }}
        >
          TECHMAPS.
        </Text>

        <LinearGradient
          style={styles.startButtonGradient}
          locations={[0, 1]}
          colors={["#306b34", "#53bb5a"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <TouchableOpacity
            style={styles.startButton}
            onPress={() => navigation.navigate("LOGIN")}
          >
            <Text style={styles.startButtonText}>COMEÇAR</Text>
            <Icon name={"arrow-right"} size={22} color={"#FFF"} />
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

export default OnBoardingScreen;
