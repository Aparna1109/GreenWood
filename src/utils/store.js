import AsyncStorage from "@react-native-async-storage/async-storage";


export const setData = async (key, data) => {
  try{
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch(e){
    console.log(error);
  }
}

export const getData = async (key) => {
  console.log("++++get key++++", key);
  try{
    await AsyncStorage.getItem(key).then((res) => {
      console.log("++++get data response++++", res);
    }).catch((error) => {
      console.log("error");
    });
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
  