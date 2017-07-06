import { Font } from 'expo';

const cachedFonts = fonts =>
  fonts.map(font => Font.loadAsync(font));

export const fontAssets = cachedFonts([
  {
    opnsen: require('../assets/fonts/OpenSans-Regular.ttf'),
  },
  {
    opnsenBold: require('../assets/fonts/OpenSans-Bold.ttf'),
  },
  {
    opnsenLight: require('../assets/fonts/OpenSans-Light.ttf'),
  },
  {
    opnsenItalic: require('../assets/fonts/OpenSans-Italic.ttf'),
  },
]);
