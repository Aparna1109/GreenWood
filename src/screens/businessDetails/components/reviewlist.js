import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { COLORS } from "../../../utils/colors";
import { Fonts } from "../../../utils/fontFamily";
import { styles } from "../style";
import Icon from 'react-native-vector-icons/FontAwesome';

const reviewData=[
  {
    id:1,
    image:'https://resizing.flixster.com/CbqVJ1ytK31FEiKPnndNscCvYTo=/218x280/v2/https://flxt.tmsimg.com/assets/487578_v9_ba.jpg',
    name:'John Mishiwas',
    description:'Its Awesome ',
    date:'12 Jun',
    rating:'4.5',
  }
]

const renderReview = ({item}) => {
  return(
    <View>
        <View style={styles.reviewMainContainer}>

            <View style={styles.reviewContainer}>
                <View style={styles.reviewImageTextContainer}>
                    <View style={styles.reviewImageContainer}>
                      <Image style={styles.reviewImage} source={{uri:item.image}}/>
                    </View>

                    <View style={styles.reviewTextContainer}>
                      <Text style={styles.reviewNameText}>{item.name}</Text>
                      <Text style={styles.reviewDetailText}>{item.description}</Text>
                    </View>
                </View>


                
                 <View style={styles.ratingMainContainer}>
                    <Text style={styles.ratingDateContainer}>{item.date}</Text>
                    <View style={styles.ratingTextContainer}>
                    <Icon name="star" size={8} color={COLORS.lawnGreen} />
                      <Text style={styles.ratingTextPara}>{item.rating}</Text>
                    </View>
                </View>
            </View>
          
        </View>
    </View>
  )
}


function ReviewList (){
  return(
    <>

      <View style={{marginTop:15, marginLeft:25}}>
        <Text style={styles.offeringText}>Rating & Reviews</Text>
      
    </View>
    <View style={{paddingHorizontal:20}}>
    <FlatList
        data={reviewData}
        renderItem={renderReview}
        keyExtractor={(item) => `${item.id}`}
        scrollEnabled={false}
      />
    </View>
   
    </>
  )
}

export default ReviewList;