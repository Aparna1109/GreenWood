import React from "react";
import { FlatList, View, Text, ImageBackground } from "react-native";
import { COLORS } from "../../../utils/colors";
import { Fonts } from "../../../utils/fontFamily";
import { styles } from "../style";
import Icon from 'react-native-vector-icons/FontAwesome';
const storeData = [
  {
    id: 1,
    image: 'https://d17wm0hdpuulng.cloudfront.net/images/dist/golds-gym-AQE9T2.jpeg',
    name: 'Golds gym',
    type: 'Fitness & Training',
    distance: '3.7 km',
    offers: '3 OFFERS',
    rating: '4.5'
  },

  {
    id: 2,
    image: 'https://content3.jdmagicbox.com/comp/pune/u3/020pxx20.xx20.190204150959.q5u3/catalogue/gold-s-gym-wakad-pune-gyms-1sdadeh3v7.jpg',
    name: 'Golds gym',
    type: 'Fitness & Training',
    distance: '3.7 km',
    offers: '3 OFFERS',
    rating: '4.5'
  },
]


const renderStore = ({ item }) => {
  return (
    <View style={styles.storesContainer}>
      <ImageBackground style={styles.storesImage} source={{ uri: item.image }} resizeMode={'cover'}>
        <View style={styles.ratingContainer}>
          <Icon name="star" size={7} color={COLORS.white} />
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>
      </ImageBackground>

      <View style={styles.dataContainer}>
        <View style={{ marginLeft: 9, marginTop: 9 }}>
          <Text style={styles.gymText}>{item.name}</Text>
          <Text style={styles.fitText}>{item.type}</Text>
        </View>

        <View style={{ marginRight: 9, marginTop: 9 }}>
          <Text style={styles.fitText}>{item.distance}</Text>
          <Text style={styles.offferText}>{item.offers}</Text>
        </View>
      </View>
    </View>

  )


}


function StoresList() {
  return (
    <FlatList
      data={storeData}
      renderItem={renderStore}
      horizontal
      showsHorizontalScrollIndicator={false} 
      />
  )
}

export default StoresList;