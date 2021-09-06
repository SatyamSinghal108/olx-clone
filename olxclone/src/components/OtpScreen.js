import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, KeyboardAvoidingView, Dimensions, TouchableOpacity, Alert } from 'react-native'
import { TextInput, Button } from 'react-native-paper';


export default function OtpScreen({navigation}) {
    const [otp,setOtp]=useState('')
    const [pass,setPass]=useState('')
    const [conf,setConf]=useState('')
    return (
        <KeyboardAvoidingView behavior="position" style={styles.box}>
            <View style={styles.box1}>
                <Image source={require('../assets/LOGO.png')} style={{width:200, height:200}}/>
                <Text style={styles.text}>Enter the otp recieved on your registered mail id !</Text>
            </View>
            <View style={styles.box2}>
                <TextInput
                    label="Enter OTP"
                    value={otp}
                    mode='outlined'
                    onChangeText={text => setOtp(text)}
                    />
                <Button  mode="contained">
                    Verify OTP
                </Button>
                 
                <View >
                    <TextInput
                    label="Password"
                    value={pass}
                    mode='outlined'
                    onChangeText={text => setPass(text)}
                    />

                    <TextInput
                    label="Confirm Password"
                    value={conf}
                    mode='outlined'
                    onChangeText={text => setConf(text)}
                    />
                    <Button style={{marginTop:10}} mode="contained" onPress={()=>navigation.navigate('Login')}>
                    Change Password
                    </Button>
                </View>
               
            </View>
        </KeyboardAvoidingView>
    )
}

const styles=StyleSheet.create({
    box:{
        flex:1,
        backgroundColor:'#fff'
    },
    box1:{
        alignItems:'center',
        padding:10
    },
    box2:{
        paddingHorizontal:30,
        height:"50%",
        justifyContent:'space-evenly'
    },
   
    box3:{
        alignItems:'center'
    },
    text:{
        fontSize:22,
    },
    text1:{
        fontSize:20,
        fontWeight:'bold'
    },
    text3:{
        fontSize:20,
       
    },    
  });