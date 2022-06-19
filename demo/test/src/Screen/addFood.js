import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import COLORS from '../Constraint/Color'
import { TextInput } from 'react-native-gesture-handler'
import  Icon  from 'react-native-vector-icons/Ionicons'

export default class AddFood extends Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.header}>
                    <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}> Tạo món ăn mới</Text>
                </View>

                <View style={styles.body}>

                    <Text style={{marginVertical: 5, color: COLORS.grey, fontSize: 14}}> Tên món ăn </Text>
                    <View style={styles.inputContainer} >
                        <Icon name='fast-food-outline' style={{fontSize: 22, marginRight: 5}} />
                        <TextInput placeholder='Hãy nhập tên món ăn' placeholderTextColor={"#151624"} underlineColorAndroid='transparent' />
                    </View>

                    <TouchableOpacity style={styles.btnContainer}>
                        <Icon name='add' size={20}/>
                        <Text>Thêm thực phẩm</Text>
                    </TouchableOpacity>

                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        backgroundColor: COLORS.primary,
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    body: {
        backgroundColor: '#F2F2F2',
        flex: 0.8,
        paddingLeft: 15,
        paddingTop: 15
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        backgroundColor: 'white',
        borderWidth: 1.5,
        borderColor: COLORS.primary,
        borderRadius: 6,
        height: 55,
        paddingLeft: 10

    },
    btnContainer: {
        marginTop: 20,
        alignSelf: 'center',
        backgroundColor: COLORS.primary,
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center'
    }
})