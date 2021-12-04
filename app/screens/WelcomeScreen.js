import React from 'react';
import { ImageBackground, StyleSheet,
          View , Image, StatusBar, Text} from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground source = {require('../assets/background.jpg')}
                         style = {styles.background}
        >

         <View style = {styles.logoContainer}>

        <Image source = {require('../assets/logo-red.png')}
               style = {styles.logo}
        />
     
        <Text > Sell What You Don't Need </Text>
         </View>


        <View style = {styles.loginbtn}>
            
        </View>

        <View style = {styles.registerbtn}>
            
        </View>

        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    background : {
        flex : 1,
        justifyContent : 'flex-end',
        alignItems : 'center',
        marginTop : StatusBar.currentHeight,
    },

    loginbtn : {
        width : '100%',
        height : 70,
        backgroundColor : '#fc5c65'
    },

    logoContainer : {
        position : 'absolute',
        top : 80,
        alignItems : "center"
    },

    registerbtn : {
        width : '100%',
        height : 70,
        backgroundColor : '#4ecdc4'
    },

    logo : {
       
        width : 100,
        height : 100,
      
    }
})

export default WelcomeScreen;