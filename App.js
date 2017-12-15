import React from 'react'
import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import AddEntry from './components/AddEntry'

export default class App extends React.Component {
  render() {
    return (
      <View >
        <AddEntry />
        <Ionicons name="ios-pizza" color="red" size={100} />
      </View>
    )
  }
}



