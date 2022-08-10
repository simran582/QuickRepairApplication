import React from 'react';
import {View , Text, StyleSheet} from 'react-native';
import {useNavigation,useRoute} from "@react-navigation/native";
import color from '../../config/color';
import ServiceCard from '../../Components/ServiceCard';

function ServiceDetail() {
    const navigation= useNavigation();
    const route=useRoute();
    const {item}=route.params;
    console.log(item);
    return (
       <View style={styles.container}>
        <ServiceCard
            service={item.serviceName}
            price={item.charges}
            image={{uri: item.image}}
            details={item.description}
            />      
       </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.white,
        justifyContent: 'center',
    },
})

export default ServiceDetail;