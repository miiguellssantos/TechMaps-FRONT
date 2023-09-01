import React, { useContext } from "react";
import { View, Text, Button, TouchableOpacity, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "../../context/AuthContext";
import styles from "./style";

const SettingsPage = ({ navigation }) => {
  const { logout } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.body}>
      <Pressable
        style={{
          backgroundColor: "#ACE894",
          padding: 10,
          width:71,
          marginLeft: 10,
          marginVertical: 10,
          borderRadius: 10,
          flexDirection: "row"
        }}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text style={{ fontFamily: "Righteous", color: "#306B34", flex: 1}} >{`< Voltar`}</Text>
      </Pressable>

      <TouchableOpacity
        style={{
          padding: 15,
          alignItems: "center",
          backgroundColor: "red",
          margin: 20,
          borderRadius: 20,
        }}
        onPress={() => {
          logout();
        }}
      >
        <Text style={{ fontFamily: "Righteous", color: "#FFF" }}>SAIR</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SettingsPage;
