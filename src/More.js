import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';


const More = () => {
    return(
        <View style={styles.container}>
            <Text style={{fontSize:30,marginBottom:30}}>More</Text>
            <Text>Coming soon..</Text>
            
        </View>
    );
}
export default More ;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  