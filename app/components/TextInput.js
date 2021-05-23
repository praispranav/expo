import React from 'react';
import { View,TextInput,StyleSheet } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

//import colors from './../config/colors';
import defaultStyles from './../config/styles';

function CustomTextInput({icon,width="100%",...restProps}) {
    return (
    <View style={[styles.container,{width}]}>
        {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.deep_sky} style={styles.icon} />}
        <TextInput style={defaultStyles.text} {...restProps}  />
    </View>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:defaultStyles.colors.GREY.whiteish,
        borderRadius:25,
        flexDirection:'row',
        width:'100%',
        padding:15,
        marginVertical:10,
    },
    icon:{
        marginRight:10,
    }
})
export default CustomTextInput;