import React from 'react';
import { TextInput, View, StyleSheet, Platform, DynamicColorIOS } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import color from '../config/color';
import defaultStyles from '../config/styles';


function AppTextInput({icon , ...otherProps}) {
    return (
       <View style={styles.container}>
        {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.color.medium} style={styles.icon} />}
        {/* {icon && <FontAwesome name={icon} size={20} color={defaultStyles.color.medium} style={styles.icon} />} */}
        <TextInput style={defaultStyles.text} {...otherProps}/>
       </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.color.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: "100%",
        padding: 15,
        marginVertical: 10,
        borderColor: '#ffc0cb',
        borderWidth: 2,
        height: 50,
    },
    icon: {
        marginRight: 10,
    },
})

export default AppTextInput;