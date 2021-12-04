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

export default function App() {

  console.log("app executed ");


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textContainer}
            onPress = {() => console.log("clicked")}
      >
        React - Native
      </Text>
      <Image source ={require('./assets/favicon.png')}/>

      <TouchableOpacity
           onPress = {() => console.log("Image Clicked")}
      >

      <Image source ={{ uri : "https://picsum.photos/200",
                        width : 200,
                        height : 200
                      }}
              blurRadius = {3}
              fadeDuration = {1000}
                      />

      </TouchableOpacity>

      <Button title ="Click Normal"
              onPress = {()=>console.log("button Clicked")}/>

       <Button title ="Click Alert"
              onPress = {()=>alert("button Clicked")}
              />

      <Button title ="Click Alert API"
      onPress = {()=>Alert.alert("Surway","Are you men?",[ 
        {text : 'Yes', onPress : ()=>console.log("yes")},
        {text : 'No', onPress : ()=>console.log("yes")}
      ])
      }
    />


      <Button title ="Alert with propmpt"
      onPress = {()=>Alert.alert("Surway","Are you men?", text => console.log("test"))
      }/>


      <StatusBar style="auto" />
    </SafeAreaView>

 
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
    backgroundColor: 'black',
    color : 'white',
    padding : 10,
    borderRadius : 15,
    marginBottom : 20
  }
});
