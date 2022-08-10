import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import AppText from './AppText';
import AppButton from '../Components/AppButton';
import color from '../config/color';
import { useNavigation} from '@react-navigation/native';


function Card({service, price, image, flexDirection = 'row', props}) {
    const navigation = useNavigation();
    return (
    <View style={styles.cardContainer}>
        <View style={[styles.card , {flexDirection : flexDirection} ]}>
            <Image source={image} style={styles.image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.service}>{service}</AppText>
                <AppText style={styles.priceText}>{price}</AppText>
                <AppButton
              title="Book Service"
              color={color.green}
              width="100%"
            />  
            </View>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'center',
    },
    card : {
        borderRadius: 15,
        backgroundColor: color.white,
        shadowColor: color.medium,
        height: "88%",
        width: "95%",
        justifyContent: 'space-between',
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 15,
        //borderWidth: 1,
       // borderColor: color.peach
    },
    detailsContainer : {
        padding: 15,
    },
    image : {
        borderRadius: 50,
        width: 130,
        height: 100,
        marginVertical: 18,
        left: 10,

    },
    priceText: {
        color: color.green,
        fontWeight: "bold",
      },
      service: {
        fontWeight: "bold",
        color: color.green,
        marginBottom: 7,
      },
    
})

export default Card;