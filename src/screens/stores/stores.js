import React, {useState} from "react";
import { View, Text, FlatList, ImageBackground, TouchableOpacity, Image } from "react-native";
import { styles } from "./style";
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from "../../utils/colors";
import Card from "../../components/card";

const DATA=[
  {
    id:1,
    image: require('../../assets/images/gamepad.png'),
    title:'Entertainment',
    data:[
      {
        id: 1,
        image:'https://d17wm0hdpuulng.cloudfront.net/images/dist/golds-gym-AQE9T2.jpeg',
        name:'Golds gym',
        type:'Fitness & Training',
        distance:'3.7 km',
        offers:'3 OFFERS',
        rating:'4.5'
      },
    
      {
        id:2,
        image:'https://content3.jdmagicbox.com/comp/pune/u3/020pxx20.xx20.190204150959.q5u3/catalogue/gold-s-gym-wakad-pune-gyms-1sdadeh3v7.jpg',
        name:'Golds gym',
        type:'Fitness & Training',
        distance:'3.7 km',
        offers:'3 OFFERS',
        rating:'4.5' 
      },
    
      {
        id: 3,
        image:'https://goldsgym.in/uploads/gym/photo/compress-2.jpg',
        name:'Golds gym',
        type:'Fitness & Training',
        distance:'3.7 km',
        offers:'3 OFFERS',
        rating:'4.5'
      },
    
      {
        id: 4,
        image:'https://goldsgym.in/assets/frontend/images/g4.jpg',
        name:'Golds gym',
        type:'Fitness & Training',
        distance:'3.7 km',
        offers:'3 OFFERS',
        rating:'4.5'
      },
    
      {
        id: 5,
        image:'https://www.searchguwahati.com/file/2017/12/Fitness-Gold-Gym-Guwahati.jpg',
        name:'Golds gym',
        type:'Fitness & Training',
        distance:'3.7 KM',
        offers:'3 OFFERS',
        rating:'4.5'
      }
    ]
  },



  {
    id:2,
    image: require('../../assets/images/heartbeat.png'),
    title:'Medical',
    data:[
      {
        id: 1,
        image:'https://images.unsplash.com/photo-1618498082410-b4aa22193b38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fG1lZGljYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        name:'Golds Hospital',
        type:'Medical and Pharmacy',
        distance:'3.7 km',
        offers:'3 OFFERS',
        rating:'4.5'
      },
    
      {
        id:2,
        image:'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fG1lZGljYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        name:'Golds Hospital',
        type:'Medical and Pharmacy',
        distance:'3.7 km',
        offers:'3 OFFERS',
        rating:'4.5'
      },
    
      {
        id: 3,
        image:'https://images.unsplash.com/photo-1518152006812-edab29b069ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fG1lZGljYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        name:'Golds Hospital',
        type:'Medical and Pharmacy',
        distance:'3.7 km',
        offers:'3 OFFERS',
        rating:'4.5'
      },
    
      {
        id: 4,
        image:'https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fG1lZGljYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        name:'Golds Hospital',
        type:'Medical and Pharmacy',
        distance:'3.7 km',
        offers:'3 OFFERS',
        rating:'4.5'
      },
    
      {
        id: 5,
        image:'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fG1lZGljYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        name:'Golds Hospital',
        type:'Medical and Pharmacy',
        distance:'3.7 KM',
        offers:'3 OFFERS',
        rating:'4.5'
      }
    ]
  },

  {
    id:3,
    image: require('../../assets/images/bulb.png'),
    title:'Technology',
    data:[
      {
        id: 1,
        image:'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        name:'Golds Software',
        type:'Technology',
        distance:'3.7 km',
        offers:'3 OFFERS',
        rating:'4.5'
      },
    
      {
        id:2,
        image:'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        name:'Golds Software',
        type:'Technology',
        distance:'3.7 km',
        offers:'3 OFFERS',
        rating:'4.5'
      },
    
      {
        id: 3,
        image:'https://images.unsplash.com/photo-1581089781785-603411fa81e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODN8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        name:'Golds Software',
        type:'Technology',
        distance:'3.7 km',
        offers:'3 OFFERS',
        rating:'4.5'
      },
    
      {
        id: 4,
        image:'https://images.unsplash.com/photo-1597733336794-12d05021d510?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        name:'Golds Software',
        type:'Technology',
        distance:'3.7 km',
        offers:'3 OFFERS',
        rating:'4.5'
      },
    
      {
        id: 5,
        image:'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        name:'Golds Software',
        type:'Technology',
        distance:'3.7 KM',
        offers:'3 OFFERS',
        rating:'4.5'
      }
    ]
  }
]


function Stores({navigation}){

  const goBackHandler = () => navigation.goBack();
  const [selectedId, setSelectedId] = useState(DATA[0].id);
  const [filteredData, setfilteredData] = useState(DATA[0].data);

 

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? COLORS.seaweed : COLORS.white;
    const textColor = item.id === selectedId ? COLORS.white : COLORS.greyishBrown;

    return (
      <Card
        item={item}
        tintColor={textColor}
        textColor={textColor}
        backgroundColor={backgroundColor}
        onPress={() => { setSelectedId(item.id) }}
      />
    );
  };
  
  
 
  const DetailsItem=({image, name, type , distance, offers, rating}) => (
    <View style={styles.detailsContainer}>
      <ImageBackground style={styles.detailsImage} source={{ uri: image }} resizeMode={'cover'}>
        <View style={styles.ratingContainer}>
          <Icon name="star" size={7} color={COLORS.white} />
          <Text style={styles.ratingText}>{rating}</Text>
        </View>
      </ImageBackground>
  
      <View style={styles.dataContainer}>
        <View style={{ marginLeft: 9, marginTop: 9 }}>
          <Text style={styles.gymText}>{name}</Text>
          <Text style={styles.fitText}>{type}</Text>
        </View>

        <View style={{ marginRight: 9, marginTop: 9 }}>
          <Text style={styles.fitText}>{distance}</Text>
          <Text style={styles.offferText}>{offers}</Text>
        </View>
      </View>
    </View>
  )


  return(
    <View style={styles.mainContainer}> 
      <View style={styles.storeContainer}>
        <View style={styles.storeTextContainer}>
          <TouchableOpacity onPress={goBackHandler}>
              <Image source={require('../../assets/images/leftarrow.png')} style={styles.arrow}/>
          </TouchableOpacity>
          <Text style={styles.storeText}>Stores</Text>
        </View>
        <TouchableOpacity>
              <Image source={require('../../assets/images/location.png')} style={styles.map}/>
          </TouchableOpacity>
      </View>
      
      <View style={{ marginTop:14}}>
        <FlatList 
          data={DATA}
          renderItem={renderItem} 
          horizontal 
          showsHorizontalScrollIndicator={false}/>
      </View>

      <View style={{flex:1, paddingBottom:20}}>
        <FlatList 
        data={filteredData} 
        renderItem={({item}) => <DetailsItem image={item.image} rating={item.rating} name={item.name} type={item.type} 
        distance={item.distance} offers={item.offers}/>} 
        keyExtractor={(item) => 
        {
          return item.id;
        }} showsVerticalScrollIndicator={false}
        
        />
      </View>
        
    
    </View>
  )
}

export default Stores;