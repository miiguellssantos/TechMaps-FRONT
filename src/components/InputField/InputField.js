import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";
import styles from "./style";

const InputField = ({
  label,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
}) => {
  return (
    <View style={styles.inputView}>
      <Icon name={icon} size={20} color={"#FFF"} />
      {inputType == "password" ? (
        <TextInput
          style={styles.input}
          placeholder={label}
          placeholderTextColor={"#FFF"}
          secureTextEntry={true}
        />
      ) : (
        <TextInput
          style={styles.input}
          placeholder={label}
          keyboardType={keyboardType}
          placeholderTextColor={"#FFF"}
        />
      )}
    </View>
  );
};

export default InputField;
