import React,{ useState } from 'react'
import { View, Text, Image, StyleSheet, KeyboardAvoidingView, Dimensions, TouchableOpacity, Alert } from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth';

const { width, height } = Dimensions.get('screen');

export default  function LoginScreen({navigation}){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const UserLogin = async () =>{
        if(!email||!password)
        { Alert.alert("Please fill all the feilds !")
          return 
        }
        try
        {
           await auth().signInWithEmailAndPassword(email,password)
           
        }
        catch(err){
            Alert.alert("Something went wrong.Please try again !")
        }
    }
    

    return (
        <KeyboardAvoidingView behavior="position" style={styles.box}>
            <View style={styles.box1}>
                <Image source={require('../assets/LOGO.png')} style={{width:200, height:200}}/>
                <Text style={styles.text}>Login To Continue !</Text>
            </View>
            <View style={styles.box2}>
                <TextInput
                    style={{marginBottom:10}}
                    label="Email"
                    value={email}
                    mode='outlined'
                    onChangeText={text => setEmail(text)}
                    />
            
                <TextInput
                    label="Password"
                    value={password}
                    mode='outlined'
                    secureTextEntry={true}
                    onChangeText={text => setPassword(text)}
                    />

                <TouchableOpacity onPress={()=>navigation.navigate('ForgotPassword')} style={styles.bx1}>
                    <Text style={styles.text3}>Forgot Password?</Text>
                </TouchableOpacity>
                <Button  mode="contained" onPress={() => UserLogin()}>
                    Login
                </Button>
                <TouchableOpacity onPress={()=>navigation.navigate('SignUp')} style={styles.box1}>
                <Text style={styles.text3}>Don't have an account?Sign Up</Text>
                
                </TouchableOpacity>
                </View>
            
            <View style={styles.box3}>
               <Text style={styles.text1}>OR</Text>
               <Text style={styles.text1}>Login Using</Text>
            </View>

            <View style={{ width: width * 0.9, display: "flex", flexDirection: "row", flexWrap: "wrap", alignContent: "center", alignItems: "center", justifyContent: "center", paddingLeft:40 }}>
               <Image source={require("../assets/google.jpg")}style={{ width: 60, height: 60,margin:10 }} />
               <Image source={require("../assets/facebook.png")}style={{ width: 60, height: 60, margin:10}} />
               <Image source={require("../assets/outlooks.png")}style={{ width: 60, height: 60, margin:10 }} />
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
    bx1:{
        alignItems:'center',
        padding:10,
        margin:5
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
