import React from "react";
import { FlatList, View, Text, ImageBackground } from "react-native";
import { COLORS } from "../../../utils/colors";
import { Fonts } from "../../../utils/fontFamily";
import { styles } from "../style";


const Data=[
  {
    id:1,
    image:'https://wakefitdev.gumlet.io/img/sofa-sets/Recliner/regular/1/FVBL/lifestyle.jpg',
    seller:'By Woodsworth',
    title:'Roger Solid Wood One Seater Sofa…',
    price:'$199.50',
    mrp:'$500',
    discount:'Save $301 (68% off)',
  },

  {
    id:2,
    image:'https://wakefitdev.gumlet.io/img/sofa-sets/Recliner/regular/1/FVBL/lifestyle.jpg',
    seller:'By Woodsworth',
    title:'Roger Solid Wood One Seater Sofa…',
    price:'$199.50',
    mrp:'$500',
    discount:'Save $301 (68% off)',
  },
]


const renderProduct=({item}) => {
  return(
    <View style={styles.productMainContainer}>
      <View style={styles.productImageContainer}>
        <ImageBackground style={styles.productImage} source={{uri:item.image}}>
          <View style={styles.productImageTextContainer}>
            <Text style={styles.productImageText}>{item.seller}</Text>
          </View>
        </ImageBackground>
      </View>

      <View>
        <Text style={styles.productTitleText}>{item.title}</Text>

        <View style={styles.productPriceContainer}>  
          <View style={styles.productDiscountContainer}>
            <Text style={{fontSize:17, fontFamily:Fonts.poppinsSemiBold, color:'#4c8509', letterSpacing:0.41}}>{item.price}</Text>
            <Text style={{fontSize:11, fontFamily:Fonts.poppinsRegular, color:'#868686', letterSpacing:0.41, marginLeft:3}}>{item.mrp}</Text>
           
          </View>

          <View style={{justifyContent: 'center', alignItems: 'center',}}>
            <Text style={{fontSize:11, fontFamily:Fonts.poppinsRegular, letterSpacing:0.27}}>{item.discount}</Text>
          </View>
        </View>
       
      </View>
    </View>
  )
}


function ProductsList(){
  return(
    <FlatList
    data={Data}
    renderItem={renderProduct}
    keyExtractor={(item) => `${item.id}`}
    horizontal
    />
    
  ) 
}

export default ProductsList;