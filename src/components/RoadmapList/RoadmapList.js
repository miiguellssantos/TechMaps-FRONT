import { View, Text, ScrollView } from "react-native";
import React from "react";
import RoadmapItem from "../RoadmapItem/RoadmapItem";

const RoadmapList = () => {
  return (
    <View>
      <ScrollView>
        <RoadmapItem />
        <RoadmapItem />
      </ScrollView>
    </View>
  );
};

export default RoadmapList;
