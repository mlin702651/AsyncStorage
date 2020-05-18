import React from 'react';
import { Image,AsyncStorage } from 'react-native';
import { SplashScreen } from 'expo';

import HomeScreen from './Mytabs'
import ChooseScreen from './Choose';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
const PERSISTENCE_KEY = "NAVIGATION_STATE";

function Mystack() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();


  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
        const state = JSON.parse(savedStateString);
        setInitialNavigationState(state);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }
    loadResourcesAndDataAsync();
  }, []);



  if (!isLoadingComplete) {
    return null;
  }
  else{
    return(
    <NavigationContainer 
    initialState={initialNavigationState}
    onStateChange={(state) =>
      AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
    }>
        <Stack.Navigator initialRouteName='HomeScreen'>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{headerShown:false}}
            />
            <Stack.Screen
              name="ChooseScreen"
              component={ChooseScreen}
              options={{headerShown:false}}
            />
        </Stack.Navigator>
    </NavigationContainer>
    )
  }
    }
export default Mystack;