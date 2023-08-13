import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {AppImages, height, width} from '../../assets/utilities';
import FastImage from 'react-native-fast-image';

const Onboarding1 = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#FAFBFD',
        justifyContent: 'space-between',
      }}>
      <FastImage
        source={AppImages.onboarding1Img}
        resizeMode="contain"
        style={{
          width: width * 0.77,
          height: height * 0.67,
          alignSelf: 'center',
          marginTop: height * 0.045,
          //   backgroundColor: 'red',
        }}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate('Onboarding2');
        }}
        style={{
          marginBottom: height * 0.015,
        }}>
        <FastImage
          resizeMode="contain"
          source={AppImages.onboarding1Button}
          style={{
            width: width * 0.84,
            height: height * 0.083,
            // backgroundColor: 'red',
            alignSelf: 'center',
            // borderRadius: 1000,
          }}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Onboarding1;

const styles = StyleSheet.create({});
