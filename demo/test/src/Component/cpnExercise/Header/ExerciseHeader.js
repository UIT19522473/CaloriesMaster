import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import COLORS from '../../../Constraint/Color'
import { Searchbar } from 'react-native-paper'
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons'

export default class ExerciseHeader extends Component {
  render() {
    return (
      <View  style={styles.container}>

        <Searchbar style={styles.searchBar} placeholder='Tìm bài tập . . .' inputStyle={{fontSize: 15}}/>


        <TouchableOpacity style={styles.addExerciseContainer}>
          
            <Icon name='fire' size={25} style={styles.icon}/>
            <Text style={styles.buttonText}> Thêm bài tập </Text>

        </TouchableOpacity>

        
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primary,
        flex: 1,
        justifyContent: 'flex-end',
        paddingLeft: 25,
        paddingBottom: 23
        
    },
    searchBar: {
        width: '90%',
        borderRadius: 30,
        height: '20%',
    },
    addExerciseContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30
    },
    icon: {
      color: 'white'
    },
    buttonText: {
      color: 'white',
      fontSize: 17
    }
})