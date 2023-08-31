import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./style";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const RoadmapItem = () => {
  return (
    <View style={[styles.body, styles.bodyPosition]}>
      <View style={[styles.form, styles.formPosition]} />
      <LinearGradient
        style={[styles.roadmap1, styles.roadmap1Layout]}
        locations={[0, 1]}
        colors={["#53bb5a", "#306b34"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.icon}>
          <Icon name={"language-python"} size={80} color={"#FFF"} />
          <View style={styles.iconChild} />
        </View>
        <View style={[styles.stats, styles.bodyFlexBox]}>
          <Text style={[styles.python101, styles.roadmapsTypo]}>
            PYTHON 101
          </Text>
          <View style={styles.statLine1}>
            <View style={styles.icon}>
              <Icon name={"check-circle-outline"} size={25} color={"#FFF"} />
              <Text style={[styles.text, styles.textTypo]}>12/15</Text>
            </View>
            <View style={styles.timeSpent}>
              <Icon name={"clock-time-nine-outline"} size={25} color={"#FFF"} />
              <Text style={[styles.text, styles.textTypo]}>33”25’</Text>
            </View>
          </View>
          <View style={styles.statLine1}>
            <Icon name={"source-commit"} size={25} color={"#FFF"} />
            <Text style={[styles.text2, styles.textTypo]}>12</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.enter} onPress={() => {}}>
          <Icon
            style={{ alignItems: "flex-end", overflow: "hidden" }}
            name={"location-enter"}
            size={50}
            color={"#FFF"}
          />
        </TouchableOpacity>
      </LinearGradient>

      
    </View>
  );
};

export default RoadmapItem;
