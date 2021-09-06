
import React ,{useEffect,useState}from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import { NavigationContainer , DefaultTheme as DefaultThemenav} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth'
import LoginScreen from './components/LoginScreen';
import NewUserScreen from './components/NewUserScreen';
import CreateAdScreen from './components/CreateAdScreen';
import ListAdScreen from './components/ListAdScreen';
import AccountScreen from './components/AccountScreen';
import ForgotPasswordScreen from './components/ForgotPasswordScreen'
import OtpScreen from './components/OtpScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AuthNavigator = () =>{
  return(
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
      <Stack.Screen name="SignUp" component={NewUserScreen} options={{headerShown:false}} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{headerShown:false}} />
      <Stack.Screen name="Verify Otp" component={OtpScreen} options={{headerShown:false}} />
    </Stack.Navigator>
  )
}

const TabNavigator = () =>{
  return(
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({color}) => {
        let iconName;

        if (route.name === 'Home') {
          iconName='home'
        } 
        else if(route.name === 'Create Ads'){
          iconName='plus-circle'
        }
        else if(route.name === 'Account'){
          iconName='user'
        }
        return  <Feather  style={{paddingTop:6}} name={iconName} size={30} color={color} /> 
          
      },
      tabBarActiveTintColor: 'green',
      tabBarInactiveTintColor: 'gray',
    })}>
      <Tab.Screen name="Home" component={ListAdScreen} options={{title:""}}/>
      <Tab.Screen name="Create Ads" component={CreateAdScreen} options={{title:""}} />
      <Tab.Screen name="Account" component={AccountScreen} options={{title:""}} />
    </Tab.Navigator>
  )
}

const Navigation = () =>{
  const [user,setUser] = useState('')
  useEffect(()=>{
    const unsubscribe = auth().onAuthStateChanged((userExist)=>{
      if(userExist){
        setUser(userExist)
      }else{
        setUser('')
      }
    })
    return unsubscribe
  },[])
  return(
  <NavigationContainer theme={Mytheme}>
    {user?<TabNavigator/>:<AuthNavigator/>}
  </NavigationContainer>
  )
}


const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'green',
    
  },
};

const Mytheme = {
  ...DefaultThemenav,
  colors: {
    ...DefaultThemenav.colors,
    backgroundColor: '#fff',
    
  },
};



const App = ()=>{
  return(
    <>
    <PaperProvider theme={theme}>
    <StatusBar barStyle="dark-content" backgroundColor="green"/>
    <View style={styles.container}>
      {/* <LoginScreen/> */}
      {/* <NewUserScreen/> */}
      {/* <CreateAdScreen/> */}
      {/* <ListAdScreen/> */}
      <Navigation/>
    </View>
    </PaperProvider>
    </>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff'
  }
});
export default App;
