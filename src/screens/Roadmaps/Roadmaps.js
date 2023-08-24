import { View, Pressable, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import styles from "./style";
import { useFonts } from 'expo-font';

function Roadmaps({ navigation }) {
  const [loaded] = useFonts({
    Righteous: require('../../../assets/fonts/Righteous-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }
  
  return (
    <SafeAreaView style={[styles.techmapsRoadmaps, styles.bodySpaceBlock]}>
      <View style={styles.header}>
        <Pressable
          style={[styles.userIcon, styles.gearsixFlexBox]}
          onPress={() => navigation.navigate("Profile")}
        >
          <Icon name={"account-circle-outline"} size={45} color={"#306B34"} />
        </Pressable>

        <View style={styles.title}>
          <Text style={styles.roadmaps}>ROADMAPS</Text>
        </View>

        <Pressable
          style={styles.gearsixFlexBox}
          onPress={() => navigation.navigate("SettingsPage")}
        >
          <Icon name={"cog-outline"} size={40} color={"#306B34"} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default Roadmaps;
