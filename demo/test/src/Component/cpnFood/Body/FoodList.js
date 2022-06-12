import { Text, StyleSheet, View, ScrollView } from 'react-native'
import React, { Component } from 'react'
import FoodCard from './FoodCard'

export default class FoodList extends Component {
  render() {
    return (
      <View style={styles.container}>

        <FoodCard foodTitle='Cơm gà' rationValue='1' rationUnit='khẩu phần ăn' foodCal='300'/>

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