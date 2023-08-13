import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  AppImages,
  fontFamily,
  height,
  responsiveFontSize,
  width,
} from '../../assets/utilities';

const Cart = ({navigation}) => {
  const [count1, setCount1] = useState(3);
  const [count2, setCount2] = useState(5);
  const [count3, setCount3] = useState(1);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: '#fff',
          justifyContent: 'space-between',
        }}
        bounces={false}>
        <View>
          <View
            style={{
              backgroundColor: '#FFC83A',
            }}>
            <Image
              source={AppImages.percentCover}
              style={{
                width: width,
                height: Dimensions.get('screen').height * 0.359,
                resizeMode: 'stretch',
              }}
            />
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                navigation.goBack();
              }}
              style={{
                position: 'absolute',
                paddingTop: 52,
                paddingLeft: 30,
              }}>
              <Image
                source={AppImages.backIcon}
                style={{
                  width: width * 0.11,
                  height: width * 0.11,
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: width * 0.9,
              alignSelf: 'center',
              marginTop: height * 0.04,
              borderBottomWidth: width * 0.002,
              borderColor: '#EBEBFB',
              paddingBottom: height * 0.025,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={AppImages.placeholderImg}
                style={{
                  resizeMode: 'contain',
                  width: width * 0.09,
                  height: width * 0.09,
                  tintColor: 'gray',
                }}
              />
              <View style={{marginLeft: width * 0.08}}>
                <Text
                  style={{
                    fontFamily: fontFamily.appTextMedium,
                    color: '#1E222B',
                    fontSize: responsiveFontSize * 0.12,
                  }}>
                  Bananas
                </Text>
                <Text
                  style={{
                    fontFamily: fontFamily.appTextRegular,
                    color: '#1E222B',
                    fontSize: responsiveFontSize * 0.12,
                  }}>
                  $ {12 * count1}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  if (count1 != 1) {
                    setCount1(count1 - 1);
                  }
                }}
                style={{
                  backgroundColor: '#F8F9FB',
                  width: width * 0.1,
                  height: width * 0.1,
                  borderRadius: 1000,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                activeOpacity={0.7}>
                <Image
                  source={AppImages.smallMinus}
                  style={{
                    resizeMode: 'contain',
                    width: width * 0.07,
                    height: width * 0.07,
                  }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  marginHorizontal: width * 0.03,
                  fontFamily: fontFamily.appTextMedium,
                  color: '#1E222B',
                }}>
                {count1}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setCount1(count1 + 1);
                }}
                style={{
                  backgroundColor: '#F8F9FB',
                  width: width * 0.1,
                  height: width * 0.1,
                  borderRadius: 1000,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                activeOpacity={0.7}>
                <Image
                  source={AppImages.smallPlus}
                  style={{
                    resizeMode: 'contain',
                    width: width * 0.07,
                    height: width * 0.07,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: width * 0.9,
              alignSelf: 'center',
              marginTop: height * 0.04,
              borderBottomWidth: width * 0.002,
              borderColor: '#EBEBFB',
              paddingBottom: height * 0.025,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={AppImages.placeholderImg}
                style={{
                  resizeMode: 'contain',
                  width: width * 0.09,
                  height: width * 0.09,
                  tintColor: 'gray',
                }}
              />
              <View style={{marginLeft: width * 0.08}}>
                <Text
                  style={{
                    fontFamily: fontFamily.appTextMedium,
                    color: '#1E222B',
                    fontSize: responsiveFontSize * 0.12,
                  }}>
                  Package 1
                </Text>
                <Text
                  style={{
                    fontFamily: fontFamily.appTextRegular,
                    color: '#1E222B',
                    fontSize: responsiveFontSize * 0.12,
                  }}>
                  $ {5.5 * count2}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  if (count2 != 1) {
                    setCount2(count2 - 1);
                  }
                }}
                style={{
                  backgroundColor: '#F8F9FB',
                  width: width * 0.1,
                  height: width * 0.1,
                  borderRadius: 1000,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                activeOpacity={0.7}>
                <Image
                  source={AppImages.smallMinus}
                  style={{
                    resizeMode: 'contain',
                    width: width * 0.07,
                    height: width * 0.07,
                  }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  marginHorizontal: width * 0.03,
                  fontFamily: fontFamily.appTextMedium,
                  color: '#1E222B',
                }}>
                {count2}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setCount2(count2 + 1);
                }}
                style={{
                  backgroundColor: '#F8F9FB',
                  width: width * 0.1,
                  height: width * 0.1,
                  borderRadius: 1000,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                activeOpacity={0.7}>
                <Image
                  source={AppImages.smallPlus}
                  style={{
                    resizeMode: 'contain',
                    width: width * 0.07,
                    height: width * 0.07,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: width * 0.9,
              alignSelf: 'center',
              marginTop: height * 0.04,
              borderBottomWidth: width * 0.002,
              borderColor: '#EBEBFB',
              paddingBottom: height * 0.025,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={AppImages.placeholderImg}
                style={{
                  resizeMode: 'contain',
                  width: width * 0.09,
                  height: width * 0.09,
                  tintColor: 'gray',
                }}
              />
              <View style={{marginLeft: width * 0.08}}>
                <Text
                  style={{
                    fontFamily: fontFamily.appTextMedium,
                    color: '#1E222B',
                    fontSize: responsiveFontSize * 0.12,
                  }}>
                  Package 2
                </Text>
                <Text
                  style={{
                    fontFamily: fontFamily.appTextRegular,
                    color: '#1E222B',
                    fontSize: responsiveFontSize * 0.12,
                  }}>
                  $ {3 * count3}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  if (count3 != 1) {
                    setCount3(count3 - 1);
                  }
                }}
                style={{
                  backgroundColor: '#F8F9FB',
                  width: width * 0.1,
                  height: width * 0.1,
                  borderRadius: 1000,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                activeOpacity={0.7}>
                <Image
                  source={AppImages.smallMinus}
                  style={{
                    resizeMode: 'contain',
                    width: width * 0.07,
                    height: width * 0.07,
                  }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  marginHorizontal: width * 0.03,
                  fontFamily: fontFamily.appTextMedium,
                  color: '#1E222B',
                }}>
                {count3}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setCount3(count3 + 1);
                }}
                style={{
                  backgroundColor: '#F8F9FB',
                  width: width * 0.1,
                  height: width * 0.1,
                  borderRadius: 1000,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                activeOpacity={0.7}>
                <Image
                  source={AppImages.smallPlus}
                  style={{
                    resizeMode: 'contain',
                    width: width * 0.07,
                    height: width * 0.07,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: width * 0.9,
              alignSelf: 'center',
              marginVertical: height * 0.015,
            }}>
            <Text
              style={{
                fontFamily: fontFamily.appTextMedium,
                color: '#2A4BA0',
                fontSize: responsiveFontSize * 0.11,
              }}>
              + 3 More
            </Text>
            <Text
              style={{
                fontFamily: fontFamily.appTextMedium,
                color: '#2A4BA0',
                fontSize: responsiveFontSize * 0.11,
              }}>
              Edit
            </Text>
          </View>
        </View>

        <View
          style={{
            width: width * 0.95,
            alignSelf: 'center',
            backgroundColor: '#F8F9FB',
            borderTopRightRadius: width * 0.08,
            borderTopLeftRadius: width * 0.08,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: width * 0.05,
              marginTop: height * 0.018,
            }}>
            <Text
              style={{
                fontFamily: fontFamily.appTextRegular,
                color: '#616A7D',
                fontSize: responsiveFontSize * 0.125,
              }}>
              Subtotal
            </Text>
            <Text
              style={{
                fontFamily: fontFamily.appTextMedium,
                color: '#1E222B',
                fontSize: responsiveFontSize * 0.125,
              }}>
              $ {3 * count3 + 5.5 * count2 + 12 * count1}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: width * 0.05,
              marginTop: height * 0.018,
            }}>
            <Text
              style={{
                fontFamily: fontFamily.appTextRegular,
                color: '#616A7D',
                fontSize: responsiveFontSize * 0.125,
              }}>
              Delivery
            </Text>
            <Text
              style={{
                fontFamily: fontFamily.appTextMedium,
                color: '#1E222B',
                fontSize: responsiveFontSize * 0.125,
              }}>
              $ 2.00
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: width * 0.05,
              marginTop: height * 0.018,
            }}>
            <Text
              style={{
                fontFamily: fontFamily.appTextRegular,
                color: '#616A7D',
                fontSize: responsiveFontSize * 0.125,
              }}>
              Subtotal
            </Text>
            <Text
              style={{
                fontFamily: fontFamily.appTextMedium,
                color: '#1E222B',
                fontSize: responsiveFontSize * 0.125,
              }}>
              $ {3 * count3 + 5.5 * count2 + 12 * count1 + 2}
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              marginBottom: height * 0.03,
              marginTop: height * 0.015,
            }}>
            <Image
              source={AppImages.proceedButton}
              style={{
                resizeMode: 'contain',
                width: width * 0.87,
                height: height * 0.07,
                // backgroundColor: 'red',
                alignSelf: 'center',
              }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
