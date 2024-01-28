import * as Font from 'expo-font';

export const loadFonts = async () => {
  await Font.loadAsync({
    'Poppins': require('./Poppins-Regular.ttf'),
    // Sesuaikan dengan nama file dan lokasi font Anda
  });
};