import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import COLORS from '../../../Constraint/Color';
import {Searchbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

const SearchMaterial = props => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: '100%',
        padding: 12,
      }}>
      <View style={{width: '100%', flexDirection: 'row'}}>
        <Searchbar
          style={styles.searchBar}
          placeholder="Tìm kiếm..."
          inputStyle={styles.textSearchBar}></Searchbar>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AddMaterial');
            // console.log(props.tab);
          }}
          style={styles.addButton}>
          <Icon name="plus" size={28} color={'#58C1C9'} style={{}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SearchMaterial;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    justifyContent: 'flex-end',
    paddingBottom: 15,
  },
  titleText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',

    marginLeft: 15,
    marginBottom: 15,
    marginTop: 80,
  },
  buttonList: {
    flexDirection: 'row',
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
    marginLeft: '4%',
  },
});
