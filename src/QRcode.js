import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';

const QRcode = ({navigation}) => {
    return(
        <View style={styles.container}>
                <TouchableOpacity onPress={()=> navigation.navigate('ChooseScreen')}>
                  <Image
                    source={require('../assets/img/qrcode.png')}
                    style={{height:789,width:412,marginTop:39}}
                  />
                </TouchableOpacity>
        </View>
        
    );
}
export default QRcode ;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  