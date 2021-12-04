
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
        StatusBar} from 'react-native';

import { useDimensions,useDeviceOrientation } from '@react-native-community/hooks'

export default function App() {

  console.log("app executed ");

 console.log(StatusBar.currentHeight);

  return (
  
      <View style = {styles.container}>

         <View style ={{
            backgroundColor: 'dodgerblue',
            flex : 1,
            
         }}/>
         <View style ={{
            backgroundColor: 'gold',
            flex : 1
         }}/>
         <View style ={{
            backgroundColor: 'tomato',
            flex : 1
         }}/>

      </View>
   

 
  );
}

const styles = StyleSheet.create({
  container: {
 
    backgroundColor: 'dodgerblue',
    flex : 1,
    marginTop : StatusBar.currentHeight,
    flexDirection : "row-reverse"
   
  },
  textContainer : {
    backgroundColor: 'black',
    color : 'white',
    padding : 10,
    borderRadius : 15,
    marginBottom : 20
  }
});
