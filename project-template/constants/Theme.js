const Colors = {
  blackColor: 'black',
  whiteColor: '#fff',
  blackBlueColor: '#384259',
  redColor: '#e74c3c',
  redBitDarkColor: '#c0392b',
  greenColor: '#2ecc71',
  greenBitDark: '#27ae60',
  greanSEAColor: '#1abc9c',
  greanSEABitDarkColor: '#16a085',
  grayColor: '#95a5a6',
  grayBitDarkColor: '#7f8c8d',
  blueColor: '#3498db',
  blueBitDarkColor: '#3498db',
  orangeColor: '#e67e22',
  orangeBitDarkColor: '#d35400',
  yellowColor: '#f1c40f',
  yellowBitDarkColor: '#f39c12',
};

const Fonts = {
  authTitle: {
    fontSize: 30,
    fontFamily: 'opnsenBold',
    color: Colors.greenColor,
    backgroundColor: 'transparent',
  },
  authWelcomeTitle: {
    fontSize: 24,
    fontFamily: 'opnsenBold',
    color: Colors.blackBlueColor,
    backgroundColor: 'transparent',
  },
  authWelcomeText: {
    fontSize: 16,
    fontFamily: 'opnsenLight',
    color: Colors.blackBlueColor,
    backgroundColor: 'transparent',
    textAlign: 'center',
    width: '70%',
  },
  buttonAuth: {
    fontSize: 14,
    color: Colors.whiteColor,
    fontFamily: 'opnsenBold',
  },
};

export default {
  Colors,
  Fonts,
};
