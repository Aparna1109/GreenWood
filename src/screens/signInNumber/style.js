import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/colors";
import { Fonts } from "../../utils/fontFamily";

const styles = StyleSheet.create({
  
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    flexDirection: 'column',
    paddingHorizontal: 38
  },

  imageContainer: {
    height: 213,
    marginTop: 100,
    alignItems: 'center'
  },

  logo: {
    height: 213,
    width: 257,
  },

 

  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginTop:30
  },

  signButton: {
    height: 50,
    width: 140,
    backgroundColor: COLORS.seaweed,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6
  },

  signText: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: 15,
    color: COLORS.white,
    letterSpacing: 0.88
  },

  passwordText: {
    color: '#e27c89',
    fontFamily: Fonts.poppinsRegular,
    fontSize: 15,
    letterSpacing: 0.88,
    fontWeight: 'bold',
    fontSize: 13,
    letterSpacing: 0.76
  },

  goText: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: 15,
    letterSpacing: 0.88,
    color: COLORS.brownishGrey,
    fontWeight: 'bold',
    bottom: 55
  },

  footerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    //  marginTop:154,

  },

  goText: {
    color: COLORS.brownishGrey,
    fontFamily: Fonts.poppinsRegular,
    fontSize: 15,
    letterSpacing: 0.88,
    fontWeight: 'bold',
  },

  textInputContainer: {
    marginBottom: 10,
    marginTop:20,
  },

  roundedTextInput: {
    borderRadius: 6,
    borderWidth: 2,
  },

  mainModalContainer:{
    padding:30, 
    width:'100%', 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'white', 
  },

  emailModalText:{
    fontFamily:Fonts.poppinsSemiBold, 
    fontSize:15
  },

})

export {styles}