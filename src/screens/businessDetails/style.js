import { StyleSheet } from "react-native"
import { COLORS } from "../../utils/colors"
import { Fonts } from "../../utils/fontFamily"
const styles = StyleSheet.create({

  mainContainer:{
    flex:1,
    
  },


  imageContainer:{
    height:316,
    backgroundColor:'red',
    justifyContent:'flex-end',
  },

  icon:{
    height:80,
    width:80,
    marginBottom:15,
    marginLeft: 15,
  },

  detailsContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:15,
    marginTop:15
  },

  goldTextContainer:{
    color:COLORS.darkSkyBlue,
    fontFamily:Fonts.poppinsSemiBold,
    fontSize:17,
    letterSpacing:0.47,
    
  },

  FitnessTextContainer:{
    fontFamily:Fonts.poppinsSemiBold,
    color:COLORS.brownishGrey,
    fontSize:13,
    letterSpacing:0.37,
    marginTop: 2,
  },

  openTextContainer:{
    fontFamily:Fonts.poppinsExtraBold,
    color:COLORS.lawnGreen,
    fontSize:11,
    letterSpacing:0.31,
    marginTop:4,
  },

  timeTextContainer:{
    fontFamily:Fonts.poppinsRegular,
    color:COLORS.brownishGrey,
    fontSize:11,
    letterSpacing:0.31
  },

  ratingContainer:{
    flexDirection:'row',
    backgroundColor:COLORS.lawnGreen,
    width:56,
    height:24,
    justifyContent:'space-evenly',
    alignItems:'center',
    
  },

  ratingText:{
    fontSize:13,
    color:COLORS.white,
    fontFamily:Fonts.poppinsSemiBold,
  },

  reviewText:{
    fontFamily:Fonts.poppinsExtraBold,
    fontSize:9,
    letterSpacing:0.25,
    color:COLORS.warmGrey,
    marginTop:3,
  },
  contactContainer:{
    backgroundColor:COLORS.whiteTwo,
    flexDirection:'row',
    marginTop:16,
    paddingVertical:13,
    width:'100%',
    justifyContent:'space-between'
  },

  flaticonContainer:{
    height:35,
    width:16,
    marginLeft:15
  },

  distanceContainer:{
    flexDirection:'row',
    alignItems:'center',
    width:'50%',
  },

  distanceText:{
    fontFamily:Fonts.poppinsRegular,
    fontSize:11,
    letterSpacing:0.31,
   
  },

  streetText:{
    fontFamily:Fonts.poppinsRegular,
    fontSize:9,
    letterSpacing:0.25
  },

  communication:{
    flexDirection:'row',
   
    width:'50%',
    alignItems:'center',
    justifyContent:'space-evenly'
  },

  phoneContainer:{
    height:30,
    width:60,
    backgroundColor:COLORS.aquaBlue,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:3,
  },

  phoneIcon:{
    height:16,
    width:16
  },

  chatContainer:{
    height:30,
    width:60,
    backgroundColor:COLORS.seaweed,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:3,
  },
    
  chatIcon:{
    height:16,
    width:19,
  },

  offeringContainer:{
    marginTop:15,
    marginLeft:20,
  },

  offeringText:{
    fontFamily:Fonts.poppinsSemiBold,
    fontSize:15,
    letterSpacing:0.36,
    color:COLORS.greyishBrown,
  },

  flatImageContainer:{
    margin: 10, 
    height:102, 
    width:165, 
    overflow:'hidden', 
    borderRadius:6,
    
  },

  exerciseImage:{
    height:102,
    width:165,
    justifyContent:'center',
    alignItems:'center',
  },

  textContainer: {
    height: 102,
    width: 165,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent:'center',
    alignItems:'center'
  },


  exerciseText:{
    fontFamily:Fonts.poppinsRegular,
    color:COLORS.white,
    letterSpacing:0.36,

  },

  flatExerciseContainer:{
    marginTop:10,
    justifyContent:'center', 
    paddingBottom: 20  
  },


  mainOfferContainer:{
   
    flexDirection:'row',
    overflow:'hidden',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    borderRadius:2,
    borderWidth:0.2
  },


  offerImage:{
    height:90,
    width:90,
  },

  discountTextContainer:{
    backgroundColor:COLORS.white,
    paddingLeft:16,
    paddingTop:19,
    flex: 1
    
  },

  descriptionText:{
    fontFamily:Fonts.poppinsExtraBold,
    color:COLORS.greyishBrown,
    letterSpacing:0.36
  },

  yearText:{
    fontFamily:Fonts.poppinsSemiBold,
    fontSize:11,
    color:COLORS.greyishBrown,
    letterSpacing:0.36,
  },

  dateText:{
    fontFamily:Fonts.poppinsRegular,
    fontSize:9,
    color:COLORS.brownishGrey,
    letterSpacing:0.25
  },

  aboutTextContainer:{
    paddingHorizontal: 20,
  },

  aboutTextPara:{
    fontFamily:Fonts.poppinsRegular,
    color:COLORS.greyishBrown,
    marginTop:9,
    fontSize:10,
    letterSpacing:0.28,
    
  },

  reviewMainContainer:{
    flexDirection:'row', 
    flex:1,  
    paddingHorizontal:7, 
    paddingVertical:10, 
    marginTop:5,
    justifyContent:'space-between'
  },

  reviewContainer:{
    width:'100%', 
    backgroundColor:COLORS.white, 
    flexDirection:'row',  
    borderRadius:4, 
    paddingVertical:10, 
    paddingHorizontal:20
  },

  reviewImageTextContainer:{
    width:'70%', 
    flexDirection:'row'
  },

  reviewImageContainer:{
    height:40, 
    width:40, 
    justifyContent:'center', 
    alignItems:'center', 
    borderRadius:20, 
    borderWidth:1, 
    borderColor:COLORS.greyishBrown
  },

  reviewImage:{
    height:30,
    width:30,
    borderRadius:20
  },

  reviewTextContainer:{
    marginLeft:10, 
    justifyContent:'center'
  },

  reviewNameText:{
    fontFamily:Fonts.poppinsSemiBold, 
    fontSize:11, 
    letterSpacing:0.31, 
    color:COLORS.greyishBrown
  },

  reviewDetailText:{
    fontFamily:Fonts.poppinsRegular, 
    fontSize:9, 
    letterSpacing:0.25, 
    color:COLORS.greyishBrown
  },

  ratingMainContainer:{
    width:'30%', 
    justifyContent:'space-between', 
    alignItems:'center'
  },

  ratingDateContainer:{
    fontSize:8, 
    fontFamily:Fonts.poppinsSemiBold, 
    letterSpacing:0.22, 
    color:COLORS.greyishBrown
  },

  ratingTextContainer:{
    flexDirection:'row', 
    justifyContent: 'center', 
    alignItems:'center'
  },

  ratingTextPara:{
    color:COLORS.lawnGreen, 
    fontFamily:Fonts.poppinsSemiBold, 
    fontSize:11, 
    letterSpacing:0.28
  },

  buttonContainer:{
    width:'100%', 
    height:60, 
    backgroundColor:COLORS.seaweedTwo, 
    justifyContent: 'center', 
    alignItems:'center'
  },

  buttonText:{
    fontSize:17, 
    letterSpacing:0.5,
    color:COLORS.white, 
    fontFamily:Fonts.poppinsRegular
  },
})

export {styles}