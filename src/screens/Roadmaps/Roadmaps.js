import { Text, View, Button } from "react-native";
import React from "react";
import styles from "./style";
import Header from "../../components/Header/index";

export default function Roadmaps() {
  return (
    <View style={[styles.techmapsRoadmaps, styles.bodySpaceBlock]}>
      <Header title="ROADMAPS" />
    </View>

    
  );
}
