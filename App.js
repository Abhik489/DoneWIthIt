
import React from 'react';
import { StyleSheet, 
         Text,
         View,
         Image,
         SafeAreaView,
         TouchableWithoutFeedback,
         TouchableOpacity,
        TouchableHighlight, 
        Button,
        Alert,
        StatusBar,
        ImageBackground} from 'react-native';

import { useDimensions,useDeviceOrientation } from '@react-native-community/hooks'
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

export default function App() {

  console.log("app executed ");

 

  return (
    // <WelcomeScreen />

     <ViewImageScreen/>
  );
}

const styles = StyleSheet.create({
  
});
