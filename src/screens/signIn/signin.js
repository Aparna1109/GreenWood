import React, { useState, useEffect } from "react";
import { View, Image, TextInput, TouchableOpacity, Text, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { styles } from "./style";
import { COLORS } from "../../utils/colors";



function SignIn({ navigation }) {

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setenteredPassword] = useState('');
  const [userList, setUserList] = useState([]);
  
  let userdata = {
    userEmail: enteredEmail,
    userPassword: enteredPassword,
  }

  function EmailHandler(emailtext) {
    setEnteredEmail(emailtext);
  }

 function PasswordHandler(passtext) {
    setenteredPassword(passtext);
  }

  function ButtonHandler() {
    validate();
    if (userList) {
      let find = userList.filter((item) => (item.userEmail == userdata.userEmail) && (item.userPassword == userdata.userPassword));
       if (find?.length) {
        navigation.navigate('Stores');
       } else {
         Alert.alert('user not exist, please Signup first');
         navigation.navigate('SignUp');
       }
     }
    }

    const getUserList = async () => {
      let list = await AsyncStorage.getItem('usersdata');
      console.log("JSON.parse(list) +++ >>> ", JSON.parse(list));
     setUserList(JSON.parse(list));
   }

   useEffect(() => {
      getUserList();
   }, [])


   function validate() {
    let reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     if (reg.test(enteredEmail) == false) {
      Alert.alert("Email is not correct");
      return false;
    } else {
      console.log("Email is correct");
    }

     let regnum = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
     if (regnum.test(enteredPassword) == false) {
       Alert.alert("please enter a valid password");
      return;
     } else {
      console.log("Password is correct");
    }
   }

    return (
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.logo} source={require('../../assets/images/appicon.png')} resizeMode={'contain'} />
        </View>

        <View style={{ marginTop: 56 }}>
          <TextInput style={styles.email} placeholder="E-MAIL ADDRESS"  onChangeText={EmailHandler}/>
          <TextInput style={styles.email} placeholder="PASSWORD"  onChangeText={PasswordHandler}/>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.signButton} onPress={ButtonHandler}>
            <Text style={styles.signText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.passwordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footerContainer}>
          <TouchableOpacity style={{ marginBottom: 40 }} onPress={() => navigation.goBack()}>
            <Text style={styles.goText}>{"<< Go Back"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

export default SignIn;