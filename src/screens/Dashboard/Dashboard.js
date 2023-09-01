import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { View, Text, Pressable } from "react-native";
import styles from "../Roadmaps/style";
import Dashboard from "../../components/Dashboard";
import { LinearGradient } from "expo-linear-gradient";
import ConcludedRoadmapList from "../../components/ConcludedRoadmapList/ConcludedRoadmapList";

export default function DashBoard({ navigation }) {
  return (
    <SafeAreaView style={[styles.techmapsRoadmaps, styles.bodySpaceBlock]}>
      <LinearGradient
        style={styles.header}
        locations={[0, 1]}
        colors={["#eee5e9", "#ace894"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Pressable
          style={[styles.userIcon, styles.gearsixFlexBox]}
          onPress={() => navigation.navigate("Profile")}
        >
          <Icon name={"account-circle-outline"} size={45} color={"#306B34"} />
        </Pressable>

        <View style={styles.title}>
          <Text style={styles.roadmaps}>DASHBOARD</Text>
        </View>

        <Pressable
          style={styles.gearsixFlexBox}
          onPress={() => navigation.navigate("SettingsPage")}
        >
          <Icon name={"cog-outline"} size={40} color={"#306B34"} />
        </Pressable>
      </LinearGradient>
      <View>
        <Dashboard />
        <Text style={{ color: "#FFF", marginTop: 10, fontFamily: "InterSemiBold" }}>Roadmaps Concluídos:</Text>
        <ConcludedRoadmapList />
      </View>
    </SafeAreaView>
  );
}
