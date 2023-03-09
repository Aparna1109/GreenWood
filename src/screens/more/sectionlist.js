import React from "react";
import { View, Text, SectionList, Image } from "react-native";
import { styles } from "./style";

const Data=[
  {
    title:'ACCOUNT',
    data:['Update Profile', 'Inbox'],
  },

  {
    title:'MY FAVOURITE',
    data:['Business', 'Deals', 'Events', 'Products'],
  },

  {
    title:'ACCOUNT',
    data:['Shopping Cart', 'My Orders'], 
  }
]



const renderData = ({item}) =>{
  return(
    <View>
        <View style={styles.sectionDataContainer}>
            <Text style={styles.sectionItem}>{item}</Text>
            <Image style={{height:16, width:9}} source={require('../../assets/images/pathsection.png')}/>
        </View>
    </View>
  )
}

 
function SectionData(){
  return(
    <>
      <SectionList
          sections={Data}
          renderItem={renderData}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
          // scrollEnabled={false}
      />
    </>
  )
}

export default SectionData;