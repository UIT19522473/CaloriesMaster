import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import COLORS from '../../../Constraint/Color';
import { TextInput } from 'react-native-gesture-handler';
import { background_image } from '../../../Image/healthy.png'

const SignInHeader = (props) => {
  return (
    <View style={styles.container}>
      {/* <ImageBackground
      source={background_image} style={styles.image}/> */}
      <Text style={styles.headerText}> {props.titleHeader} </Text>
    </View>
  )
}

export default SignInHeader

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary
    },
    headerText: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'Roboto'
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center'
    }

})