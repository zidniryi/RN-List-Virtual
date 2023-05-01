import {
    StyleSheet,
} from 'react-native';
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F4F4',
        marginTop: responsiveHeight(1),
    },
    viewRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: responsiveWidth(7),
        marginRight: responsiveWidth(7),
        marginTop: responsiveHeight(2),
    },

    containerList: {
        flex: 1,
        marginTop: responsiveHeight(2),
        marginBottom: responsiveHeight(2),
    },
});

export default styles