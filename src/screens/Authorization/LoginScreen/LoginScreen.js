import { Text, Image, View, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import styles from "./style";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const LoginScreen = () => {
  return (
    <LinearGradient
      style={styles.gradient}
      locations={[0, 1]}
      colors={["#306b34", "#ace894"]}
      useAngle={true}
      angle={168.55}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Image
            style={styles.logoImage}
            source={require("../../../../assets/logo-white-no-background.png")}
          />
          <Text style={styles.headerText}>{`A JORNADA\nCOMEÇA AQUI`}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.loginText}>Login</Text>
          <View style={styles.inputView}>
            <Icon name={"at"} size={20} color={"#FFF"} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor={"#FFF"}
              keyboardType="email-address"
            />
          </View>
          <View style={styles.inputView}>
            <Icon name={"lock"} size={20} color={"#FFF"} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor={"#FFF"}
              secureTextEntry={true}
            />
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LoginScreen;
