import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "storage";

export const storeData = async (value: string) => {
  try {
    await AsyncStorage.setItem(KEY, value);
  } catch (error) {
    console.error(error);
  }
};

export const getData = async () => {
  try {
    return await AsyncStorage.getItem(KEY);
  } catch (error) {
    console.error(error);
  }
};
