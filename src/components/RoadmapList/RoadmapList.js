import React, { useContext, useEffect, useState } from "react";
import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import RoadmapItem from "../RoadmapItem/RoadmapItem";

const API_URL = "http://10.115.71.51:8080";

const RoadmapList = () => {
  const { dashboardId, userToken } = useContext(AuthContext);
  const [roadmaps, setRoadmaps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const response = axios.get(
        `${API_URL}/api/v1/dashboards/${dashboardId}/roadmaps`,
        {
          headers: {
            Authorization: userToken,
          },
        }
      );
      const body = response.data
      console.log(body)
      setRoadmaps(body);
    } catch (error) {
      console.error("Erro ao buscar a lista de roadmaps:", error);
    } finally {
      setLoading(false);
    }
  }, [dashboardId, userToken]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="small" color="#FFF" />
        <Text style={styles.loadingText}>Carregando...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      {
        roadmaps.map((roadmap) => (
          <RoadmapItem key={roadmap.id} roadmap={roadmap} />
        ))
      }
    </ScrollView>
  );
};

const styles = {
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  loadingText: {
    color: "#FFF",
    textAlign: "center",
    marginTop: 10,
  },
  noRoadmapsContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  noRoadmapsText: {
    color: "#FFF", // Defina a cor desejada para o texto
    fontSize: 15, // Defina o tamanho de fonte desejado
    textAlign: "center",
  },
};

export default RoadmapList;
