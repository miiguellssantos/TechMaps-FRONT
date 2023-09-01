import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import ConcludedRoadmap from '../ConcludedRoadmap/ConcludedRoadmap'

const ConcludedRoadmapList = () => {
  return (
    <View>
      <ConcludedRoadmap roadmapTitle={"JAVA 101"} timeSpent={`33"25'`} commitCounter={"12"} />
    </View>
  )
}

export default ConcludedRoadmapList