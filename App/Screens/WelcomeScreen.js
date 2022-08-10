import React from 'react';
import {StyleSheet , View, Image, Text} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AppButton from '../Components/AppButton';
import color from '../config/color';
import Divider from "react-native-divider";
import { useNavigation } from "@react-navigation/native";
import Login from './Login';
import Registration from './Registration';


function WelcomeScreen(props) {
    const navigation = useNavigation();

    return (
        <View style={styles.background}>
            {/* <View style={styles.logoContainer}> */}
                <Image style={styles.logo} source={require('../assets/logo.jpeg')} />
            <Divider orientation="center">
                <Text style={styles.welcome}>Welcome</Text>
            </Divider>
            {/* </View>    */}
            
        <View style={styles.text1}>
        <Text style={styles.text}>Quick Repair Services</Text> 
        </View>
         <View style={styles.ButtonContainer}>
        
         <AppButton title="Login" onPress={() => {
            props.navigation.navigate("Login");
               }} />
        
            {/* <MaterialCommunityIcons name="login-variant" size={35} color="white" style={styles.icon} /></AppButton> */}
         <AppButton title="SignUp" onPress={() => {
            props.navigation.navigate("Registration");
         }} />
        </View>  
         </View> 
    );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    background:{
        flex: 1,
        // backgroundColor: color.black,
        alignItems: 'center',
         justifyContent: 'flex-end',
         backgroundColor: color.white,
    },
    logo: {
        position: 'absolute',
        top: 90,
        width: 300,
        height: 300,
        justifyContent: 'center',
        alignSelf: 'center',
        resizeMode: "cover",
    },
    logoContainer : {
        position: 'absolute',
        top: 70,
        // shadowOffset: {width: 10, height: 10},
        // shadowOpacity: 1,
        // borderWidth: 2,
        // borderRadius: 2,  
    },
    text: {
        color: 'black',
       fontWeight: 'bold',
       fontSize: 20,
    },
    ButtonContainer: {
        padding: 20,
        width: "100%",
    },
    text1 : {
        justifyContent: 'center',
    },
    welcome: {
        fontSize: 20,
        fontWeight: "bold",
        textAlignVertical: 'center',
    
    },
   
    
})
