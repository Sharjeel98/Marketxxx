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
        backgroundColor: '#2A4BA0',
        justifyContent: 'space-between',
      }}>
      <FastImage
        resizeMode="contain"
        source={AppImages.onboarding2Img}
        style={{
          width: width * 0.77,
          height: height * 0.67,
          alignSelf: 'center',
          // marginTop: height * 0.01,
          // backgroundColor: 'red',
        }}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate('App');
        }}
        style={{
          marginBottom: height * 0.015,
        }}>
        <FastImage
          resizeMode="contain"
          source={AppImages.onboarding2Button}
          style={{
            width: width * 0.66,
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
