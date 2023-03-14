import React, {useState, useRef} from "react";
import { View, Image, TextInput, TouchableOpacity, Text,  } from "react-native";
import { styles } from "./style";
import ReactNativeModal from "react-native-modal";
import OTPTextView from 'react-native-otp-textinput';
import PhoneInput from "react-native-phone-number-input";


function SignInNumber({navigation }){

  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  // const phoneInput = useRef<PhoneInput>(null);

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  
  return(
    <View style={styles.mainContainer}>
    <View style={styles.imageContainer}>
      <Image style={styles.logo} source={require('../../assets/images/appicon.png')} resizeMode={'contain'} />
    </View>

    <PhoneInput
          //  ref={phoneInput}
           defaultValue={value}
           defaultCode="IN"
           layout="first"
           onChangeText={(text) => {
             setValue(text);
           }}
           onChangeFormattedText={(text) => {
             setFormattedValue(text);
           }}
           countryPickerProps={{ withAlphaFilter: true }}
           withShadow
           autoFocus
           containerStyle={{  marginTop:40, marginBottom:20 }}
         />

    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.signButton} onPress={toggleModal}>
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

    <ReactNativeModal isVisible={isModalVisible}>
        <View style={styles.mainModalContainer}>
          <Text style={styles.emailModalText}>Email Verification Code</Text>

          <OTPTextView 
          handleTextChange={(value) => {}}
          containerStyle={styles.textInputContainer}
          textInputStyle={styles.roundedTextInput}
          // tintColor='blue'
          // offTintColor='black'
          inputCount={4}
          inputCellLength={1}
          />      

        <TouchableOpacity onPress={toggleModal} style={styles.signButton}>
          <Text style={styles.signText}>Submit</Text>
        </TouchableOpacity>

        </View>
      </ReactNativeModal>
  </View>
  )
}

export default SignInNumber;