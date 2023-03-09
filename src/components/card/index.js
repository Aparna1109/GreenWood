import React from "react";
import { TouchableOpacity, Image, Text, StyleSheet } from "react-native";
import { COLORS } from "../../utils/colors";
import { Fonts } from "../../utils/fontFamily";

function Card({ item, textColor, backgroundColor, tintColor, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, { backgroundColor: backgroundColor }]}>
      <Image source={item.image} style={[styles.image, { tintColor: tintColor }]} />
      <Text style={[styles.text, { color: textColor }]}>{item.title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.seaweed,
    paddingTop: 10,
    alignItems: 'center',
    width: 120,
    height: 70,
    borderRadius: 4,
    marginHorizontal: 5,
  },

  image: {
    height: 27,
    width: 29,
    tintColor: COLORS.greyishBrown
  },

  text: {
    fontSize: 11,
    color: COLORS.white,
    letterSpacing: 0.31,
    fontFamily: Fonts.poppinsRegular,
    marginTop: 5
  },

})

export default Card;

