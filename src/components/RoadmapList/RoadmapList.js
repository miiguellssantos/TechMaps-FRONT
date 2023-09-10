import { View, Text, ScrollView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import RoadmapItem from "../RoadmapItem/RoadmapItem";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const RoadmapList = () => {
  const { dashboardId, userToken } = useContext(AuthContext);
  const [roadmaps, setRoadmaps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(( ) => {
    // Faz a requisição Axios para obter a lista de roadmaps
    axios
      .get(
        `http://192.168.0.102:8080/api/v1/dashboard/${dashboardId}/roadmaps`,
        {
          headers: {
            Authorization: userToken,
          },
        }
      )
      .then((response) => {
        setRoadmaps(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Erro ao buscar a lista de roadmaps:", error);
        setLoading(false);
      });
  }, [dashboardId]);

  if (loading) {
    return(
    <View
      style={{ alignItems: "center", justifyContent: "center", margin: 10 }}
    >
      <Text style={{ color: "#FFF", textAlign: "center" }}>Carregando...</Text>
    </View>
    );
  }

  return (
    <View>
      <ScrollView>
        {roadmaps.map((roadmap) => (
          <RoadmapItem
            roadmapTitle={roadmap.roadmapTitle}
            timeSpent={roadmap.timeSpent}
            commitsQuantity={roadmap.totalCommits}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default RoadmapList;
