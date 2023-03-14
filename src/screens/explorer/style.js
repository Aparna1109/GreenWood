import { StyleSheet } from "react-native";
import { Fonts } from "../../utils/fontFamily";
import { COLORS } from "../../utils/colors";

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    // backgroundColor:'pink',
    paddingHorizontal:15,
  },

  explorerContainer:{
   marginTop:46
    // backgroundColor:'red'
  },

  explorerText:{
    fontFamily:Fonts.poppinsRegular, 
    fontSize:30, 
    color:COLORS.greyishBrown, 
    letterSpacing:0.31,
    
  },

  explorerItemContainer:{
    
    height:70, 
    width:120,
    justifyContent:'center',
    alignItems: 'center',
  },

  commonTextContainer:{
    flexDirection:'row', 
    // backgroundColor: 'cyan', 
    justifyContent:'space-between', 
    paddingHorizontal:4,
    marginTop: 34
  },

  commonText:{
    fontFamily: Fonts.poppinsSemiBold, 
    fontSize:15, 
    letterSpacing:0.42, 
    color:COLORS.greyishBrown
  },

  viewText:{
    color:COLORS.seaweedTwo, 
    fontFamily:Fonts.poppinsRegular, 
    fontSize:13, 
    letterSpacing:0.36,
    marginLeft:15
  },

  eventContainer:{
    height:110,
    width:318,
    flexDirection:'row',
    // borderWidth:2,
    borderRadius:5,
    overflow:'hidden',
    marginHorizontal:4,
    marginTop:16
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
    width:218, 
    height:110, 
    justifyContent:'center', 
    paddingHorizontal:15,
    backgroundColor: COLORS.white,
  },

  titleText:{
    fontSize:15, 
    fontFamily:Fonts.poppinsSemiBold, 
    letterSpacing:0.41
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

  storesContainer:{
    height:179,
    width:261,
    backgroundColor:COLORS.white,
    borderRadius:5,
    marginTop: 16,
    marginHorizontal:4,
    overflow:'hidden'
  },

  storesImage:{
    height:115,
  },

  ratingContainer:{
    flexDirection:'row',
    backgroundColor:COLORS.lawnGreen,
    width:36,
    borderRadius:2,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'flex-end',
    marginTop:10,
    marginRight:10
  },

  ratingText:{
    fontFamily:Fonts.poppinsSemiBold,
    color:COLORS.white,
    fontSize:11,
    letterSpacing:0.3,
 
  },

  dataContainer:{
    flexDirection:'row',
    justifyContent:'space-between', 
    width:'100%',
    // backgroundColor:'pink',
  },

  gymText:{
    fontSize:13,
    letterSpacing:0.36,
    color:'black',
    fontFamily:Fonts.poppinsSemiBold,
  },

  fitText:{
    fontSize:11,
    letterSpacing:0.31,
    fontFamily:Fonts.poppinsSemiBold,
    color:COLORS.greyishBrown
  },

  offferText:{
    color:COLORS.lawnGreen,
    fontSize:10,
    letterSpacing:0.28,
    fontFamily:Fonts.poppinsSemiBold,
  },

  dealsContainer:{
    height:168,
    width:201, 
    backgroundColor:'white', 
    marginTop:16,
    marginHorizontal:6, 
    borderRadius:5
  },

  dealsImageContainer:{
    height:115, 
    width:201, 
    overflow:'hidden',
    borderTopRightRadius:5, 
    borderTopLeftRadius:5 
  },

  dealsImage:{
    height:115, 
    width:201, 
    justifyContent:'flex-end'
  },

  imageTextContainer:{
    backgroundColor:'black', 
    height:30, 
    flexDirection:'row', 
    justifyContent:'space-between',    
    alignItems:'center', 
    paddingHorizontal:7, 
    opacity:0.5,
  },

  imageTitleText:{
    fontSize:10, 
    fontFamily:Fonts.poppinsSemiBold, 
    letterSpacing:0.28, 
    color:COLORS.white
  },

  imageDateText:{
    fontFamily:Fonts.poppinsRegular, 
    fontSize:9, 
    color:COLORS.white, 
    letterSpacing:0.25
  },

  discountContainer:{
    justifyContent:'center',
    flex:1,
  },

  dicountText:{
    fontFamily:Fonts.poppinsSemiBold, 
    fontSize:13, 
    letterSpacing:0.36, 
    color:COLORS.greyishBrown, 
    paddingLeft:10
  },

  yearData:{
    fontFamily:Fonts.poppinsRegular, 
    fontSize:11, 
    letterSpacing:0.36, 
    color:COLORS.greyishBrown, 
    paddingLeft:10
  },

  productMainContainer:{
    width:315, 
    height:218, 
    backgroundColor: 'white', 
    marginHorizontal:4,
    marginTop:16,
    borderRadius:5,
    overflow:'hidden',
    marginBottom: 29,
  },

  productImageContainer:{
    width:315, 
    height:155,

  },

  productImage:{
    width:315, 
    height:155, 
    justifyContent:'flex-end',
    
    
  },

  productImageTextContainer:{
    backgroundColor: '#21211e', 
    opacity:0.7, 
    marginLeft:4, 
    marginBottom:5, 
    justifyContent:'center', 
    width:'34%', 
    alignItems:'center' 
  },

  productImageText:{
    color:'white',
    padding:5, 
    fontFamily:Fonts.poppinsSemiBold, 
    fontSize:11, 
    letterSpacing:0.27
  },

  productTitleText:{
    marginTop:9, 
    marginLeft:10, 
    fontSize:13, 
    fontFamily:Fonts.poppinsRegular
  },

  productPriceContainer:{
    flexDirection: 'row', 
    justifyContent:'space-between', 
    paddingLeft:10, 
    paddingRight:10, 
    marginTop:6
  },

  productDiscountContainer:{
    justifyContent:'center', 
    flexDirection: 'row', 
    alignItems: 'center',
  },

  priceText:{
    fontSize:17, 
    fontFamily:Fonts.poppinsSemiBold, 
    color:'#4c8509', 
    letterSpacing:0.41
  },

  mrpText:{
    fontSize:11, 
    fontFamily:Fonts.poppinsRegular, 
    color:'#868686', 
    letterSpacing:0.41, 
    marginLeft:3,
    textDecorationLine:'line-through',
    textDecorationColor:COLORS.brownishGrey,
  },
   
  



})

export {styles}