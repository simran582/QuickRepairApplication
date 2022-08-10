import React, { useState, useEffect } from 'react';
import {
    View , 
    Text ,
    ScrollView, 
    StyleSheet, 
    Image, 
    TouchableOpacity,
    } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import color from '../config/color';
import Card from '../Components/Card';
import ServiceDetail from './Services/ServiceDetail';

// const apiurl = "http://localhost:1234/getAllServices";
const url = "http://10.102.142.32:1234/getAllServices";

function HomeScreen({category}) {
    const navigation = useNavigation();

      const[services, setServices] = useState([]);
      useEffect(() => {
        async function getDetails() {
          try {
            await fetch(url, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((res) => res.json())
              .then((res) => {
                setServices(() => res);
                console.log("API fetch successfully!");
              });
          } catch (err) {
            console.log(err);
          }
        }
        getDetails();
      }, []);
   
    return (
        <ScrollView style={styles.container}>
        <Image source={require("../assets/Banner.png")} style={styles.banner}/>
      
            {services.map((itm) => {
                return (
                    <TouchableOpacity
                    onPress={() => 
                      navigation.navigate("ServiceDetail",{ item:itm })}
                     >
         <Card
            service={itm.serviceName}
            price={itm.charges}
            image={{uri: itm.image}}
            // image={require("../assets/Plumber2.png")}
          />
          </TouchableOpacity>
                );
            })}
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        top: 10,
        flex: 1,
    },
    banner: {
        alignSelf: 'center',
        width: 400,
        height: 200,
        resizeMode:"cover",
    },
})

export default HomeScreen;