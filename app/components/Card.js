import React from 'react';
import { View,StyleSheet, Image } from 'react-native';

import colors from '../config/colors';
import Text from './Text';

function Card({title,description,image}) {
    return (
        <View style={styles.card}>
           <Image source={image} style={styles.image} />
           <View style={styles.detailsContainer}>
               <Text style={styles.title}>{title}</Text>
               <Text style={styles.description}>{description}</Text>
           </View>
           
        </View>
    );
}
const styles = StyleSheet.create({
    card:{
        borderRadius:15,
        backgroundColor:colors.white,
        marginBottom:20,
        overflow: 'hidden',
    },
    image:{
        width:'100%',
        height:200,
    },
    detailsContainer:{
        padding:20,
    },
    title:{
        marginBottom:7,
    },
    description:{
        color:colors.secondary,
        fontWeight:'bold',
    }
})
export default Card;