import { StyleSheet } from "react-native";
import { Fonts } from "../../../utils/fontFamily";
import { COLORS } from "../../../utils/colors";

const styles=  StyleSheet.create({
  mainContainer:{
    flex:1,
    paddingHorizontal:18,
    backgroundColor:'#f6f6f6',
  },

  storeContainer:{
    marginTop: 78,
    // backgroundColor: 'pink',
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent:'space-between',
    // paddingHorizontal:10
  },

  storeTextContainer:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'space-around',
    // backgroundColor:'red',
    
  }, 

  storeText:{
    fontFamily:Fonts.poppinsRegular,
    fontSize:30,
    letterSpacing:0.83,
    color:COLORS.greyishBrown,
    marginLeft:5
  },

  map:{
    width:30,
    height:30,
    tintColor:COLORS.greyishBrown,
    marginRight:10
  },


  eventContainer:{
    height:110,
    width:354,
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

export {styles}