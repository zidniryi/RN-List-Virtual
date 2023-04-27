import { StyleSheet } from 'react-native'
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

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

export default styles