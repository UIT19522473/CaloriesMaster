import React, {Component} from 'react'
import {View, Button, Text, StyleSheet, ImageBackground, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class SignInButton extends Component {
  render() {
    return (
    <TouchableOpacity onPress={this.props.onPress} style ={styles.button} >
        <View>
            <Icon name="facebook" style={styles.icon} size = {23}></Icon>
            <Text style={styles.buttonText}> {this.props.text} </Text>
        </View>
    </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    button:{
        borderRadius: 40,
        paddingVertical: 14,
        backgroundColor: '#0165E1',
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        color: 'white',
        marginLeft: 15
    },
    icon: {
        color: "white",
        position: "absolute",
        left: -5
    }
})
