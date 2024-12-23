import * as Keychain from 'react-native-keychain';

const storeSecureData = async (key: string, value: string) => {
  await Keychain.setGenericPassword(key, value);
};

const retrieveSecureData = async (key: string) => {
  const credentials = await Keychain.getGenericPassword();
  return credentials?.password;
};


