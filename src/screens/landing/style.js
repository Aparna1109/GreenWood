import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/colors";
import { Fonts } from "../../utils/fontFamily";
const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:COLORS.white,
    alignItems:'center',
    flexDirection: 'column',
    paddingHorizontal: 38,
  },
  
  imageContainer:{
     height:213,
     width:'100%',
     marginTop:100,
     alignItems: 'center'
  },

  logo:{
    height:213,
    width:257,
  },
   
  signInButton:{
    width:'100%',
    height:50,
    backgroundColor:COLORS.seaweed,
    alignItems:'center',
    justifyContent: 'center',
    borderRadius:6,
    marginTop:77,
  },

  signInText:{
    fontSize:15,
    color:COLORS.white,
    fontFamily:Fonts.poppinsRegular,
  },

  socialIcons:{
    width:'100%',
    flexDirection:'row',
    justifyContent: 'space-between',
    marginTop:22,
   
  },

  facebookBtn:{
    width:140,
    height:50,
    borderRadius:6,
    flexDirection:'row',
    backgroundColor:'#224f9a',
    justifyContent:'center',
    alignItems:'center',
   
  },
  
  googleBtn:{
    width:140,
    height:50,
    borderRadius:6,
    backgroundColor:'#ed432e',
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'center',
    
  },

  iconsText:{
    fontSize:15,
    color:COLORS.white,
    marginLeft:10,
    fontFamily:Fonts.poppinsRegular,
  },

  footerContainer:{
    flex: 1,
    // flexDirection:'row', 
    // backgroundColor: 'red', 
    justifyContent:'flex-end', 
  },

  footerText:{
    fontSize:15,
    letterSpacing:0.88,
    fontFamily:Fonts.poppinsRegular,
    color:'#828282',
  
  },

  signText:{
    color:COLORS.seaweed,
    fontWeight:'bold',
    fontFamily:Fonts.poppinsRegular,
  }
})

export {styles}