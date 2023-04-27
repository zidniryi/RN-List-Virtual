import { StyleSheet } from 'react-native'
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

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
    },
    viewButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: responsiveWidth(1),
    },
    viewPaddingRight: {
        marginRight: responsiveWidth(2)
    }
});


export default styles