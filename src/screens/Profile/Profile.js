import React from "react";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile({ navigation }) {
  return (
    <SafeAreaView>
      <Button
        title="< Back"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Text> Hello World</Text>
    </SafeAreaView>
  );
}