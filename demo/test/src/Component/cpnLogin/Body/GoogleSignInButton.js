import React, {Component} from 'react'
import {View, Button, Text, StyleSheet, ImageBackground, Image, TouchableOpacity} from 'react-native';

import google_icon from '../../../Icon/google_icon.png';


export default class GoogleSignInButton extends Component {
  render() {
    return (
    <TouchableOpacity onPress={this.props.onPress} style={styles.button}>
        <View>
            <ImageBackground source={google_icon} style={styles.icon}/>
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
        backgroundColor: 'white',
        width: "80%",
        marginTop: 15,
        marginBottom: 15

    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        marginLeft: 40,
    },
    icon: {
        color: "white",
        position: "absolute",
        width : 23,
        height : 23,
        left: -10
    }
})
