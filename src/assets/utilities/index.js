// IMAGES (PNG/JPG etc)
import {Dimensions} from 'react-native';
const IMAGE_DIR = '../images/';

// IMAGES

const AppImages = {
  onboarding1Img: require(IMAGE_DIR + 'onboarding1Img.png'),
  onboarding2Img: require(IMAGE_DIR + 'onboarding2Img.png'),
  onboarding2Button: require(IMAGE_DIR + 'onboarding2Button.png'),
  onboarding1Button: require(IMAGE_DIR + 'onboarding1Button.png'),
  dummyTabBar: require(IMAGE_DIR + 'dummyTabBar.png'),
  proceedButton: require(IMAGE_DIR + 'proceedButton.png'),
  smallMinus: require(IMAGE_DIR + 'smallMinus.png'),
  smallPlus: require(IMAGE_DIR + 'smallPlus.png'),
  percentCover: require(IMAGE_DIR + 'percentCover.png'),
  backIcon: require(IMAGE_DIR + 'backIcon.png'),
  bluePlus: require(IMAGE_DIR + 'bluePlus.png'),
  placeholderImg: require(IMAGE_DIR + 'placeholderImg.png'),
  dropDownIcon: require(IMAGE_DIR + 'dropDownIcon.png'),
  searchIcon: require(IMAGE_DIR + 'searchIcon.png'),
  cartIcon: require(IMAGE_DIR + 'cartIcon.png'),
};

// SVGS

// import whiteLogo from '../icons/whiteLogo.svg';

const SvgIcons = {
  // whiteLogo,
};

// FONT FAMILY

const fontFamily = {
  appTextRegular: 'Manrope-Regular',
  appTextSemibold: 'Manrope-SemiBold',
  appTextBold: 'Manrope-Bold',
  appTextExtraBold: 'Manrope-ExtraBold',
  appTextMedium: 'Manrope-Medium',
  appTextLight: 'Manrope-Light',
};

// COLORS

const colors = {
  // appPrimary: '#848489',
  // appBlack: '#25282A',
  // appCyan: '#A1E6E0',
  // appGreen: '#8CD47E',
  // appRed: '#FF6961',
  // appSolidBlack: '#000',
  // appSolidWhite: '#fff',
};

// DIMENSIONS

// ACCORDING TO WINDOW HEIGHT / WIDTH ( NORMAL USAGE )

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const responsiveFontSize = (height + width) / 10;

// ACCORDING TO SCREEN HEIGHT / WIDTH ( USE WHEN NEEDED )

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('window').height;
const responsiveScreenFontSize = (screenHeight + screenWidth) / 10;

const apiUtility = {
  // baseURL: "http://192.168.18.88:8000/api",  // local
  // imageURL:"http://192.168.18.88:8000/images/" // local
};

export {
  AppImages,
  SvgIcons,
  fontFamily,
  colors,
  apiUtility,
  width,
  height,
  responsiveFontSize,
};
