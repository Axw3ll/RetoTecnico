import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
<Drawer.Navigator
    screenOptions={{
        headerShown:false
    }}
    initialRouteName='Home'
    drawerStyle={{ backgroundColor: 'white' }}
    sceneContainerStyle={{ backgroundColor: 'white' }}
>
    <Drawer.Screen name="Home" component={HomeScreen} options={{drawerStyle:{ backgroundColor: 'white' }}} />
    <Drawer.Screen name="Profile" component={ProfileScreen}  options={{drawerStyle:{ backgroundColor: 'white' }}}/>
  </Drawer.Navigator>

    )
}

export default DrawerNavigation