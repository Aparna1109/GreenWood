import React from "react";
import { FlatList, Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../style";
import Icon from 'react-native-vector-icons/FontAwesome';

const Data=[
  {
    id:1,
    image:require('../../../assets/images/dining.png'),
    title:'Dining',
    backgroundColor:'#ef7081',
  },


  {
    id:2,
    image:require('../../../assets/images/gamepad.png'),
    title:'Entertainment',
    backgroundColor:'#59d191',
  },

  {
    id:3,
    image:require('../../../assets/images/heartbeat.png'),
    title:'Medical',
    backgroundColor:'#58c9de',
  },

  {
    id:4,
    image:require('../../../assets/images/bulb.png'),
    title:'Technology',
    backgroundColor:'#ef7945',
  },

  {
    id:5,
    image:require('../../../assets/images/dental.png'),
    title:'Dental',
    backgroundColor:'#f3b163',
  },
]

const firstarray=Data.slice(0,1);
const secondarray=Data.slice(1);



const renderExplor = ({ item }) => {
  return (
    <View style={{ height:70, width: 120, borderRadius:4, backgroundColor: item.backgroundColor, justifyContent: 'center', alignItems: 'center', marginVertical:5, marginLeft:10}}>
      <Image style={{ height: 27, width: 29, tintColor: 'white' }} source={item.image} />
      <Text style={{ color: 'white' }}>{item.title}</Text>
    </View>
  )
}


function ExplorerList(){
  return(
    <ScrollView  horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ alignItems:'center'}} style={{marginTop:14, flexDirection: 'row', paddingHorizontal:5}}>  

    <View style={{height:150, width:150, backgroundColor:'#ef7081', justifyContent:'center', alignItems:'center', borderRadius:4}}>
      <Image style={{height:27, width:29, tintColor:'white'}} source={firstarray[0].image}/>
      <Text style={{color:'white'}}>{firstarray[0].title}</Text>
    </View>

    <View>
    <FlatList
      data={secondarray}
      renderItem={renderExplor}
      keyExtractor={(item) => `${item.id}`}
      numColumns={2}
      
      // scrollEnabled={true}
      // horizontal 
      />
    </View>
       
      
    
    </ScrollView>
 
  )
}

export default ExplorerList;