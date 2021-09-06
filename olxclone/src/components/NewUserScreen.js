import React,{ useState } from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity, Alert} from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export default function NewUserScreen({navigation}) {

    const [name, setName] = useState('');
    const [cell, setCell] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');

  

    const UserSignup = async () =>{
        try
        {
            if(!email||!password||!name||!cell||!confirmpassword) { 
                Alert.alert("Please fill all the feilds !")
                return 
            } else if(password!=confirmpassword) {
                Alert.alert("Password and Confirm Password do not match !")
                return 
            }
            await auth().createUserWithEmailAndPassword(email,password)
            
        } catch(err) {
            Alert.alert("Something went wrong.Please try again !")
        }
    }
    

    return (
        <KeyboardAvoidingView style={styles.box}>
            <View style={styles.box1}>
               
                <Text style={styles.text}>Sign-Up To Continue !</Text>
            </View>
            <View style={styles.box2}>
                <TextInput
                    label="Name"
                    value={name}
                    mode='outlined'
                    onChangeText={text => setName(text)}
                    />
                <TextInput
                    label="Phone Number"
                    value={cell}
                    mode='outlined'
                    
                    onChangeText={text => setCell(text)}
                    />
                <TextInput
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
            
                <TextInput
                    label="Confirm Password"
                    value={confirmpassword}
                    mode='outlined'
                    secureTextEntry={true}
                    onChangeText={text => setConfirmPassword(text)}
                    />
                <Button  mode="contained" onPress={() => UserSignup()}>
                    Sign Up
                </Button>

                <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={styles.box3}>
                <Text style={styles.text3}>Already have an account?Login</Text>
                </TouchableOpacity>

                </View>
            
            
           
        </KeyboardAvoidingView>
    )

}

const styles=StyleSheet.create({
    box1:{
        alignItems:'center',
        padding:30
    },
    box3:{
        alignItems:'center',
        
    },
    box2:{
        paddingHorizontal:30,
        height:"80%",
        justifyContent:'space-evenly'
    },
   
    text:{
        fontSize:22,
    },
    box:{
        flex:1,
        backgroundColor:'#fff'
    },
    text3:{
        fontSize:20,
       
    },  
      
  });
