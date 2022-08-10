import React from 'react';
import { StyleSheet, Image, View, Text, ScrollView } from 'react-native';
import AppTextInput from '../Components/AppTextInput';
import Divider from "react-native-divider";
import AppButton from '../Components/AppButton';
import color from '../config/color';
import ErrorMessage from '../Components/ErrorMessage';
import {Formik} from 'formik';
import HomeScreen from './HomeScreen';
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";


const validationSchema = Yup.object().shape({
    username: Yup.string().required().label("Username"),
    email : Yup.string().required().email().label("Email"),
    password : Yup.string().required().min(6).label("Password"),
    phonenumber : Yup.string().required().label("Phonenumber"),
    address : Yup.string().required().label("Address"),
    city : Yup.string().required().label("City"),
    country : Yup.string().required().label("Country"),
})

function Registration(props) {
    const navigation = useNavigation();
    return (
        <ScrollView>
        <View style={styles.container}>
        <Divider orientation="center">
                <Text style={styles.login}>SignUp</Text>
            </Divider>
            <Image
                style={styles.logo}
                alt="pic.png"
                source={require('../assets/logo.jpeg')}
                resizeMode="cover"
            />
            <Text style={styles.text}>Quick Repair Services For Home</Text>
           

            <Formik
            initialValues={{
                username: '',
                email: '',
                password: '',
                phonenumber: '',
                address: '',
                city: '',
                country: '',
            }}
            onSubmit={values => console.log(values)}
            validationSchema={validationSchema}>
           { ( { handleChange, handleSubmit, errors , setFieldTouched, touched }) => (
                  <>
                  <AppTextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon={false}
                  keyboardType="default"
                  onBlur={(e) => setFieldTouched("username")}
                  onChane={handleChange("username")}
                  placeholder="Username"
                  />
        <ErrorMessage error={errors.username} visible={touched.username} />


                    <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon={false}
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
                icon={false}
                secureTextEntry
                keyboardType="password"
                onBlur = {() => setFieldTouched("password")}
                onChange={handleChange("password")}
                placeholder="Password"
                textContentType="password"
            />

            <ErrorMessage error={errors.password} visible={touched.password}/>

            <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon={false}
                keyboardType="numeric"
                onBlur = {() => setFieldTouched("phonenumber")}
                onChange={handleChange("phonenumber")}
                placeholder="PhoneNumber"
            />

            <ErrorMessage error={errors.phonenumber} visible={touched.phonenumber}/>

            <AppTextInput
                multiline={true}
                autoCapitalize="none"
                autoCorrect={false}
                icon={false}
                keyboardType="default"
                onBlur = {() => setFieldTouched("address")}
                onChange={handleChange("address")}
                placeholder="Full Address"
            />

            <ErrorMessage error={errors.address} visible={touched.address}/>


            <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon={false}
                keyboardType="default"
                onBlur = {() => setFieldTouched("city")}
                onChange={handleChange("city")}
                placeholder="City"
            />

            <ErrorMessage error={errors.city} visible={touched.city}/>


            <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon={false}
                keyboardType="default"
                onBlur = {() => setFieldTouched("country")}
                onChange={handleChange("country")}
                placeholder="Country"
            />

            <ErrorMessage error={errors.country} visible={touched.country}/>

            <View>
            <AppButton
              title="SignUp"
              color={color.dark}
              width="80%"
              onPress={() => {
                navigation.navigate("HomeScreen");
                   }} 
           // onPress={handleSubmit}
            />
            </View>
                    </>
                )}
            </Formik>    
        </View>

        </ScrollView>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        padding: 30,
        backgroundColor: color.white,
    },
    login: {
        fontSize: 20,
        fontWeight: "bold",
        color: color.primary,
    },
    logo: {
        marginTop: 20,
        width: 200,
        height: 150,
        alignSelf: 'center',
    }, 
    text : {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
    }  
})

export default Registration;