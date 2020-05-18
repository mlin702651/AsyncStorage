import React, {Component} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import SegmentedControlTab from "react-native-segmented-control-tab";
import { color } from 'react-native-reanimated';
import Sort1 from './Sort1.js';
import Sort2 from './Sort2.json';
import Sort3 from './Sort3.json';

class SegmentControl extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0
    };
  }
 
  handleIndexChange = index => {
    this.setState({
      ...this.state,
      selectedIndex: index
    });
  };
 
  render() {
      let content;
      let content1;
      let content2;
      let content3;
      let content4;
      if(this.state.selectedIndex===0){
        content="杏仁奶";
        content1="4.18";
        content2="0.03";
        content3="蜜豆奶";
        content4="4.20";
      }else if(this.state.selectedIndex===1){
        content="統一布丁";
        content1="4.18";
        content2="0.03";
        content3="塑膠袋";
        content4="4.20";
      }else{
        content="礦泉水";
        content1="4.18";
        content2="0.03";
        content3="麥香紅茶";
        content4="4.20";
      }
    return (
      <View>
        <SegmentedControlTab
          values={["紙類", "塑膠類", "瓶罐"]}
          selectedIndex={this.state.selectedIndex}
          onTabPress={this.handleIndexChange}
          tabTextStyle={{color:'#32271F',fontSize:13}}
          activeTabTextStyle={{fontWeight:'bold',fontSize:14,color:'#32271F'}}
          activeTabStyle={{backgroundColor:'#FEFDFB'}}
          tabStyle={{borderRadius:7,borderWidth:0,height:28,backgroundColor:'#EFEACC',opacity:0.8,}}
          tabsContainerStyle={{paddingTop:1}}
        />
        {
            <View>
              <View style={{flexDirection:'row',justifyContent:'center',marginTop:70.5}}>
                <Text style={styles.content1}>{content}</Text>
                <Text style={styles.content2}>{content1}</Text>
                <Text style={styles.content3}>{content2}</Text>
                <Image
                  source={require('../assets/img/edit1.png')}
                  style={{width:30,height:30,position:'absolute',left:306,marginTop:-4}}
                />
              </View>
              <View style={{flexDirection:'row',justifyContent:'center',marginTop:29}}>
                <Text style={styles.content1}>{content3}</Text>
                <Text style={styles.content2}>{content4}</Text>
                <Text style={styles.content3}>{content2}</Text>
                <Image
                  source={require('../assets/img/edit1.png')}
                  style={{width:30,height:30,position:'absolute',left:306,marginTop:-4}}
                />
              </View>
            </View>
        }


      </View>
    );
  }
}

export default SegmentControl;

const styles = StyleSheet.create({
    content1:{
      fontSize:16,
      position:'absolute',
      left:43,
    },
    content2:{
      fontSize:16,
      position:'absolute',
      left:160,
    },
    content3:{
      fontSize:16,
      position:'absolute',
      left:266,
    },
});