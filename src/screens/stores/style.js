import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { COLORS } from "../../utils/colors";
import { Fonts } from "../../utils/fontFamily";
const styles=StyleSheet.create({
  mainContainer:{
    flex:1,
    paddingHorizontal:15,
    backgroundColor:COLORS.backGround,
  },

  storeContainer:{
    marginTop: 78,
    // backgroundColor: 'pink',
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent:'space-between',
    paddingHorizontal:10
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
    letterSpacing:0.88,
    lineHeight:43,
    color:COLORS.greyishBrown,
    marginLeft:12
  },


  arrow:{
    height:18,
    width:28,
  },

  map:{
    width:25,
    height:25,
    tintColor:COLORS.greyishBrown,
  },


  item: {
    backgroundColor:COLORS.seaweed,
    paddingTop:10,
    alignItems:'center',
    width:120,
    height:70,
    borderRadius:4,
    marginHorizontal: 5,
  },

  title: {
    fontSize: 11,
    color:COLORS.white,
    letterSpacing:0.31,
    fontFamily:Fonts.poppinsRegular,
  },

  detailsContainer:{
    height:200,
    backgroundColor:COLORS.white,
    borderRadius:5,
    marginTop: 30,
    overflow:'hidden'
  },

  detailsImage:{
    height:147,
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
    letterSpacing:0.38,
    color:'black',
    fontFamily:Fonts.poppinsSemiBold,
  },

  fitText:{
    fontSize:11,
    letterSpacing:0.31,
    fontFamily:Fonts.poppinsSemiBold,
    color:COLORS.brownishGrey
  },

  offferText:{
    color:COLORS.lawnGreen,
    fontSize:10,
    letterSpacing:0.28,
    fontFamily:Fonts.poppinsSemiBold,
  }

  
})

export {styles}