import React from "react";
import { Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./style";

export default function Profile({ navigation }) {

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
    </SafeAreaView>
  );
}
