import React from "react";
import { FlatList, View, Text, ImageBackground } from "react-native";
import { styles } from "../style";



const dealsData=[
  {
    id:1,
    image:'https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/202204/1._Bhujangasana_-_GettyImages--1200x1414.jpg?bLqGf4IJ0ee9N.k5DXDAiaW0DNZL8Gai',
    title:'GOLDS GYM',
    date:'Exp. 15 Jun 2019 ',
    discount:'15% OFF on Cardio & Yoga',
    yeardata:'on Yearly Subscription',
  },

  {
    id:2,
    image:'https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/202204/1._Bhujangasana_-_GettyImages--1200x1414.jpg?bLqGf4IJ0ee9N.k5DXDAiaW0DNZL8Gai',
    title:'GOLDS GYM',
    date:'Exp. 15 Jun 2019 ',
    discount:'15% OFF on Cardio & Yoga',
    yeardata:'on Yearly Subscription',
  }
]

const renderDeals=({item}) => {
  return(
    <View style={styles.dealsContainer}>
      <View style={styles.dealsImageContainer}>
        <ImageBackground style={styles.dealsImage} source={{uri:item.image}}>
          <View style={styles.imageTextContainer}>
            <Text style={styles.imageTitleText}>{item.title}</Text>
            <Text style={styles.imageDateText}>{item.date}</Text>
          </View>
        </ImageBackground>
      </View>

          <View style={styles.discountContainer}>
            <Text style={styles.dicountText}>{item.discount}</Text>
            <Text style={styles.yearData}>{item.yeardata}</Text>
          </View>
       
      <View>

      </View>
    </View> 
  )
}

function DealsList(){
  return(
    <FlatList
    data={dealsData}
    renderItem={renderDeals}
    horizontal
    showsHorizontalScrollIndicator={false} 
    />
  )
}

export default DealsList;