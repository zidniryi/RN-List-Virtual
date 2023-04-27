import { View, Image, ImageBackground } from 'react-native';
import React from 'react';

import Button from '../Button/Button';
import styles from './CardView.styles';
import { CardViewProps } from './CardView.d';
import CONSTANT from '../../constants/CONSTANT';

const { TEXT, COLOR } = CONSTANT;

/**
 * CardView Component
 *
 * @param CardViewProps - props for CardView
 * @returns {JSX.Element}
 */
const CardView = ({
    image,
    textCount = '0',
    onDislike,
    onLike,
}: CardViewProps): JSX.Element => {
    return (
        <View style={styles.viewCard}>
            <ImageBackground
                imageStyle={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                style={styles.imageCard}
                source={{ uri: image }}
            />
            <View style={styles.viewRowCard}>
                <View style={styles.viewLike}>
                    <Button
                        size="small"
                        background={COLOR.DEFAULT}
                        text={`${textCount} ${TEXT.LIKE}`}
                        color={COLOR.GREY}
                        isHaveOpacity={false}
                    />
                </View>
                <View style={styles.viewButton}>
                    <View style={styles.viewPaddingRight}>
                        <Button
                            size="small"
                            background={COLOR.PRIMARY}
                            text={TEXT.LIKE}
                            color={COLOR.DEFAULT}
                            onPress={onLike}
                        />
                    </View>
                    <View>
                        <Button
                            size="small"
                            background={COLOR.DANGER}
                            text={TEXT.DISLIKE}
                            color={COLOR.DEFAULT}
                            onPress={onDislike}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default CardView;
