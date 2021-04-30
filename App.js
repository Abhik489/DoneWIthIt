import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  console.log("app executed ");


  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>React - Native</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  textContainer : {
    backgroundColor: 'blue',
    color : 'white',
    padding : 10,
    borderRadius : 15,
  }
});
