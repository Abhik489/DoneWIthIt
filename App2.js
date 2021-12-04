import { StatusBar } from 'expo-status-bar';
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
        Alert} from 'react-native';

import { useDimensions,useDeviceOrientation } from '@react-native-community/hooks'

export default function App() {

  console.log("app executed ");

  //console.log(useDimensions());
  console.log(useDeviceOrientation());

  const {landscape} = useDeviceOrientation();


  return (
    <SafeAreaView style={styles.container}>
      <View style = {styles.container}>

      </View>
    </SafeAreaView>

 
  );
}

const styles = StyleSheet.create({
  container: {
 
    backgroundColor: 'dodgerblue',
    width : "100%",
    height : "30%"
   
  },
  textContainer : {
    backgroundColor: 'black',
    color : 'white',
    padding : 10,
    borderRadius : 15,
    marginBottom : 20
  }
});
