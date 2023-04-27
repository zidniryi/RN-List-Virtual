
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

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
        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.button}>
            <Text style={styles.textButton}>Like All</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.button}>
            <Text style={styles.textButton}>Like All</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.button}>
            <Text style={styles.textButton}>Like All</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Card */}
      <View style={styles.containerList}>
        <View style={styles.viewCard}>
          <Image style={styles.imageCard} source={{ uri: "https://cdn.pixabay.com/photo/2023/04/23/19/29/daisies-7946594_1280.jpg" }} />
          <View style={styles.viewRowCard}>
            <View style={styles.viewLike}>
              <TouchableOpacity activeOpacity={0.5}>
                <View style={styles.button}>
                  <Text style={styles.textButton}>Like All</Text>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity activeOpacity={0.5}>
              <View style={styles.button}>
                <Text style={styles.textButton}>Like All</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
              <View style={styles.button}>
                <Text style={styles.textButton}>Like All</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.viewCard}>
          <Image style={styles.imageCard} source={{ uri: "https://cdn.pixabay.com/photo/2023/04/23/19/29/daisies-7946594_1280.jpg" }} />
          <View style={styles.viewRowCard}>
            <View style={styles.viewLike}>
              <TouchableOpacity activeOpacity={0.5}>
                <View style={styles.button}>
                  <Text style={styles.textButton}>Like All</Text>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity activeOpacity={0.5}>
              <View style={styles.button}>
                <Text style={styles.textButton}>Like All</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
              <View style={styles.button}>
                <Text style={styles.textButton}>Like All</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.viewCard}>
          <Image style={styles.imageCard} source={{ uri: "https://cdn.pixabay.com/photo/2023/04/23/19/29/daisies-7946594_1280.jpg" }} />
          <View style={styles.viewRowCard}>
            <View style={styles.viewLike}>
              <TouchableOpacity activeOpacity={0.5}>
                <View style={styles.button}>
                  <Text style={styles.textButton}>Like All</Text>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity activeOpacity={0.5}>
              <View style={styles.button}>
                <Text style={styles.textButton}>Like All</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
              <View style={styles.button}>
                <Text style={styles.textButton}>Like All</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
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
    marginRight: responsiveWidth(7)
  },
  button: {
    width: responsiveWidth(25),
    height: responsiveHeight(4),
    backgroundColor: 'blue',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textButton: {
    fontWeight: '600',
    color: 'white'
  },
  containerList: {
    marginTop: responsiveHeight(2),
  },
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

export default App;
