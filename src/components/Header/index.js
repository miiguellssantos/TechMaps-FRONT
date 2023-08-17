import { Text, View, Pressable, Image } from "react-native";
import React from "react";
import styles from "./style";
import Icon  from "react-native-vector-icons/MaterialCommunityIcons";

export default function Header({ title }) {
  return (
    <View style={styles.header}>
      <Pressable
        style={[styles.userIcon, styles.gearsixFlexBox]}
        onPress={() => navigation.navigate("Profile")}
      >
        <Icon name={"account-circle-outline"} size={45} color={"#306B34"} />
      </Pressable>

      <View style={styles.title}>
        <Text style={styles.roadmaps}>{title}</Text>
      </View>

      <Pressable style={styles.gearsixFlexBox} onPress={() => {}}>
      <Icon name={"cog-outline"} size={40} color={"#306B34"} />
      </Pressable>
    </View>
  );
}
