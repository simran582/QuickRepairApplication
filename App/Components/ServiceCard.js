import React from 'react';
import {View, StyleSheet,Image, TouchableOpacity } from 'react-native';
import AppText from './AppText';
import AppButton from './AppButton';
import color from '../config/color';
import {useNavigation} from '@react-navigation/native';

function ServiceCard({service, price, image, details}) {
    const navigation = useNavigation();

    return (
        <View style={styles.cardContainer}>
            <View style={ styles.card }>
            <View style={styles.detailsContainer}>
                <AppText style={styles.service}>{service} Service</AppText>
                <Image source={image} style={styles.image} />
                <TouchableOpacity>
                <AppText style={styles.details}>{details}</AppText>
                </TouchableOpacity>
                <AppText style={styles.priceText}>Rs. {price}</AppText>
                </View>
            <AppButton
              title="Book Service"
              color={color.green}
              width="50%"
              onPress={() => { navigation.navigate("DetailsScreen" , {category: " details"})
            }}
            />  
            </View>
                 </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        padding: 10,
        //justifyContent: 'center',
        backgroundColor: color.white,
    },
    card: {
        marginTop: 50,
        //borderRadius: 15,
        backgroundColor: color.black,
       // shadowColor: color.medium,
        height: 500,
        width: "100%",
        //justifyContent: 'space-between',
        shadowColor: "black",
        shadowOffset: {width: -0.5, height: 5},
        shadowOpacity: 1,
        shadowRadius: 15,
        borderStyle: 'solid',
        borderTopLeftRadius: 50,
        borderBottomRightRadius: 50,
    }, 
    image: {
        alignSelf: 'center',
        resizeMode: "cover",
        borderRadius: 50,
        width: "80%",
        height: 200,
        marginTop: 30,
       // marginVertical: 18,
    },
    details: {
        fontSize: 14,
        fontWeight: 'bold',
        color: color.white,
        marginTop: 30,
        borderColor: color.white,
        borderWidth: 1,
        borderRadius: 15,
        textAlign: 'center',
        padding: 10,
    },
    service: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: color.white,
    }, 
    priceText: {
        marginLeft: 250,
        fontSize: 20,
        color: color.white,
        fontWeight: 'bold',
    },  
})

export default ServiceCard;