import React from "react";
import { View, Button, Text } from "react-native";
import styles from "../Roadmaps/style";
import Header from "../../components/Header";
import Dashboard from "../../components/Dashboard"

export default function DashBoard() {
    return (
        <View style={[styles.techmapsRoadmaps, styles.bodySpaceBlock]}>
          <Header title="DASHBOARD" />
          <Dashboard />
        </View>
    
        
      );
}




