import { View, StyleSheet, Image } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

import Button from "../Button/Button";


const CardView = () => {
    return (
        <View style={styles.viewCard}>
            <Image style={styles.imageCard} source={{ uri: "https://cdn.pixabay.com/photo/2023/04/23/19/29/daisies-7946594_1280.jpg" }} />
            <View style={styles.viewRowCard}>
                <View style={styles.viewLike}>
                    <Button background="green" text="Hello" color="white" onPress={() => console.log("first")} />
                </View>
                <Button background="green" text="Hello" color="white" onPress={() => console.log("first")} />
                <Button background="green" text="Hello" color="white" onPress={() => console.log("first")} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    viewCard: {
        width: responsiveWidth(88),
        height: responsiveHeight(33),
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        marginBottom: responsiveHeight(2)
    },
    imageCard: {
        width: responsiveWidth(88),
        height: responsiveHeight(26),
        borderTopEndRadius: 10,
        borderTopLeftRadius: 10
    },
    viewRowCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: responsiveWidth(2),
        marginRight: responsiveWidth(2),
        marginTop: responsiveHeight(1.5)
    },
    viewLike: {
        marginRight: responsiveWidth(7)
    }
});

export default CardView