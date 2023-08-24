import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./styles";

const OnBoardingScreen = ({ navigation }) => {
  const [loaded] = useFonts({
    Righteous: require('../../../assets/fonts/Righteous-Regular.ttf'),
    InterBlack: require('../../../assets/fonts/Inter-Regular.ttf'),
    InterBold: require('../../../assets/fonts/Inter-Bold.ttf'),
    InterExtraBold: require('../../../assets/fonts/Inter-ExtraBold.ttf'),
    InterExtraLight: require('../../../assets/fonts/Inter-ExtraLight.ttf'),
    InterLight: require('../../../assets/fonts/Inter-Light.ttf'),
    InterMedium: require('../../../assets/fonts/Inter-Medium.ttf'),
    InterRegular: require('../../../assets/fonts/Inter-Regular.ttf'),
    InterSemiBold: require('../../../assets/fonts/Inter-SemiBold.ttf'),
    InterThin: require('../../../assets/fonts/Inter-Thin.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Text style={styles.title}>TECHMAPS</Text>
      </View>

      <View>
        <Image style={styles.image} source={require('../../../assets/onBoardingImage.png')}/>
      </View>

     
      <TouchableOpacity
        style={styles.startButton}
        onPress={() => navigation.navigate("LOGIN")}
      >
        <Text style={styles.startButtonText}>COMEÇAR</Text>
        <Icon name={"arrow-right"} size={22} color={"#FFF"} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OnBoardingScreen;
