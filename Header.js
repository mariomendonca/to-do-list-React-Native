import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

export default function Header() {
    return(
        <View style={styles.header}>
					<Text style={styles.textHeader}>My to dos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  header: {
        height:100,
        width:415,
        paddingTop:45,
        backgroundColor:'#FF4500',
        alignItems:'center'
        
	},
	textHeader :{
        fontSize:20,
        fontWeight:'bold',
    }
})