
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Image
} from 'react-native';
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Button from "./src/components/Button/Button";
import CONSTANT from "./src/constants/CONSTANT";
import CardView from "./src/components/Card/CardView";

const CARD_DATA = [
  {
    id: 1,
    image: 'First Item',
    count: 10
  },
  {
    id: 2,
    image: 'First Item',
    count: 10
  },
  {
    id: 3,
    image: 'First Item',
    count: 10
  },
];

const { COLOR, TEXT } = CONSTANT

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.viewRow}>
        <Button background={COLOR.PRIMARY} text={TEXT.LIKE_ALL} color="white" onPress={() => console.log("first")} />
        <Button background={COLOR.DEFAULT} text={TEXT.RESET_ALL} color={COLOR.GREY} onPress={() => console.log("first")} />
        <Button background={COLOR.DANGER} text={TEXT.DISLIKE_ALL} color={COLOR.DEFAULT} onPress={() => console.log("first")} />
      </View>

      {/* Card */}
      <View style={styles.containerList}>
        <CardView />
        <CardView />
        <CardView />
      </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    marginTop: responsiveHeight(10)
  },
  viewRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: responsiveWidth(7),
    marginRight: responsiveWidth(7),
    marginTop: responsiveHeight(2)
  },

  containerList: {
    marginTop: responsiveHeight(2),
  },

});

export default App;
