import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import FoodCard from './FoodCard'

export default class MaterialList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FoodCard foodTitle='Bông Artiso' rationValue='2' rationUnit='khẩu phần ăn' foodCal='565.0'/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#F2F2F2',
      alignItems: 'center',
      flex: 1,
      paddingTop: 20
  }
})