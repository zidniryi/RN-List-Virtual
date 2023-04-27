import React, { useState } from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    useColorScheme,
    View,
    FlatList,
} from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
} from 'react-native-responsive-dimensions';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import CONSTANT from '../constants/CONSTANT';
import CONSTANT_DATA from '../constants/CONSTANT_DATA';
import Button from '../components/Button/Button';
import CardView from '../components/Card/CardView';

const { COLOR, TEXT } = CONSTANT;

function ListApp(): JSX.Element {
    const [dataListView, setDataListView] = useState(CONSTANT_DATA);

    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    /**
     * - On Like
     * @param id {number} ID of list selected
     * @returns {Array}
     */
    const onLikeCard = (id: number) => {
        let updatedList = dataListView.map(item => {
            // Add +1 if data found
            if (item.id === id) {
                return { ...item, count: item.count + 1 };
            }
            return item;
        });

        setDataListView(updatedList);
    };

    /**
     * - On onLikeAllCard
     * @param id {number} ID of list selected
     * @returns {Array}
     */
    const onLikeAllCard = () => {
        let updatedList = dataListView.map(item => {
            return { ...item, count: item.count + 1 };
        });
        setDataListView(updatedList);
    };

    /**
     * - On Dislike
     * @param id {number} ID of list selected
     * @returns {Array}
     */
    const onDislikeCard = (id: number) => {
        let updatedList = dataListView.map(item => {
            // Add -1 if data found
            // and check if data less than zero to prevent negative number
            if (item.id === id && item.count > 0) {
                return { ...item, count: item.count - 1 };
            }
            return item; // else return unmodified item
        });

        setDataListView(updatedList);
    };

    /**
     * - On onDisslikeAllCard
     * @param id {number} ID of list selected
     * @returns {Array}
     */
    const onDisslikeAllCard = () => {
        let updatedList = dataListView.map(item => {
            // Prevent negative number
            if (item.count > 0) {
                return { ...item, count: item.count - 1 };
            }
            return item;
        });
        setDataListView(updatedList);
    };

    /**
     * - On Reset
     * @param id {number} ID of list selected
     * @returns {Array}
     */
    const onResetAll = () => {
        let updatedList = dataListView.map(item => {
            return { ...item, count: 0 };
        });
        setDataListView(updatedList);
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <View style={styles.viewRow}>
                <Button
                    background={COLOR.PRIMARY}
                    text={TEXT.LIKE_ALL}
                    color={COLOR.DEFAULT}
                    onPress={onLikeAllCard}
                />
                <Button
                    background={COLOR.DEFAULT}
                    text={TEXT.RESET_ALL}
                    color={COLOR.GREY}
                    onPress={onResetAll}
                />
                <Button
                    background={COLOR.DANGER}
                    text={TEXT.DISLIKE_ALL}
                    color={COLOR.DEFAULT}
                    onPress={onDisslikeAllCard}
                />
            </View>
            {/* Card */}
            <View style={styles.containerList}>
                <FlatList
                    data={dataListView}
                    renderItem={({ item }) => (
                        <CardView
                            image={item.image}
                            textCount={item.count.toString()}
                            onDislike={() => onDislikeCard(item.id)}
                            onLike={() => onLikeCard(item.id)}
                        />
                    )}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        </SafeAreaView>
    );
}

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

export default ListApp;
