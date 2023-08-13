import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {
  AppImages,
  fontFamily,
  height,
  responsiveFontSize,
  width,
} from '../../assets/utilities';

const Home = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#fff',
      }}>
      <View>
        <SafeAreaView
          style={{
            backgroundColor: '#2A4BA0',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: width * 0.045,
            }}>
            <Text
              style={{
                fontFamily: fontFamily.appTextSemibold,
                color: '#fff',
                fontSize: responsiveFontSize * 0.2,
              }}>
              Hey, Halal
            </Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                navigation.navigate('Cart');
              }}>
              <FastImage
                resizeMode="contain"
                source={AppImages.cartIcon}
                style={{
                  width: width * 0.085,
                  height: width * 0.085,
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: width * 0.9,
              backgroundColor: '#153075',
              alignItems: 'center',
              flexDirection: 'row',
              alignSelf: 'center',
              borderRadius: 1000,
              marginTop: height * 0.03,
            }}>
            <View
              style={{
                width: '14%',
                alignItems: 'flex-end',
              }}>
              <Image
                source={AppImages.searchIcon}
                resizeMode="contain"
                style={{
                  width: width * 0.05,
                  height: width * 0.05,
                }}
              />
            </View>

            <TextInput
              style={{
                width: '86%',
                borderRadius: 1000,
                fontFamily: fontFamily.appTextMedium,
                color: '#fff',
                fontSize: responsiveFontSize * 0.125,
                paddingVertical: height * 0.02,
                paddingLeft: width * 0.035,
                // backgroundColor: 'red',
              }}
              placeholder="Search products or store"
              placeholderTextColor={'#8891A5'}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: width * 0.05,
              marginTop: height * 0.034,
              marginBottom: height * 0.012,
            }}>
            <View>
              <Text
                style={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  fontFamily: fontFamily.appTextBold,
                  fontSize: responsiveFontSize * 0.1,
                }}>
                DELIVERY TO
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: height * 0.002,
                }}>
                <Text
                  style={{
                    color: '#F8F9FB',
                    fontFamily: fontFamily.appTextMedium,
                    fontSize: responsiveFontSize * 0.12,
                  }}>
                  Green Way 3000, Sylhet
                </Text>
                <Image
                  source={AppImages.dropDownIcon}
                  resizeMode="contain"
                  style={{
                    width: width * 0.026,
                    height: width * 0.015,
                    marginLeft: width * 0.03,
                    // backgroundColor: 'red',
                  }}
                />
              </View>
            </View>
            <View>
              <Text
                style={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  fontFamily: fontFamily.appTextBold,
                  fontSize: responsiveFontSize * 0.1,
                }}>
                WITHIN
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: height * 0.002,
                }}>
                <Text
                  style={{
                    color: '#F8F9FB',
                    fontFamily: fontFamily.appTextMedium,
                    fontSize: responsiveFontSize * 0.12,
                  }}>
                  1 Hour
                </Text>
                <Image
                  source={AppImages.dropDownIcon}
                  resizeMode="contain"
                  style={{
                    width: width * 0.026,
                    height: width * 0.015,
                    marginLeft: width * 0.03,
                    // backgroundColor: 'red',
                  }}
                />
              </View>
            </View>
          </View>
        </SafeAreaView>

        <View style={{marginTop: height * 0.03}}>
          <FlatList
            data={[1, 2, 3, 4, 5, 6]}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    backgroundColor: index % 2 == 0 ? '#F9B023' : '#E4DDCB',
                    marginLeft: width * 0.05,
                    paddingVertical: height * 0.028,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: width * 0.055,
                    borderRadius: width * 0.04,
                  }}>
                  <Image
                    source={AppImages.placeholderImg}
                    resizeMode="contain"
                    style={{
                      width: width * 0.17,
                      height: width * 0.17,
                      tintColor: '#fff',
                    }}
                  />
                  <View
                    style={{
                      marginLeft: width * 0.12,
                      marginRight: width * 0.02,
                    }}>
                    <Text
                      style={{
                        fontFamily: fontFamily.appTextLight,
                        color: '#fff',
                        fontSize: responsiveFontSize * 0.18,
                      }}>
                      Get
                    </Text>
                    <Text
                      style={{
                        fontFamily: fontFamily.appTextExtraBold,
                        color: '#fff',
                        fontSize: responsiveFontSize * 0.21,
                      }}>
                      50% OFF
                    </Text>
                    <Text
                      style={{
                        fontFamily: fontFamily.appTextMedium,
                        color: '#fff',
                        fontSize: responsiveFontSize * 0.11,
                      }}>
                      On first 03 order
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
        <Text
          style={{
            fontFamily: fontFamily.appTextRegular,
            color: '#1E222B',
            fontSize: responsiveFontSize * 0.23,
            marginLeft: width * 0.05,
            marginVertical: height * 0.025,
          }}>
          Recommended
        </Text>
        <View style={{}}>
          <FlatList
            data={[1, 2, 3, 4, 5, 6]}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    backgroundColor: '#F8F9FB',
                    marginLeft: width * 0.05,
                    paddingTop: height * 0.026,
                    paddingBottom: height * 0.014,
                    alignItems: 'center',
                    paddingHorizontal: width * 0.05,
                    borderRadius: width * 0.04,
                  }}>
                  <Image
                    source={AppImages.placeholderImg}
                    resizeMode="contain"
                    style={{
                      width: width * 0.17,
                      height: width * 0.17,
                      tintColor: '#A1ABC0',
                    }}
                  />
                  <View
                    style={{
                      width: width * 0.26,
                      height: height * 0.001,
                      backgroundColor: '#E0E2EE',
                      marginTop: height * 0.019,
                    }}
                  />
                  <Text
                    style={{
                      alignSelf: 'flex-start',
                      marginTop: height * 0.004,
                      fontFamily: fontFamily.appTextSemibold,
                      color: '#1E222B',
                      fontSize: responsiveFontSize * 0.115,
                    }}>
                    {index % 2 == 0 ? 'Fresh Lemon' : 'Green Tea'}
                  </Text>
                  <Text
                    style={{
                      alignSelf: 'flex-start',
                      fontFamily: fontFamily.appTextRegular,
                      color: '#616A7D',
                      fontSize: responsiveFontSize * 0.115,
                    }}>
                    Organic
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      backgroundColor: '#fff',
                      width: width * 0.26,
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 1,
                      },
                      shadowOpacity: 0.22,
                      shadowRadius: 2.22,

                      elevation: 3,
                      borderRadius: 1000,
                      marginTop: height * 0.01,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          marginLeft: width * 0.02,
                          fontFamily: fontFamily.appTextRegular,
                          color: '#8891A5',
                          fontSize: responsiveFontSize * 0.1,
                        }}>
                        Unit
                      </Text>
                      <Text
                        style={{
                          marginLeft: width * 0.01,
                          fontFamily: fontFamily.appTextSemibold,
                          color: '#3F3F3F',
                          fontSize: responsiveFontSize * 0.11,
                        }}>
                        $12
                      </Text>
                    </View>

                    <Image
                      source={AppImages.bluePlus}
                      style={{width: width * 0.07, height: width * 0.07}}
                    />
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
      <View
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          elevation: 3,
        }}>
        <FastImage
          source={AppImages.dummyTabBar}
          resizeMode="stretch"
          style={{
            width: width,
            height: height * 0.128,

            // backgroundColor: 'red',
          }}
        />
        <View
          style={{
            width: width,
            position: 'absolute',
            height: height * 0.028,
            backgroundColor: '#F8F7FB',
            bottom: 0,
          }}></View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
