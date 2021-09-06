import React,{ useState } from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView, Alert} from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


// const usersCollection = firestore().collection('Users');
export default function CreateAdScreen() {

    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [year, setYear] = useState('');
    const [price, setPrice] = useState('');
    const [contact, setContact] = useState('');

    const choice =()=>{
        Alert.alert(  
              'User Choice',
            'Choose between the two to upload image',  
            [  
                {  
                    text: 'Open Camera',  
                    onPress: () => openCamera(),  
                     
                },  
                {
                    text: 'Gallery', 
                    onPress: () => openImage()
                },  
            ]  
        );  
    } 


    const postData=async()=>{
        try{
         await firestore().collection('Ads').add({
            name,
            desc,
            year,
            price,
            contact,
            image:"https://images.unsplash.com/photo-1553179459-4514c0f52f41?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNhbXN1bmclMjBnYWxheHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            uid:auth().currentUser.uid,
        })
        Alert.alert("Advertisement Posted")
    }
        catch(err){
            Alert.alert("Something went wrong.Please try later.")
        }
    }

    const openCamera = ()=>{
        launchCamera({quality:0.5},(fileobj)=>{
            console.log(fileobj)
        })   
    }

    const openImage = ()=>{
        launchImageLibrary({quality:0.5,selectionLimit:1,mediaType:'photo'},(fileobj)=>{
            console.log(fileobj)
        })   
    }

    return (
        <KeyboardAvoidingView behavior="height" style={styles.box}>
            <View style={styles.box1}>
               
                <Text style={styles.text}>Create Advertisment</Text>
            </View>
            <View style={styles.box2}>
                <TextInput
                    label="Product Name"
                    value={name}
                    mode='outlined'
                    onChangeText={text => setName(text)}
                    />
                <TextInput
                    label="Year Of Purchase"
                    value={year}
                    mode='outlined'
                    
                    onChangeText={text => setYear(text)}
                    />
                <TextInput
                    label="Price"
                    value={price}
                    mode='outlined'
                    onChangeText={text => setPrice(text)}
                    />
                <TextInput
                    label="Phone Number"
                    value={contact}
                    keyboardType="numeric"
                    mode='outlined'
                    onChangeText={text => setContact(text)}
                    />
            
                <TextInput
                    label="Product Description"
                    value={desc}
                    mode='outlined'
                    numberOfLines={5}
                    multiline={true}
                    onChangeText={text => setDesc(text)}
                    />
                <Button   icon="camera" mode="contained" onPress={() => choice()}>
                    Upload Images
                </Button>
                <Button    mode="contained" onPress={() => postData()}>
                    Create Ad
                </Button>
                </View>
            
            
           
        </KeyboardAvoidingView>
    )

}

const styles=StyleSheet.create({
    box1:{
        alignItems:'center',
        paddingHorizontal:30
    },
    box2:{
        paddingHorizontal:30,
        height:"85%",
        justifyContent:'space-evenly'
    },
   
    text:{
        fontSize:22,
    },
    box:{
        flex:1,
        backgroundColor:'#fff'
    },
      
  });