import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useFonts } from 'expo-font';

const OnBoardingScreen = () => {
    const [loaded] = useFonts({
        Righteous: require('../../assets/fonts/Righteous-Regular.ttf'),
      });
    
      if (!loaded) {
        return null;
      }
  
    return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
      <View>
        <Text style={{ fontFamily: 'Righteous', fontSize: 30, fontWeight: 'bold', color: '#ACE894', marginTop: 25 }} >TECHMAPS</Text>
      </View>

        <View>
            <Text>
                Era pra ter um texto legal aqui.
            </Text>
        </View>

      <TouchableOpacity style={{ backgroundColor: '#ACE984', padding: 20, width: '90%', borderRadius: 5, flexDirection: 'row', justifyContent: "space-between", marginBottom: 25 }}> 
        <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#fff' }}>Começar</Text>
        <Icon name={"arrow-right"} size={22} color={"#306B34"} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OnBoardingScreen;
