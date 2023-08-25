import { View, Text, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";
import styles from "./style";

const InputField = ({ label, icon, inputType, keyboardType, }) => {
  return (
    <View style={styles.inputView}>
      <Icon name={icon} size={20} color={"#FFF"} />
      <TextInput
        style={styles.input}
        placeholder={label}
        placeholderTextColor={"#FFF"}
        keyboardType={inputType}
      />
    </View>
  );
};

export default InputField;
