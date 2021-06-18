import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import NavigationBar from 'react-native-navigation-bar';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useForm } from "react-hook-form";


import { StatusBar } from 'expo-status-bar';
//import React from 'react';
import { StyleSheet, Text, View, Image,SafeAreaView, TouchableWithoutFeedback, Button, Alert, ImageBackground, TouchableHighlight,
  TextInput, TouchableOpacity, ScrollView } from 'react-native';
import WelcomeScreen from "./app/screens/WelcomeScreen";
import LoggedInScreen from './app/screens/LoggedInScreen';
//import SignUpScreen from './app/screens/SignUpPage';
import RegisterForm from './app/screens/firstForm';
import SignUpScreen1 from './app/screens/SignUpPage';

//import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
      {/* <Tab.Screen name="LoggedIn" component={LoggedInScreen} /> */}
      Tab={(props) => <CustomTabBar {...props} />}
      <Tab.Screen
        name={"LoggedIn"}
        component={LoggedInScreen}
        options={{ tabBarLabel: "New"}}/>
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
     <Stack.Screen name="Home" component={WelcomeScreen} options={{headerShown: false,}} />       
     <Stack.Screen name="LoggedIn" component={LoggedInScreen} options={{headerShown: false,}} />
     <Stack.Screen name="SignUp" component={SignUpScreen1} options={{headerShown: false,}} />
     <Stack.Screen name="form1" component={RegisterForm} options={{headerShown: false,}} />
   </Stack.Navigator>
 </NavigationContainer>
  );
}


