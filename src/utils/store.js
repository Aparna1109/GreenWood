import AsyncStorage from "@react-native-async-storage/async-storage";


export const setData = async (key, data) => {
  try{
    await AsyncStorage.setItem(key, data);
  } catch(e){
    console.log(error);
  }
}

export const getData = async (key) => {
  try{
    await AsyncStorage.getItem(key);
  } catch(e){
    console.log(error);
  }
}


export const clearData = async (key) => {
  try{
    await AsyncStorage.removeItem(key);
  } catch(e){
    console.log(error);
  }
}
  