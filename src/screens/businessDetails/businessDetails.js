import React from "react";
import { ImageBackground, View, Image, Text, TouchableOpacity, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from "./style";
import { COLORS } from "../../utils/colors";
import OfferingList from "./components/offeringlist";
import DiscountList from "./components/discountlist";
import en from "../../locales/en";
import ReviewList from "./components/reviewlist";

const image = { uri: 'https://images.indianexpress.com/2020/01/tips-for-gym-beginners_759.jpg' };


function BusinessDetails() {

  return (
    <View style={styles.mainContainer}>
      <ImageBackground style={styles.imageContainer} source={image}>
        <Image style={styles.icon} source={require('../../assets/images/goldicon.png')} />
      </ImageBackground>

      <View style={styles.detailsContainer}>
        <View>
          <Text style={styles.goldTextContainer}>Golds gym</Text>
          <Text style={styles.FitnessTextContainer}>Fitness & Training </Text>
          <Text style={styles.openTextContainer}>OPENED NOW
            <Text style={styles.timeTextContainer}>-10:00 AM - 7:00 PM</Text>
          </Text>
        </View>

        <View>
          <View style={styles.ratingContainer}>
            <Icon name="star" size={10} color={COLORS.white} />
            <Text style={styles.ratingText}>4.5</Text>
          </View>
          <Text style={styles.reviewText}>124 reviews</Text>
        </View>
      </View>

      <View style={styles.contactContainer}>
        <View style={styles.distanceContainer}>
          <Image style={styles.flaticonContainer} source={require('../../assets/images/flaticon.png')} />
          <View style={{ paddingLeft: 10 }}>
            <Text style={styles.distanceText}>Distance 3.7 KM</Text>
            <Text style={styles.streetText}>21 Street, Hamshare</Text>
          </View>
        </View>
        <View style={styles.communication}>
          <TouchableOpacity style={styles.phoneContainer}>
            <Image style={styles.phoneIcon} source={require('../../assets/images/phone.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.chatContainer}>
            <Image style={styles.chatIcon} source={require('../../assets/images/chat.png')} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.flatExerciseContainer}>
        <View>
          <DiscountList />

          <View>
            <View>
              <View style={styles.offeringContainer}>
                <Text style={styles.offeringText}>About Golds Gym</Text>
              </View>
            </View>
            <View style={styles.aboutTextContainer}>
              <Text style={styles.aboutTextPara}>{en.aboutText}</Text>
            </View>
          </View>

          <OfferingList />
          <ReviewList />
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>RATE THIS BUSINESS</Text>
      </TouchableOpacity>

    </View>
  )

}

export default BusinessDetails;