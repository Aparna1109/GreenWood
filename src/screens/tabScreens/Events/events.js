import React, {useState} from 'react';

import { View, Text, StyleSheet, TextInput, FlatList, Image, TouchableOpacity, ImageBackground } from "react-native";
import { styles } from './style';
import { COLORS } from "../../../utils/colors";
import Card from '../../../components/card';
import CardWithImage from '../../../components/cardWithImage';
const Data = [
  {
    id:1,
    image: require('../../../assets/images/gamepad.png'),
    title:'Entertainment',
  },

  {
    id:2,
    image: require('../../../assets/images/heartbeat.png'),
    title:'Medical',
  },

  {
    id:3,
    image: require('../../../assets/images/bulb.png'),
    title:'Technology',
  }

]


const eventData = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1578736641330-3155e606cd40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2x1YnxlbnwwfHwwfHw%3D&w=1000&q=80',
    date: 'Jul 13',
    title: 'LOVE + PROPAGANDA SATURDAYS (seriesgrp)',
    description: 'Davies Symphony Hall, San Francisco, CA',
    price: 'Starts at $809.10',
  },

  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1578736641330-3155e606cd40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2x1YnxlbnwwfHwwfHw%3D&w=1000&q=80',
    month: 'Jul',
    date:'13',
    title: 'LOVE + PROPAGANDA SATURDAYS (seriesgrp)',
    description: 'Davies Symphony Hall, San Francisco, CA',
    price: 'Starts at $809.10',
  },

  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1578736641330-3155e606cd40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2x1YnxlbnwwfHwwfHw%3D&w=1000&q=80',
    month: 'Jul',
    date:'13',
    title: 'LOVE + PROPAGANDA SATURDAYS (seriesgrp)',
    description: 'Davies Symphony Hall, San Francisco, CA',
    price: 'Starts at $809.10',
  },

  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1578736641330-3155e606cd40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2x1YnxlbnwwfHwwfHw%3D&w=1000&q=80',
    month: 'Jul',
    date:'13',
    title: 'LOVE + PROPAGANDA SATURDAYS (seriesgrp)',
    description: 'Davies Symphony Hall, San Francisco, CA',
    price: 'Starts at $809.10',
  },

]

function Events() {

const [selectedId, setSelectedId] = useState(Data[0].id);
// const [filteredData, setfilteredData] = useState(DATA[0].data);

  const renderEvent = ({ item }) => {

    const backgroundColor = item.id === selectedId ? COLORS.seaweed : COLORS.white;
    const textColor = item.id === selectedId ? COLORS.white : COLORS.greyishBrown;

    return(
      <Card
        item={item}
        tintColor={textColor}
        textColor={textColor}
        backgroundColor={backgroundColor}
        onPress={() => { setSelectedId(item.id) }}
      />
    )
  }


  const renderList = ({ item }) => {
    return (

      <CardWithImage
        item={item}
      />
    )  
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.storeContainer}>
        <View style={styles.storeTextContainer}>
          <Text style={styles.storeText}>Events</Text>
        </View>
        <TouchableOpacity>
          <Image source={require('../../../assets/images/location.png')} style={styles.map} />
        </TouchableOpacity>
      </View>

      <View style={{ marginTop:15}}>
        <FlatList 
          data={Data}
          renderItem={renderEvent} 
          horizontal 
          showsHorizontalScrollIndicator={false}/>
      </View>

      <View style={{marginTop:30}}>
      <FlatList
        data={eventData}
        renderItem={renderList}
        keyExtractor={(item) => `${item.id}`}
        // horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>


    </View>



  )
}

export default Events;