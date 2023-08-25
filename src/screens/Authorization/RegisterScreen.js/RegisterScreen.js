import { Text, Image, View, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import styles from "./style";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import InputField from "../../../components/InputField/InputField";

const RegisterScreen = ({ navigation }) => {
  return (
    <LinearGradient
      style={styles.gradient}
      locations={[0, 1]}
      colors={["#306b34", "#ace894"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
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
          <Text style={styles.loginText}>Registre-se</Text>
          <InputField label="Nome de usuário" icon="account" />
          <InputField label="Email" icon="at" inputType="" />
          <InputField label="Senha" icon="lock" />
          <InputField label="Confirme a senha" icon="lock" />

          <TouchableOpacity onPress={() => {}}>
            <LinearGradient
              style={styles.loginButton}
              locations={[0, 1]}
              colors={["#eee5e9", "#A39594"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Text style={styles.loginButtonText}>REGISTRE-SE</Text>
              <Icon name="arrow-right" color={"#FFF"} size={25} />
            </LinearGradient>
          </TouchableOpacity>

          <Text style={styles.textLoginCom}>Ou, registre-se com...</Text>

          <View style={styles.buttons}>
            <TouchableOpacity onPress={() => {}}>
              <View style={styles.googleButton}>
                <Image
                  styles={styles.logo}
                  source={require("../../../../assets/googleButton.png")}
                />
                <Text style={styles.googleText}>Google</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <View style={styles.githubButton}>
                <Image
                  styles={styles.logo}
                  source={require("../../../../assets/githubButton.png")}
                />
                <Text style={styles.githubText}>GitHub</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.registerButton}>
            <Text style={{ color: "#FFF" }}> Já tem uma conta? </Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={{ color: "#eee5e9", fontFamily: "InterBold" }}>
                Faça login.
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default RegisterScreen;
