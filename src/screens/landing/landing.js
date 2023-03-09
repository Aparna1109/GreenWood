import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from "../../utils/colors";
import { styles } from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";

// import { COLORS } from "../../utils/colors";
function Landing({ navigation }) {

  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.logo} source={require('../../assets/images/appicon.png')} resizeMode={'contain'} />
      </View>
      
      <TouchableOpacity style={styles.signInButton} onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.signInText}>Sign in with Email</Text>
      </TouchableOpacity>

      <View style={styles.socialIcons}>
        <TouchableOpacity style={styles.facebookBtn}>
          <Icon name="facebook" size={23} color={COLORS.white} />
          <Text style={styles.iconsText}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.googleBtn}>
          <Icon name="google-plus" size={23} color={COLORS.white} />
          <Text style={styles.iconsText}>Google</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footerContainer}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 55 }}>
          <Text style={styles.footerText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Landing;



