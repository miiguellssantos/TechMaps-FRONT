import React from "react";
import { View, Button } from "react-native";
import styles from "../Roadmaps/style";
import Header from "../../components/Header";

export default function DashBoard() {
    return (
        <View style={[styles.techmapsRoadmaps, styles.bodySpaceBlock]}>
          <Header title="DASHBOARD" />

        </View>
    
        
      );
}