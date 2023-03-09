import React from "react";
import { View, ImageBackground, Text, StyleSheet } from "react-native";
import { COLORS } from "../../utils/colors";
import { Fonts } from "../../utils/fontFamily";

function CardWithImage({ item,}){
  return(
    <>
    <View style={[styles.eventContainer,]}>
      <View style={styles.eventImageContainer}>
        <ImageBackground style={[styles.eventImage,]} 
        source={{uri:item.image}}>
            {/* <View style={{ backgroundColor: 'red',}}>
              <Text>{item.month}</Text>
              <Text>{item.date}</Text>
            </View> */}
        </ImageBackground>
      </View>

      <View style={[styles.eventDetailContainer,]}>
        <Text style={styles.titleText}>{item.title}</Text>

        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>{item.description}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>

      </View>
    </View>
  </>
  )
}


const styles = StyleSheet.create({
  eventContainer:{
    height:110,
    width:354,
    flexDirection:'row',
    // borderWidth:2,
    borderRadius:5,
    overflow:'hidden',
    marginHorizontal:4,
    marginTop:16,
    // backgroundColor: 'red',
  },


  eventImageContainer:{
    width: 100, 
    height: 110,
    borderRadius:5, 
  },

  eventImage:{
    height:110, 
    borderRadius:5,
    justifyContent:'flex-end'
  },

  eventDetailContainer:{
    width:245, 
    height:110, 
    justifyContent:'center', 
    paddingLeft:15,
    backgroundColor: COLORS.white,
  },

  titleText:{
    fontSize:15, 
    fontFamily:Fonts.poppinsSemiBold, 
    letterSpacing:0.42
  },

  descriptionContainer:{
    paddingRight:10, 
    marginTop:4
  },
  
  descriptionText:{
    fontSize:11, 
    letterSpacing:0.31, 
    fontFamily:Fonts.poppinsRegular, 
    color:COLORS.brownishGrey
  },

  price:{
    fontSize:11, 
    letterSpacing:0.31, 
    fontFamily:Fonts.poppinsRegular
  },

})


export default CardWithImage;