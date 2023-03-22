import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { Fonts } from "../../utils/fontFamily";
import { COLORS } from "../../utils/colors";
import Icon from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';
import SectionData from "./sectionlist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { clearData } from "../../utils/store";

const image = { uri: 'https://nationaltoday.com/wp-content/uploads/2022/04/41-Roman-Reigns.jpg.webp' };




function More({ navigation }) {


  const clearAsyncStorage = async () => {
    clearData('usersdata');
    navigation.navigate('Landing');
  }


  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.powerIconContainer}>
          <Image style={styles.powerIcon} source={require('../../assets/images/powericon.png')} />
        </View>

        <View style={styles.firstImageContainer}>
          <View style={styles.secondImageContainer}>
            <Image style={styles.image} source={image} />
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textCornor}>John Cornor </Text>
        </View>

        <View style={styles.locationTextContainer}>
          <Icon name="map-marker" size={24} color="white" />
          <Text style={styles.locationText}>51 Street, Hampshire, USA</Text>
        </View>
      </View>

      <SectionData />

      <TouchableOpacity style={{ width: '100%', height: 50, backgroundColor: COLORS.seaweed, alignItems: 'center', justifyContent: 'center', }} onPress={clearAsyncStorage}>
        <Text style={{ fontSize: 15, color: COLORS.white, fontFamily: Fonts.poppinsRegular, }}> Log Out</Text>
      </TouchableOpacity>

    </View>
  );
}

export default More;