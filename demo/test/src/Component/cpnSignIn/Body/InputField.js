import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import COLORS from '../../../Constraint/Color'

const InputField = (props) => {
  return (
    <View style={styles.container}>
      <Icon name={props.icon} size={18} />
      <TextInput placeholder={props.placeholder} value={props.value} onChangeText={props.onChangeText} placeholderTextColor="#151624" />
    </View>
  )
}

export default InputField

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: COLORS.primary,
        width: "80%",
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 4,
        height: 48,
        paddingLeft: 8,
        marginVertical: 10
    }
})