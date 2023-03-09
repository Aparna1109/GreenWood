import React, { useState, useEffect } from "react";
import { View, Image, TextInput, TouchableOpacity, Text, Alert } from "react-native";
import { styles } from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";

function SignUp({navigation}){

  const [enteredEmail, setEnteredEmail]=useState('');
  const [enteredPassword, setenteredPassword]=useState('');
  const [ConfirmPassword, setConfirmPassword]=useState('');
  const [userList, setUserList]=useState([]);

  let userdata = {
    userEmail:enteredEmail,
    userPassword:enteredPassword,
  }

  function EmailHandler(emailtext){
    setEnteredEmail(emailtext);
  }

  function PasswordHandler(passtext){
    setenteredPassword(passtext);
  }

  function ConfirmHandler(confirmtext){
    setConfirmPassword(confirmtext);
  }

  function ButtonHandler(){
    let reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let regnum=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    
    if(reg.test(enteredEmail) == false){
      Alert.alert("Email is not correct");
      return false;
    }

    if(regnum.test(enteredPassword) == false){
      Alert.alert("please enter a valid password");
      return;
    }else {
      if(enteredPassword == ConfirmPassword){
        console.log("Password match");
      }else{
        Alert.alert("Not match");
        return;
      }
    }
    // validate();
    if(userList) {
      let arr = userList;
      let find = userList.filter((item) => item.userEmail == userdata.userEmail);
      if(find?.length) {
        Alert.alert('user exist, sign in with the existing email');
        navigation.navigate('SignIn');
      } else {
        arr = [...arr, userdata];
        AsyncStorage.setItem('usersdata', JSON.stringify(arr));
        navigation.navigate('TabNavigator')
      }
    } else {
      let newUserData = [userdata];
      AsyncStorage.setItem('usersdata', JSON.stringify(newUserData));
      navigation.navigate('TabNavigator')
    }
  }

  const getUserList = async () => {

    let list=await AsyncStorage.getItem('usersdata');
    console.log("JSON.parse(list) +++ >>> ", JSON.parse(list));
    setUserList(JSON.parse(list));
  }


  useEffect(() => {
    getUserList();
}, [])




  return(
    <View style={styles.mainContainer}>
    <View style={styles.imageContainer}>
      <Image style={styles.logo} source={require('../../assets/images/appicon.png')} resizeMode={'contain'} />
    </View>

    <View style={{ marginTop: 56 }}>
        <TextInput value={enteredEmail} style={styles.email} placeholder="E-MAIL ADDRESS" onChangeText={EmailHandler}/>
        <TextInput value={enteredPassword} style={styles.email} placeholder="PASSWORD" onChangeText={PasswordHandler}/>
        <TextInput value={ConfirmPassword} style={styles.email} placeholder="CONFIRM PASSWORD" onChangeText={ConfirmHandler}/>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.signButton} onPress={ButtonHandler}>
          <Text style={styles.signText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footerContainer}>
        <TouchableOpacity style={{ marginBottom: 40 }} onPress={() =>  navigation.goBack()}>
          <Text style={styles.goText}>{"<< Go Back"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SignUp;








  

 

  
    

