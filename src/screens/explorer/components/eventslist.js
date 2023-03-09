import React from "react";
import { FlatList, View, Text, ImageBackground } from "react-native";
import CardWithImage from "../../../components/cardWithImage";
import { COLORS } from "../../../utils/colors";
import { Fonts } from "../../../utils/fontFamily";
import { styles } from "../style";

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

]

const renderEvent = ({ item, height, width }) => {
  return (
    // <>
    //   <View style={styles.eventContainer}>
    //     <View style={styles.eventImageContainer}>
    //       <ImageBackground style={styles.eventImage} 
    //       source={{uri:item.image}}>
    //           {/* <View style={{ backgroundColor: 'red',}}>
    //             <Text>{item.month}</Text>
    //             <Text>{item.date}</Text>
    //           </View> */}
    //       </ImageBackground>
    //     </View>

    //     <View style={styles.eventDetailContainer}>
    //       <Text style={styles.titleText}>{item.title}</Text>

    //       <View style={styles.descriptionContainer}>
    //         <Text style={styles.descriptionText}>{item.description}</Text>
    //         <Text style={styles.price}>{item.price}</Text>
    //       </View>

    //     </View>
    //   </View>
    // </>
    <CardWithImage
    item={item}
    />

  )
}

function EventsList() {
  return (



    <>
      <FlatList
        data={eventData}
        renderItem={renderEvent}
        keyExtractor={(item) => `${item.id}`}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </>




  )
}

export default EventsList;