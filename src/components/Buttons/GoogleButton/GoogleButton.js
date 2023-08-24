import * as React from "react";
import { TouchableOpacity, Image, StyleSheet, Text } from "react-native";
import styles from "./style";

const GoogleButton = () => {
  return (
    <TouchableOpacity style={styles.googleButton}>
      <Image
        style={styles.icon}
        source={require("../../../../assets/googleButton.png")}
      />
      <Text style={styles.googleText}>Google</Text>
    </TouchableOpacity>
  );
};

export default GoogleButton;
