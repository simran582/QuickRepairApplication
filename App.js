import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, StackActions, ThemeProvider } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerContent from './App/Layout/DrawerContent';
import HomeScreen from './App/Screens/HomeScreen';
import WelcomeScreen from './App/Screens/WelcomeScreen';
import color from './App/config/color';
import ServiceDetail from './App/Screens/Services/ServiceDetail';
import Registration from './App/Screens/Registration';
import DetailsScreen from './App/Screens/Services/DetailsScreen';
import Login from './App/Screens/Login';
import { EventRegister } from 'react-native-event-listeners';
import themeContext from './App/config/themeContext';
import theme from './App/config/theme';
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator  
      initialRouteName="WelcomeScreen" 
      screenOptions={{
            headerShown: false,
            }}>
        <Stack.Screen name="HomeScreen" component={DrawerRoute} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="ServiceDetail" component={ServiceDetail} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
      </Stack.Navigator>
      </NavigationContainer>
      
  );
}

function DrawerRoute(){
  const Drawer = createDrawerNavigator();
  return (
    <View style={styles.container}>
      <Drawer.Navigator useLegacyImplementation={true} drawerContent = {props => <DrawerContent {...props}/>}>
        <Drawer.Screen name="Home" component={HomeScreen}
         options={{
          title: "Quick Repair Services",

          headerStyle: {
            backgroundColor: color.green,
          },
          headerTintColor: color.white,
          headerTitleAlign: "center",
        }}
         />
         {/* <Drawer.Screen name="Sign Out" component={WelcomeScreen} /> */}
      </Drawer.Navigator>
</View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent:"center",
    // alignItems:"center",
    
  },
});
