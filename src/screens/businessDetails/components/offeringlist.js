import React from "react";
import { View, Text, TouchableOpacity, ImageBackground, FlatList } from "react-native";
import { styles } from "../style";
const Data = [
  {
    id: 1,
    exercise: 'Cardio',
    image: 'https://static.toiimg.com/photo/94808504.cms',

  },

  {
    id: 2,
    exercise: 'Yoga',
    image: 'https://www.ouranoyoga.com/wp-content/uploads/2022/12/www.ouranoyoga.com_Ourania_Karydis_Cover-1.jpg',
  },

  {
    id: 3,
    exercise: 'Muscle building',
    image: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/320/320769/man-and-woman-lifting-weights-to-strength-train-and-build-muscle.jpg',
  },

  {
    id: 4,
    exercise: 'Strength Training',
    image: 'https://prod-ne-cdn-media.puregym.com/media/809936/benefits-of-hiit.jpg?quality=80&w=992',
  },

]


const renderItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.flatImageContainer}>
      <ImageBackground style={styles.exerciseImage} source={{ uri: item.image }}>
        <View style={styles.textContainer}>
          <Text style={styles.exerciseText}>{item.exercise}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  )
}

function OfferingList() {
  return (
    <>
      <View style={styles.offeringContainer}>
        <Text style={styles.offeringText}>Our Offerings</Text>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <FlatList
          data={Data}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
          numColumns={2}
          scrollEnabled={false}
        />
      </View>
    </>
  )
}

export default OfferingList;

