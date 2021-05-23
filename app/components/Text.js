import React from 'react';
import {Text} from 'react-native';

import defaultStyles from './../config/styles';

function CustomText({children,style,...otherProps}) {
    return (
      <Text style={[defaultStyles.text,style]} {...otherProps}>{children}</Text>
    );
}


// const styles = StyleSheet.create({
//     text:{
//         color: '#070807',
//         ...Platform.select({
//             ios:{
//                 fontSize: 18,
//                 fontFamily: 'System',
//             },
//             android:{
//                 fontSize: 18,
//                 fontFamily: 'Roboto',
//             }
//         })
        
//     }
// })
export default CustomText;