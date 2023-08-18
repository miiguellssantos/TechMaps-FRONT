import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { View, Text, Pressable } from "react-native";
import styles from "../Roadmaps/style";
import Dashboard from "../../components/Dashboard"

export default function DashBoard({ navigation }) {
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
          <Text style={styles.roadmaps}>DASHBOARD</Text>
        </View>

        <Pressable style={styles.gearsixFlexBox} onPress={() => navigation.navigate("SettingsPage")}>
          <Icon name={"cog-outline"} size={40} color={"#306B34"} />
        </Pressable>
      </View>
          <Dashboard />
        </SafeAreaView>
    
        
      );
}




