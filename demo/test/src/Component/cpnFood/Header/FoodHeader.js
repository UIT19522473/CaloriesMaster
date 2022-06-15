import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import COLORS from '../../../Constraint/Color'
import { Searchbar } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Feather'

export default class FoodHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Món ăn của riêng bạn</Text>
        <View style={styles.buttonList}>
          <Searchbar style={styles.searchBar} placeholder="Tìm kiếm..." inputStyle={styles.textSearchBar}></Searchbar>
          <TouchableOpacity style={styles.addButton}>
            <Icon name='plus' size={35} color={'#58C1C9'} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    justifyContent: 'flex-end',
    paddingBottom: 15

  },
  titleText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',

    marginLeft: 15,
    marginBottom: 15,
  },
  buttonList: {
    flexDirection: 'row'
  },
  searchBar: {
    marginLeft: 15,
    width: '75%',
    borderRadius: 40,
    height: 53,


  },
  textSearchBar: {
    fontSize: 15,
  },
  addButton: {
    width: 53,
    height: 53,
    borderRadius: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: "4%"
  }

})