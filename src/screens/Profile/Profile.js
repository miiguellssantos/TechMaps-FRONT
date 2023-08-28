import React, { useContext } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "../../context/AuthContext";

export default function Profile({ navigation }) {
  const { logout } = useContext(AuthContext);

  return (
    <SafeAreaView>
      <Button
        title="< Back"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Text> Hello World</Text>

      <TouchableOpacity
        style={{ padding: 15, alignItems: "center", backgroundColor: "#ACE894", margin: 20, borderRadius: 20 }}
        onPress={() => {
          logout();
        }}
      >
        <Text style={{ fontFamily: "Righteous", color: "#FFF"  }} >SAIR</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
