import { View, Text, ScrollView } from "react-native";
import React from "react";
import RoadmapItem from "../RoadmapItem/RoadmapItem";

const RoadmapList = () => {
  return (
    <View>
      <ScrollView>
        <RoadmapItem
          roadmapTitle={"PYTHON 101"}
          completedTasks={"12"}
          totalTasks={"15"}
          timeSpent={`33"25'`}
          commitsQuantity={"25"}
        />
      </ScrollView>
    </View>
  );
};

export default RoadmapList;
