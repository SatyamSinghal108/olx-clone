import auth from '@react-native-firebase/auth'
import React,{useEffect,useState} from 'react'
import { View, Text, FlatList, StyleSheet,Linking,Platform } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';

export default function AccountScreen ()  {
    const [items,setItem]=useState([])
   
    const getDetails = async()=>{
       const querySnap = await firestore().collection('newuser').get()
       const results = querySnap.docs.map(docSnap=>docSnap.data())
       console.log(results)
       setItem(results)
    }
    useEffect(()=>{
        getDetails()
        return ()=>{
            console.log("cleanup")
        }
    },[])

    const renderItem = (item)=>{
        return(
            <Card style={styles.card}>
                 <Card.Content>
                 <Title>User Details</Title>
                 <Paragraph>Name: {item.Name}</Paragraph>
                  <Paragraph>Contact No: {item.cell}</Paragraph>
                  <Paragraph>Email ID: {item.email}</Paragraph>
                 </Card.Content>
            </Card>
        )
    }
    return (
        <View>
            <FlatList style={styles.box}
                data={items}
                renderItem={({item})=>renderItem(item)}>
            </FlatList>
            <Button  mode="contained" onPress={() => auth().signOut()}>
                    Logout
                </Button>
        </View>
    )
}


const styles=StyleSheet.create({
    card:{
      margin:10,
      elevation:5,
    },
    box:{
        flex:1,
        backgroundColor:'#fff'
    },
  });


