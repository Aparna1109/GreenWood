import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/colors";
import { Fonts } from "../../utils/fontFamily";
const styles = StyleSheet.create({
  mainContainer:{
    flex:1
  },

  headerContainer:{
    backgroundColor:COLORS.seaweedTwo,
    paddingVertical:30,
    justifyContent:'center', 
    alignItems:'center',
  },

  powerIconContainer:{
    height:21, 
    width:20, 
    alignSelf:'flex-end',  
    marginRight:20
  },

  powerIcon:{
    height:21, 
    width:20
  },

  firstImageContainer:{
    height:150, 
    width:150, 
    borderRadius:150/2,
    borderWidth:0.3, 
    borderColor:'white', 
    justifyContent:'center', 
    alignItems: 'center',
  },

  secondImageContainer:{
    height:125, 
    width:125, 
    backgroundColor:'white', 
    borderRadius:62, 
    justifyContent:'center', 
    alignItems: 'center',
  },

  image:{
    height:122, 
    width:122, 
    borderRadius:122/2
  },

  textContainer:{
    marginTop:20,
  },

  textCornor:{
    fontSize:25, 
    fontFamily:Fonts.poppinsRegular, 
    color:COLORS.white,
  },

  locationTextContainer:{
    flexDirection:'row', 
    justifyContent:'space-evenly', 
    alignItems: 'center', 
    width:230
  },

  locationText:{
    fontFamily:Fonts.poppinsRegular, 
    fontSize:15, 
    color:COLORS.white, 
    letterSpacing:0.41  
  },

  sectionDataContainer:{
    backgroundColor:'white', 
    paddingHorizontal:20, 
    paddingVertical:15, 
    borderColor:COLORS.greyBackground, 
    borderWidth:0.5, 
    justifyContent:'space-between',
    flexDirection:'row',
  },

  sectionItem:{
    fontFamily:Fonts.poppinsRegular, 
    fontSize:13, 
    letterSpacing:0.31,
    color:COLORS.greyishBrown
  },

  sectionHeader:{
    fontFamily:Fonts.poppinsSemiBold, 
    letterSpacing:0.36, 
    backgroundColor:COLORS.greyBackground, 
    color:COLORS.brownishGrey, 
    fontSize: 13, 
    paddingTop:23, 
    paddingLeft:20, 
    paddingBottom:5
  }

  })

  export {styles}