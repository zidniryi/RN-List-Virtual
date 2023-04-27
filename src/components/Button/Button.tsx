import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { responsiveWidth } from "react-native-responsive-dimensions"

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
const Button = ({ text, color = COLOR.DEFAULT, isHaveOpacity = true, background = COLOR.PRIMARY, onPress, size = 'medium' }: ButtonPropsApp): JSX.Element => {
    return (
        <TouchableOpacity activeOpacity={isHaveOpacity ? 0.5 : 1.0} onPress={onPress}>
            <View style={[styles.button, { backgroundColor: background, width: size === 'medium' ? responsiveWidth(25) : responsiveWidth(22) }]}>
                <Text style={[styles.textButton, { color: color }]}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button