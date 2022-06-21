import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import SignInHeader from '../Component/cpnSignIn/Header/SignInHeader'
import InputField from '../Component/cpnSignIn/Body/InputField'
import { useNavigation } from '@react-navigation/native'
import { auth } from '../FirebaseConfig'
import COLORS from '../Constraint/Color'
import { Icon } from 'react-native-vector-icons/MaterialIcons'

const SignIn = (props) => {
    const navigation = useNavigation();
    return (

        <View style={styles.container}>

            <View style={styles.header}>
                <SignInHeader titleHeader='Đăng nhập với Email'/>
            </View>

            <View style={styles.body}>

                <InputField placeholder='Nhập vào Email' icon={'email-outline'} />
                <InputField placeholder='Nhập vào mật khẩu' icon={'lock-outline'} />

                <View style={{flexDirection: 'row', marginBottom: 10}} >
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('SignUp');
                    }}>
                        <Text>Bạn chưa có tài khoản? Đăng ký ngay </Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.signInButton}>
                    <Text style={{ color: 'white' }}>Đăng nhập </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flex: 0.2
    },
    body: {
        paddingVertical: 20,
        flex: 0.8,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    signInButton: {
        backgroundColor: COLORS.primary,
        width: '50%',
        height: '7%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginTop: 30
    }
})