import React from "react";
import { View, Image,Text, FlatList } from "react-native";
import { styles } from "../style";

const businessData=[
  {
    id:1,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhveq2PigpErjM4TTG8oKVpWgMKTJBlhmfSg&usqp=CAU',
    description:'15% OFF on Cardio & Yoga',
    year:'On Yearly Subscription' ,
    date:'Exp. 15 Jun 2019',
  },

  {
    id:2,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQENZWCo4071P0xrXzfHOMZWI7YP_nk6DRtrw&usqp=CAU',
    description:'Flat 25% OFF on Freeletics',
    year:'New Members Only ',
    date:'Exp. 15 Jun 2019',
  }
]


const renderOffers = ({item}) =>{
  return(
    <View style={{paddingHorizontal:20, marginTop:10}}>

 
    <View style={styles.mainOfferContainer}>  
     
        <View>
            <Image style={styles.offerImage} source={{uri:item.image}}/>
        </View>
          <View style={{flex:1}}>
            <View style={styles.discountTextContainer}>
                <Text style={styles.descriptionText}>{item.description}</Text>
                <Text style={styles.yearText}>{item.year}</Text>
                <Text style={styles.dateText}>{item.date}</Text>
            </View>
        </View>
    
    </View>
    </View>
  )
}

function DiscountList(){
  return(
    <>
      <View>
          <View style={styles.offeringContainer}>
          <Text style={styles.offeringText}>Todays Offers & Discounts</Text>
       </View>
    </View>

      <View>
        <FlatList
          data={businessData}
          renderItem={renderOffers}
          keyExtractor={(item) => `${item.id}`}
          scrollEnabled={false}
        />
      </View>
  </>
  )
}

export default DiscountList;