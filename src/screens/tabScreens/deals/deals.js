import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { COLORS } from "../../../utils/colors";
import { styles } from "./style";
import Card from "../../../components/card";

const data = [
  {
    id:1,
    image: require('../../../assets/images/gamepad.png'),
    title:'Entertainment',
  },

  {
    id:2,
    image: require('../../../assets/images/heartbeat.png'),
    title:'Medical',
  },

  {
    id:3,
    image: require('../../../assets/images/bulb.png'),
    title:'Technology',
  }

]


const dataItem=[
  {
    id:1,
    image:'https://cdn.getthegloss.com/files/2022/03/0d208fb0-9cee-11ec-af5d-9d314eed0cf6-freeletics.jpg',
    discountData:'Flat 25% OFF on Freeletics',
    memberData:'New Members Only',
    gymData:'GOLD’s GYM',
    date:'Exp. 15 Jun 2019',
  },

  {
    id:2,
    image:'https://guides.wiggle.co.uk/sites/default/files/styles/770x480crop/public/hero/2017cohe02_w18_training_br_2283_35.jpg?itok=VUldSSr9',
    discountData:'Flat 25% OFF on Freeletics',
    memberData:'New Members Only',
    gymData:'GOLD’s GYM',
    date:'Exp. 15 Jun 2019',
  },

  {
    id:3,
    image:'https://img.livestrong.com/640/clsd/getty/d67e856372aa43c3be66b6a405743c1a.jpg',
    discountData:'Flat 25% OFF on Freeletics',
    memberData:'New Members Only',
    gymData:'GOLD’s GYM',
    date:'Exp. 15 Jun 2019',
  },
]




function Deals() {

  const [selectedId, setSelectedId] = useState(data[0].id);

  const renderDeal = ({ item }) =>{

    const backgroundColor = item.id == selectedId ? COLORS.seaweed : COLORS.white;
    const textColor = item.id == selectedId ? COLORS.white : COLORS.brownishGrey;

    return(
      <Card
      item={item}
      tintColor={textColor}
      textColor={textColor}
      backgroundColor={backgroundColor}
      onPress={() => { setSelectedId(item.id) }}
    />
    )
  }

  const renderDataItem = ({item}) => {
    return(

  
      <View style={styles.detailContainer}>
          <View style={styles.imageContainer}>
            <Image source={{uri:item.image}} style={styles.image}/>
          </View>
          

          <View style={styles.dataContainer}>
            <Text style={styles.discountText}>{item.discountData}</Text>
            <Text style={styles.memberText}>{item.memberData}</Text>


            <View style={styles.gymDataContainer}>
              <Text style={styles.gymText}>{item.gymData}</Text>
              <Text style={styles.dateText}>{item.date}</Text>
            </View>
          </View>
      </View>
    )
  }


  return (
    <View style={styles.mainContainer}>
      <View style={styles.storeContainer}>
        <View style={styles.storeTextContainer}>
          <Text style={styles.storeText}>Nearby Deals</Text>
        </View>
        <TouchableOpacity>
          <Image source={require('../../../assets/images/location.png')} style={styles.map} />
        </TouchableOpacity>
      </View>


      <View style={{ marginTop:15}}>
        <FlatList 
          data={data}
          renderItem={renderDeal} 
          horizontal 
          showsHorizontalScrollIndicator={false}
          />
      </View>

      <View style={{marginTop: 25,}}>
        <FlatList
          data={dataItem}
          renderItem={renderDataItem}
        />
      </View>


    </View>
  )
}

export default Deals;

