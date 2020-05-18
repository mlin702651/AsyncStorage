import React from 'react';
import {View, Text, StyleSheet, Image, Button, TouchableOpacity} from 'react-native';
import { BlurView } from 'expo-blur';
import MyreceiptScreen from './Myreceipt';

const Choose = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={{alignItems:"center"}}>
                <Image
                    source={require('../assets/img/Blur.png')}
                    style={{width:409,height:812}}
                />
                <View style={{alignItems:"flex-end"}}>
                <Image
                    source={require('../assets/img/hint.png')}
                    style={{width:26,height:26,marginTop:-584}}
                />
                <View style={styles.index}>
                    <View style={{flexDirection:"row"}}>
                        <Text style={styles.word1}>品項</Text>
                        <Text style={styles.word2 }>選擇分類</Text>
                    </View>
                    <View style={styles.bar}></View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:16,marginTop:17.5,marginLeft:24}}>杏仁奶</Text>
                        <View style={{width:10,height:10,marginTop:23.5,marginLeft:43,backgroundColor:'#F1C624',borderColor:'#584F47',borderWidth:1,borderRadius:50,}}></View>
                        <Text style={{fontSize:16,marginTop:17.5,marginLeft:6}}>紙類</Text>
                        <View style={{width:10,height:10,marginTop:23.5,marginLeft:23,backgroundColor:'#ffffff',borderColor:'#584F47',borderWidth:1,borderRadius:50,}}></View>
                        <Text style={{fontSize:16,marginTop:17.5,marginLeft:6}}>塑膠類</Text>
                        <View style={{width:10,height:10,marginTop:23.5,marginLeft:23,backgroundColor:'#fff',borderColor:'#584F47',borderWidth:1,borderRadius:50,}}></View>
                        <Text style={{fontSize:16,marginTop:17.5,marginLeft:6}}>瓶罐</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{width:10,height:10,marginTop:8,marginLeft:115,backgroundColor:'#fff',borderColor:'#584F47',borderWidth:1,borderRadius:50,}}></View>
                        <Text style={{fontSize:16,marginTop:2,marginLeft:6}}>不可回收</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:16,marginTop:9,marginLeft:24}}>統一布丁</Text>
                        <View style={{width:10,height:10,marginTop:15.5,marginLeft:27,backgroundColor:'#fff',borderColor:'#584F47',borderWidth:1,borderRadius:50,}}></View>
                        <Text style={{fontSize:16,marginTop:9,marginLeft:6}}>紙類</Text>
                        <View style={{width:10,height:10,marginTop:15.5,marginLeft:23,backgroundColor:'#F1C624',borderColor:'#584F47',borderWidth:1,borderRadius:50,}}></View>
                        <Text style={{fontSize:16,marginTop:9,marginLeft:6}}>塑膠類</Text>
                        <View style={{width:10,height:10,marginTop:15.5,marginLeft:23,backgroundColor:'#fff',borderColor:'#584F47',borderWidth:1,borderRadius:50,}}></View>
                        <Text style={{fontSize:16,marginTop:9,marginLeft:6}}>瓶罐</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{width:10,height:10,marginTop:8,marginLeft:115,backgroundColor:'#fff',borderColor:'#584F47',borderWidth:1,borderRadius:50,}}></View>
                        <Text style={{fontSize:16,marginTop:2,marginLeft:6}}>不可回收</Text>
                    </View>
                </View>
                </View>
            </View>  
            <TouchableOpacity style={{zIndex:3,alignItems:'center',marginTop:-300,marginLeft:284}} onPress={()=> navigation.navigate("掃描")}>
                     <Image
                        source={require('../assets/img/savebutton.png')}
                        style={{width:66,height:45,marginTop:16,}}
                     />
            </TouchableOpacity>  
        </View>

    );}
export default Choose;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#1A561B",
    },
    index:{
        width:343,
        height:247,
        backgroundColor: '#FFFEFC',
        marginTop:12,
        borderRadius:15 ,
    },
    word1:{
        fontSize:14,
        marginLeft:24,
        marginTop:30,
    },
    word2:{
        fontSize:14,
        marginLeft:213,
        marginTop:30,
    },
    bar:{
        width:297 ,
        borderWidth:1,
        borderColor:'#32271F',
        opacity:0.25,
        marginLeft:24.5, 
        borderRadius:10
    },
  });
  