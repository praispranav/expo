import React, {useState} from 'react';
import { View,StyleSheet,TouchableNativeFeedback,Modal,Button } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

//import colors from './../config/colors';
import defaultStyles from './../config/styles';
import Text from './Text';
import Wrapper from './Wrapper';
import { FlatList } from 'react-native';
import PickerItem from './PickerItem';




function CustPicker({icon,placeholder,items,selectedItem,onSelectItem}) {
 
    const [visible,setVisible] = useState(false);
    return (
        <>
        <TouchableNativeFeedback onPress={ () => setVisible(true) }>
    <View style={styles.container}>
        {icon && 
        <MaterialCommunityIcons 
        name={icon} size={20} 
        color={defaultStyles.colors.deep_sky}
        style={styles.icon}
        />}
     
      <Text style={styles.text}>{selectedItem?selectedItem.label:placeholder}</Text>

      <MaterialCommunityIcons 
        name="chevron-down" size={20} 
        color={defaultStyles.colors.deep_sky}
        />
    </View>

 </TouchableNativeFeedback>

<Modal visible={visible} animationType="slide">
    <Wrapper>
    <Button title="close" onPress={() => setVisible(false) } />
    <FlatList
    data={items}
    keyExtractor={item => item.value.toString()}
    renderItem={({item}) => <PickerItem label={item.label} 
    onPress={()=> {
        setVisible(false);
        onSelectItem(item);
    }}
    
    />}
    />
    </Wrapper>
</Modal>

        </>
      
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
    },
    text:{
        flex:1,
    }
})
export default CustPicker;