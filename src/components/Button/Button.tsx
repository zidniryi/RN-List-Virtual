import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import { ButtonPropsApp } from "./Button.d"
import styles from "./Button.styles"
import CONSTANT from "../../constants/CONSTANT"


const { COLOR } = CONSTANT

/**
 * Button Component
 * 
 * @param ButtonPropsApp - is the props for Button Component 
 * @returns {JSX.Element }
 */
const Button = ({ text, color = COLOR.DEFAULT, background = COLOR.PRIMARY, onPress, size = 'small' }: ButtonPropsApp): JSX.Element => {
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            <View style={[styles.button, { backgroundColor: background }]}>
                <Text style={[styles.textButton, { color: color }]}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button