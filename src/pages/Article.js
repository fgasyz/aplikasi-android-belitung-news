import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Article({title, image, onPublish, category}) {
  return (
    <View style={styles.card}>
        <View style={styles.parentContainer}>
            <Image style={styles.imgStyle} source={{uri: image}}/>
            <View style={styles.cardBody}>
                <Text style={[styles.textStyle, {fontWeight: 'bold'}]}>{title}</Text>
                <Text style={[styles.textStyle, {paddingVertical: 5, paddingHorizontal: 5, borderRadius: 5, color:"#2688bd"}]}>{category}</Text>
                <Text style={[styles.textStyle, {textAlign: 'right', fontStyle: "italic", color: "#ffc107", paddingVertical: 5}]}>{onPublish}</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    imgStyle: {
        width: 100,
        maxHeight: 100
    },
    parentContainer: { 
        width: "100%",
        maxHeight: 200,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    card: {
        flex: 1
    },
    cardBody: {
        marginLeft: 10,
        width: "65%"
    },
    textStyle: {
        color: "black"
    },

})