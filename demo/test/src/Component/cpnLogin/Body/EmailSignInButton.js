import React, {Component} from 'react'
import {View, Button, Text, StyleSheet, ImageBackground, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import COLORS from '../../../Constraint/Color';


export default class EmailSignInButton extends Component {
  render() {
    return (
    <TouchableOpacity onPress={this.props.onPress} style={styles.button}>
        <View>
            <Icon name = "mail" style={styles.icon} size = {25}/>
            <Text style={styles.buttonText} backgroundColor={this.props.backgroundColor}> {this.props.text} </Text>
        </View>
    </TouchableOpacity>
    )
  }
}


const styles = StyleSheet.create({
    button:{
        borderRadius: 40,
        paddingVertical: 14,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
        width: "80%"
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        marginLeft: 40,
        color: COLORS.white,
    },
    icon: {
        position: "absolute",
        left: -15,
        color: COLORS.white
    }
})
