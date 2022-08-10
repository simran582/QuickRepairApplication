import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import AppTextInput from '../Components/AppTextInput';
import Divider from "react-native-divider";
import AppButton from '../Components/AppButton';
import color from '../config/color';
import ErrorMessage from '../Components/ErrorMessage';
import {Formik} from 'formik';
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    email : Yup.string().required().email().label("Email"),
    password : Yup.string().required().min(6).label("Password"),
})

function Login() {

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                alt="pic.png"
                source={require('../assets/logo.jpeg')}
                resizeMode="cover"
            />
            <Text style={styles.text}>Quick Repair Services For Home</Text>
            <Divider orientation="center">
                <Text style={styles.login}>Login</Text>
            </Divider>

            <Formik
            initialValues={{email: "" , password: ""}}
            onSubmit={values => console.log(values)}
            validationSchema={validationSchema}
            >
                { ( { handleChange, handleSubmit, errors , setFieldTouched, touched }) => (
                  <>
                    <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="email"
                keyboardType="email-address"
                onBlur = {() => setFieldTouched("email")}
                onChange={handleChange("email")}
                placeholder="Email"
                textContentType="emailAddress"
            />
        <ErrorMessage error={errors.email} visible={touched.email} />

            <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                secureTextEntry
                keyboardType="password"
                onBlur = {() => setFieldTouched("password")}
                onChange={handleChange("password")}
                placeholder="Password"
                textContentType="password"
            />

            <ErrorMessage error={errors.password} visible={touched.password}/>

            <View>
            <AppButton
              title="Login"
              onPress={handleSubmit}
              color={color.dark}
              width="80%"
            />
            </View>
                    </>
                )}
            </Formik>    
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //top: 30,
        //marginTop: 50,
        padding: 30,
        backgroundColor: color.white,
    },
    login: {
        fontSize: 20,
        fontWeight: "bold",
        color: color.primary,
    },
    logo: {
        top: 20,
        width: 200,
        height: 200,
        alignSelf: 'center',
        position: "relative",

    }, 
    text : {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
    }  
})
export default Login;