import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import SegmentControl from './Segmented';

const Home = () => {
    return(
        <View style={styles.container}>
            <View style={{alignItems: 'center',}}>
            <Text style={styles.title}>首頁</Text>
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
                    <Text style={styles.word2}>總金額</Text>
                    <Text style={styles.word3}>20.77</Text>
                    
                </View>
                
                <View style={styles.index2}>
                    <Text style={styles.sort1}>品項</Text>
                    <Text style={styles.sort2}>日期</Text>
                    <Text style={styles.sort3}>價值</Text>
                    
                </View>
                <View style={{width:254,borderColor:'#32271F',opacity:0.25,borderWidth:1,marginTop:-465,alignSelf:'center'}}></View>
                
                    <View style={{width:343,height:31,marginTop:-88,alignSelf:'center',backgroundColor:'#EFEACC',borderRadius:7,borderColor:'#EFEACC',borderEndWidth:1.5}}>
                        <SegmentControl/>
                    </View>

                <View style={{width:1,height:16,backgroundColor:'#8E8E93',position:'absolute',left:262.5,top:134,opacity:0.5}}></View>
                <View style={{width:1,height:16,backgroundColor:'#8E8E93',position:'absolute',left:147.5,top:134,opacity:0.5}}></View>
               
            </View>
            
        </View>

    );
}
export default Home ;

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
        marginTop:2,
        lineHeight:39
    },
    index2:{
        justifyContent:'center',
        height:508,
        backgroundColor:'#FEFDF9',
        borderRadius:40,
        flexDirection:"row",
        marginTop:60,
    },
    sort1:{
        fontSize:14,
        marginTop:24,
        marginRight:87,
    },
    sort2:{
        fontSize:14,
        marginTop:24
    },
    sort3:{
        fontSize:14,
        marginTop:24,
        marginLeft:78,
    }
  });
  