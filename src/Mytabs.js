import React from 'react';
import { Image, View, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';


import { TabBar } from "react-native-animated-nav-tab-bar";

import ChooseScreen from './Choose';
import HomeScreen from './Home';
import MyreceiptScreen from './Myreceipt';
import QRcodeScreen from './QRcode';
import MoreScreen from './More';

const Tab = createBottomTabNavigator();

function MyTabs() {
  let state;
  return (
    
    <Tab.Navigator
    initialRouteName="回收"
      tabBar={props => (
        <TabBar
          activeColors={'black'} // or activeColors={'#e6b580'}
          activeTabBackgrounds={'#F6DC79'} // or activeTabBackgrounds={'#ede7e6'}
          tabBarBackground={'#1A561B'}
          {...props}
          showLabel={false} 
          topPadding={-10}
          options={{}}
        />
      )}>
      <Tab.Screen 
        name="發票" 
        component={MyreceiptScreen}
        options={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let imgstyle;
            iconName = focused
              ? require('../assets/img/pedit.png')
              : require('../assets/img/edit.png');
            // You can return any component that you like here!
            iconName === require('../assets/img/pedit.png')
            ? imgstyle=styles.acimage
            : imgstyle=styles.inacimage;
            return (
            <Image 
              style={imgstyle} 
              source={iconName}
            />
            );
          },
        })}
        />
      <Tab.Screen 
        name="掃描" 
        component={QRcodeScreen} 
        options={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let imgstyle;
              iconName = focused
                ? require('../assets/img/pscan.png')
                : require('../assets/img/scan.png');
            // You can return any component that you like here!
            iconName === require('../assets/img/pscan.png')
            ? imgstyle=styles.scanacimage
            : imgstyle=styles.inacimage;
            return (
            <Image 
              style={imgstyle} 
              source={iconName}
            />
            );
          },
        })}
        />
      <Tab.Screen
       name="回收" 
       component={HomeScreen} 
       options={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let imgstyle;
            iconName = focused
              ? require('../assets/img/precycle.png')
              : require('../assets/img/recycle.png');
          // You can return any component that you like here!
          iconName === require('../assets/img/precycle.png')
            ? imgstyle=styles.acimage
            : imgstyle=styles.inacimage;
          return (
          <Image 
            style={imgstyle} 
            source={iconName}
          />
          );
        },
      })}
       />
      <Tab.Screen
       name="更多" 
       component={MoreScreen} 
       options={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let imgstyle;
            iconName = focused
              ? require('../assets/img/pmore.png')
              : require('../assets/img/more.png');
          // You can return any component that you like here!
          iconName === require('../assets/img/pmore.png')
            ? imgstyle=styles.acimage
            : imgstyle=styles.inacimage;
          return (
          <Image 
            style={imgstyle} 
            source={iconName}
          />
          );
        },
      })}
       />
       
    </Tab.Navigator>

  );
}

export default MyTabs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  acimage:{
    width:48,
    height:46,
    marginTop:-27,
  },
  scanacimage:{
    width:48,
    height:46,
    marginTop:-21,
  },
  inacimage:{
    width:48,
    height:46,
  },
});
