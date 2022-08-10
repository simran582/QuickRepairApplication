import React from 'react';
import {View, Text, StyleSheet, ScrollView} from  'react-native';
import color from '../../config/color';
import AppText from '../../Components/AppText';
import AppButton from '../../Components/AppButton';
import AppTextInput from '../../Components/AppTextInput';
import { useNavigation } from "@react-navigation/native";
import ErrorMessage from '../../Components/ErrorMessage';
import {Formik} from 'formik';
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    username: Yup.string().required().label("Username"),
    email : Yup.string().required().email().label("Email"),
    phonenumber : Yup.string().required().label("Phonenumber"),
    address : Yup.string().required().label("Address"),
    city : Yup.string().required().label("City"),
});

function DetailsScreen(props) {
    const navigation = useNavigation();
    return (
       <ScrollView style={styles.container}>
        <AppText style={styles.headingText}>Add Booking Details</AppText>
<View style={styles.form}>
        <Formik
            initialValues={{
                username: '',
                email: '',
                phonenumber: '',
                address: '',
                city: '',
            }}
            onSubmit={values => console.log(values)}
            validationSchema={validationSchema}>
           { ( { handleChange, handleSubmit, errors , setFieldTouched, touched }) => (
                  <>
                  <AppTextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon = {false}
                  keyboardType="default"
                  onBlur={(e) => setFieldTouched("username")}
                  onChane={handleChange("username")}
                  placeholder=" Username"
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



            <View style={styles.buttons}>
            <AppButton
              title="Confirm"
              color={color.green}
              width="40%"
            //   onPress={() => {
            //     navigation.navigate("HomeScreen");
            //        }} 
            onPress={handleSubmit}
            />
             <AppButton
              title="Cancel"
              color={color.green}
              width="40%"
              onPress={() => { navigation.navigate("HomeScreen") } }
            //   onPress={() => {
            //     navigation.navigate("HomeScreen");
            //        }} 
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
        top: 20,
        flex: 1,
        backgroundColor: color.white, 
        padding: 30,  
    },
    headingText: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: color.black,
        marginTop: 50,
        borderTopWidth: 3,
        borderBottomWidth: 3,
        borderColor: color.green,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    form: {
        justifyContent: 'center',
         marginTop: 50,
    }
})

export default DetailsScreen;