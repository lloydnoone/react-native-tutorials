import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {
  const greeting = <Text>{greeting}</Text>
  const name = 'Lloyd'

  return (
    <View>
      <Text style={styles.headerStyle}>Getting Started with React Native</Text>
      <Text style={styles.subHeaderStyle}>My name is {name}</Text>
      {greeting}
    </View>
  )
}

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 45
  },
  subHeaderStyle: {
    fontSize: 20
  }
})

export default ComponentsScreen