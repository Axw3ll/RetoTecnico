import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import DrawerNavigation from './Navigation/DrawerNavigation';
import {NavigationContainer} from '@react-navigation/native'; 
import React from 'react';

export default function App() {
  return (
    <>
      <NavigationContainer 
       theme={{colors:{
        background:'#162238',
    }}}>
        <DrawerNavigation/>
      </NavigationContainer>
    <StatusBar style="auto" />
    </>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#162238',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
