import React,{useState} from 'react'
import { View, Text, Image, StyleSheet, KeyboardAvoidingView, Dimensions, TouchableOpacity, Alert } from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth';

const { width, height } = Dimensions.get('screen');

export default  function ForgotPasswordScreen({navigation}){

    const [email, setEmail] = useState('');
    const UserLogin = async () =>{
        if(!email)
        { Alert.alert("Please fill all the feilds !")
          return 
        }
        else{
           
        }
    }
    

    return (
        <KeyboardAvoidingView behavior="position" style={styles.box}>
            <View style={styles.box1}>
                <Image source={require('../assets/LOGO.png')} style={{width:200, height:200}}/>
                <Text style={styles.text}>Enter the registered email id to recieve the otp !</Text>
            </View>
            <View style={styles.box2}>
                <TextInput
                    label="Email"
                    value={email}
                    mode='outlined'
                    onChangeText={text => setEmail(text)}
                    />
                <Button  mode="contained" onPress={()=>navigation.navigate('Verify Otp')}>
                    Login
                </Button>
               
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
        height:"35%",
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
