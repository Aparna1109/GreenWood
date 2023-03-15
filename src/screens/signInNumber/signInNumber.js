import React, { useState, useRef } from "react";
import { View, Image, TouchableOpacity, Text, Alert, } from "react-native";
import { styles } from "./style";
import ReactNativeModal from "react-native-modal";
import OTPTextView from 'react-native-otp-textinput';
import PhoneInput from "react-native-phone-number-input";
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/FontAwesome';

function SignInNumber({ navigation }) {

  const [value, setValue] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [code, setCode] = useState('');
  const [confirm, setConfirm] = useState(null);
  // const phoneInput = useRef(null);

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    
  };

  const requestOTP = async () => {
    if(phoneNumber){
      toggleModal();
    }else{
      Alert.alert("please enter phone number");
      return;
    }

    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    console.log("confirmation +++++ >>>> ", confirmation);
    setConfirm(confirmation);
  }

  const signIn = async () => {
    try {
      await confirm.confirm(code);
      toggleModal();
      navigation.navigate('TabNavigator');
      // console.log("Signed in");
    } catch (error) {
      Alert.alert("Invalid Code");
      // console.log('Invalid code.');
    }
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.logo} source={require('../../assets/images/appicon.png')} resizeMode={'contain'} />
      </View>

      <PhoneInput
        // ref={phoneInput}
        defaultValue={value}
        defaultCode="IN"
        layout="first"
        onChangeText={(text) => {
          setValue(text);
        }}
        onChangeFormattedText={(text) => {
          setPhoneNumber(text);
        }}
        countryPickerProps={{ withAlphaFilter: true }}
        withShadow
        autoFocus
        containerStyle={{ marginTop: 40, marginBottom: 20 }}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.signInButton} onPress={requestOTP}>
          <Text style={styles.signInText}>Request For OTP</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footerContainer}>
        <TouchableOpacity style={{ marginBottom: 40 }} onPress={() => navigation.goBack()}>
          <Text style={styles.goText}>{"<< Go Back"}</Text>
        </TouchableOpacity>
      </View>
       
      <ReactNativeModal isVisible={isModalVisible}>
        <View style={styles.mainModalContainer}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
            <Text style={styles.emailModalText}>Email Verification Code</Text>
            <Icon name="close" size={20} color="black" onPress={toggleModal} />
          </View>



          <OTPTextView
            defaultValue={code}
            handleTextChange={(value) => setCode(value)}
            containerStyle={styles.textInputContainer}
            textInputStyle={styles.roundedTextInput}
            // tintColor='blue'
            // offTintColor='black'
            inputCount={6}
            inputCellLength={1}
          />




          <TouchableOpacity
            // onPress={toggleModal} 
            onPress={signIn}
            style={styles.signButton}>
            <Text style={styles.signText}>Sign in</Text>
          </TouchableOpacity>

        </View>
      </ReactNativeModal>
    </View>
  )
}

export default SignInNumber;