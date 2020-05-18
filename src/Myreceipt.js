import React from 'react';
import {View, Text, StyleSheet, Image } from 'react-native';

const Myreceipt = () => {
    return(
        <View style={styles.container}>
            <View style={{alignItems: 'center',}}>
            <Text style={styles.title}>我的發票</Text>
            </View>
            <View style={styles.index}>
                <View style={styles.index1}>
                    <View style={{flexDirection:'row'}}>
                    <Image
                        source={require('../assets/img/monthl.png')}
                        style={styles.monthl}
                    />
                    <Text style={styles.word1}>3-4月</Text>
                    <Image
                        source={require('../assets/img/monthr.png')}
                        style={styles.monthr} 
                    />
                    </View>
                    <Text style={styles.word2}>距離開獎日期</Text>
                    <Text style={styles.word3}>23</Text>
                </View>
                <View style={styles.index2}>
                    <Text style={styles.content}>掃描發票開始計算</Text>
                </View>
            </View>
            
        </View>

    );
}
export default Myreceipt ;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A561B',
        height:641,
    },
    title:{
        fontSize:17,
        marginTop:53,
        color:'white',
        fontWeight:"bold"
    },
    index:{
        height:641,
        backgroundColor: '#F9F7E8',
        marginTop:13,
        borderRadius:40,
    },
    index1:{
        alignItems: 'center',
    },
    monthl:{
        width:9,
        height:8,
        marginTop:18.5,
        marginRight:9.5,
    },
    monthr:{
        width:9,
        height:8,
        marginTop:18.5,
        marginLeft :9.5,
    },
    word1:{
        fontSize:16,
        marginTop:12,
    },
    word2:{
        fontSize:16,
        marginTop:14,
    },
    word3:{
        fontSize:30,
        marginTop:13,
        fontWeight:"bold"
    },
    index2:{
        height:508,
        backgroundColor:'#FEFDF9',
        borderRadius:40,
        alignItems: 'center',
        marginTop:14,
    },
    content:{
        fontSize:14,
        marginTop:184,
    }
  });
  