import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
  const friends = [
    { name: 'Joey' },
    { name: 'Chandler' },
    { name: 'Ross' },
    { name: 'Monica' },
    { name: 'Racheal' },
    { name: 'Pheobe' }
  ]

  return (
    <FlatList
      data={friends} 
      renderItem={({ item }) => {
        return <Text>{item.name}</Text>
      }}
    />
  )
}


const styles = StyleSheet.create({})


export default ListScreen