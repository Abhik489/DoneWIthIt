import React from 'react';
import { Image, StyleSheet, View , StatusBar} from 'react-native';

import colors from '../config/colors'

function ViewImageScreen(props) {
    return (
        <View style = {styles.container}>

            <View style = { styles.topbar }>

                <View style = {styles.close}></View>
                <View style = {styles.delete}></View>
            </View>

            <Image source = {require('../assets/chair.jpg')}
                   style = {styles.chair}/>

        </View>
    );
}

const styles = StyleSheet.create({

    container : {
        backgroundColor : 'black',
        flex : 1,
        marginTop : StatusBar.currentHeight,
      
    },

    chair : {
        width : '100%',
        resizeMode : 'contain',
        height : '100%',
      
       
    },

    topbar : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginTop : 20
    },

    close : {
        width : 50,
        height : 50,
        backgroundColor : colors.primary,
        marginLeft : 30,
    },
    delete : {
        width : 50,
        height : 50,
        backgroundColor : colors.secondary,
        marginRight : 30
    }
})

export default ViewImageScreen;