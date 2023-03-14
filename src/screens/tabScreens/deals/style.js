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

detailContainer:{
  width:'100%', 
  // flex:1,
  backgroundColor: COLORS.white, 
  marginTop:20, 
  flexDirection:'row'
},

imageContainer:{
  height: 90, 
  width:90
},

image:{
  height: 90, 
  width:90
},

dataContainer:{
  flex:1,
  paddingHorizontal:14, 
  paddingVertical:10,

},

gymDataContainer:{
  flex:1, 
  flexDirection:'row', 
  marginTop:13, 
  justifyContent: 'space-between',
},

discountText:{
  fontFamily:Fonts.poppinsExtraBold,
  fontSize:13,
  letterSpacing:0.36,
  color:COLORS.greyishBrown,
},

memberText:{
  fontFamily:Fonts.poppinsRegular,
  fontSize:11,
  color:COLORS.greyishBrown,
},

gymText:{
  fontFamily:Fonts.poppinsSemiBold,
  fontSize:11,
  letterSpacing:0.28,
  color:COLORS.seaweedTwo,
},

dateText:{
  fontFamily:Fonts.poppinsRegular,
  fontSize:11,
  color:COLORS.greyishBrown,
  letterSpacing:0.31
}


})

export {styles} 
