import { Text, View, Pressable, Image } from "react-native";
import React from "react";
import styles from "./style";

export default function Header({ title }) {
  return (
    <View style={styles.header}>
      <Pressable
        style={[styles.userIcon, styles.gearsixFlexBox]}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          style={styles.userVectorIcon}
          source={require("./assets/profileIcon.png")}
        />
      </Pressable>

      <View style={styles.title}>
        <Text style={styles.roadmaps}>{title}</Text>
      </View>

      <Pressable style={styles.gearsixFlexBox} onPress={() => {}}>
        <Image
          style={styles.gearVectorIcon}
          source={require("./assets/gear.png")}
        />
      </Pressable>
    </View>
  );
}
