import React, { useState, useEffect } from "react";
import { View, Image, TextInput, TouchableOpacity, Text, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import database from '@react-native-firebase/database';
import { styles } from "./style";
import { COLORS } from "../../utils/colors";
import auth from '@react-native-firebase/auth';
import { setData } from "../../utils/store";


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

  // const storeToken = async (userid) => {
  //   console.log(">>>>>store fn>>userid>>>>", userid);
  //  await AsyncStorage.setItem('usersdata', JSON.stringify(userid));
  //  navigation.navigate('TabNavigator');
  // }

  const signin = (email, password) => {
    try {
      auth().signInWithEmailAndPassword(email, password).then((res) => {
       
        if(res){
          const userValue = res.user;
          const userId = userValue.uid;
            // storeToken(userId);
        setData('usersdata', JSON.stringify({userId: userId}));
        navigation.navigate('TabNavigator');
          Alert.alert("Login Successful");
        }
      }).catch((err) => {
        let error = String(err);
        if(error.includes("auth/user-not-found")){
          Alert.alert("User not Exist, Please Signup");
          navigation.navigate('SignUp');
        }
      });
    } catch (error) {
     Alert.alert("error");
    }
  };


  // const Submit = async () => {
  //   database()
  //     .ref('/userDetails')
  //     .push({
  //       email: enteredEmail,
  //       password: enteredPassword,
  //     })
    // .then(() => console.log('Data set.'));
  // }


  async function ButtonHandler() {
    validate();
    signin(enteredEmail, enteredPassword);
    // Submit();
    // console.log("validate++=>", )
    // if (userList) {
    //   let find = userList.filter((item) => (item.userEmail == userdata.userEmail) && (item.userPassword == userdata.userPassword));

    //   // console.log("find====>", find);
    //    if (find?.length) {
    //     navigation.navigate('TabNavigator');
    //     await AsyncStorage.setItem("userloggedin", JSON.stringify(userdata));

    //    } else {
    //      Alert.alert('user not exist, please Signup first');
    //      navigation.navigate('SignUp');
    //    }
    //  } else{
    //     Alert.alert('user not exist, please Signup first');
    //     navigation.navigate('SignUp');
    //  }

  }

  const getUserList = async () => {

    // let list = await AsyncStorage.getItem('usersdata');
    // console.log("JSON.parse(list) +++ >>> ", JSON.parse(list));
    // setUserList(JSON.parse(list));

    // return database()
    // .ref('/userDetails').on('value', function (snapshot) {
    //     console.log('+++++++++++++++++++',snapshot.val())
    // })
  }

  useEffect(() => {
    getUserList();
  }, [])



  function validate() {
    let reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (reg.test(enteredEmail) == false) {
      Alert.alert("Email is not correct");
      return false;
    }

    let regnum = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if (regnum.test(enteredPassword) == false) {
      Alert.alert("please enter a valid password");
      return;
    }
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.logo} source={require('../../assets/images/appicon.png')} resizeMode={'contain'} />
      </View>

      <View style={{ marginTop: 56 }}>
        <TextInput style={styles.email} placeholder="E-MAIL ADDRESS" onChangeText={EmailHandler} />
        <TextInput style={styles.email} placeholder="PASSWORD" onChangeText={PasswordHandler} />
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