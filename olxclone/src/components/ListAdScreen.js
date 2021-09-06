import React,{useEffect,useState} from 'react'
import { View, Text, FlatList, StyleSheet,Linking,Platform } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';


export default function ListAdScreen() {
    const [items,setItem]=useState([])
   
    const setDial = (contact)=>{
        if(Platform.OS==='android'){
            Linking.openURL(`tel:${contact}`)
        }
        else {
            Linking.openURL(`telprompt:${contact}`)
        }
    }

    const getDetails = async()=>{
       const querySnap = await firestore().collection('Ads').get()
       const results = querySnap.docs.map(docSnap=>docSnap.data())
       //console.log(results)
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
                     <Card.Cover source={{ uri: item.image }} />
                     <Card.Content>
                     <Title>{item.name}</Title>
                      <Paragraph>{item.desc}</Paragraph>
                      <Paragraph>Purchase Year - {item.year}</Paragraph>
                     </Card.Content>
                     <Card.Actions>
                      <Button>{item.price}</Button>
                      <Button onPress={()=>setDial()}>Contact Seller</Button>
                     </Card.Actions>
                </Card>
            )
        }
        
    
    return (
        <View style={styles.box}> 
            <FlatList
                data={items}
                keyExtractor={(item)=>item.contact}
                renderItem={({item})=>renderItem(item)}
            />
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