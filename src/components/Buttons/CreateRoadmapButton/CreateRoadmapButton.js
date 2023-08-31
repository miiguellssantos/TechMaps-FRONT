import { View } from 'react-native'
import React from 'react'
import styles from './style'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const CreateRoadmapButton = () => {
  return (
    <View style={[styles.btnCriarRoadmap, styles.bodyPosition]}>
        <Icon name={"plus-circle"} color={"#FFF"} size={25} />
        <View style={styles.novoRoadmap} />
    </View>
  )
}

export default CreateRoadmapButton