import React from 'react';
import { View , StyleSheet, Image, TouchableHighlight} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import colors from '../config/colors';
import Text from './Text';

function ListItem({title,description,image,IconComponent,onPress,renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
     <TouchableHighlight 
     onPress={onPress}
     underlayColor={colors.GREY.whiteish}
     >
      <View style={styles.container}>
          {IconComponent}
         {image && <Image source={image} style={styles.image} />} 
          <View style={styles.detailsContainerl}>
          <Text style={styles.title} numberOfLines={1}>{title}</Text>
           {description && <Text style={styles.description} numberOfLines={2}>{description}</Text>} 
          </View>
          <MaterialCommunityIcons name="chevron-right" color={colors.GREY.Trolley_Grey} size={25} />
      </View>
     </TouchableHighlight>
        </Swipeable>
     
    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        padding:15,
        //need to be reviewed
        backgroundColor: colors.white,
        alignItems:'center',
    },
    image:{
        width:70,
        height:70,
        borderRadius:35,
        //marginRight:10,
    },
    title:{
        fontWeight:'500',
    },
    description:{
        color:colors.BLUE.dark,
        fontSize:16,
    },
    detailsContainer:{
        marginLeft:10,
        justifyContent:'center',
        flex:1,
    }
})
export default ListItem;