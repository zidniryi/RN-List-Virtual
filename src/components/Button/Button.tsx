import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { ButtonPropsApp } from "./Button.d"

import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions"

const Button = ({ text, color = "white", background = "red", onPress, size = 'small' }: ButtonPropsApp) => {
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            <View style={[styles.button, { backgroundColor: background }]}>
                <Text style={[styles.textButton, { color: color }]}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        width: responsiveWidth(25),
        height: responsiveHeight(4),
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton: {
        fontWeight: '600',
    },
});
export default Button