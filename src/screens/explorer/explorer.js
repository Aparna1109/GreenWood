import React from "react"
import { View, Text, FlatList, ScrollView } from "react-native"
import { styles } from "./style";
import { Fonts } from "../../utils/fontFamily";
import { COLORS } from "../../utils/colors";
import ExplorerList from "./components/explorerlist";
import EventsList from "./components/eventslist";
import StoresList from "./components/storeslist";
import DealsList from "./components/dealslist";
import ProductsList from "./components/productslist";
function Explorer() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.explorerContainer}>
        <Text style={styles.explorerText}>Explorer</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        <View>
          <ExplorerList />
        </View>
       

      <View>
        <View style={styles.commonTextContainer}>
          <Text style={styles.commonText}>Events</Text>
          <Text style={styles.viewText}>VIEW ALL</Text>
        </View>
        <EventsList />
      </View>

      <View>
        <View style={styles.commonTextContainer}>
          <Text style={styles.commonText}>Nearby Stores</Text>
          <Text style={styles.viewText}>VIEW ALL</Text>
        </View>
        <StoresList/>
      </View>

      <View>
        <View style={styles.commonTextContainer}>
          <Text style={styles.commonText}>Local Deals</Text>
          <Text style={styles.viewText}>VIEW ALL</Text>
        </View>
      </View>
      <DealsList/>


      <View>
        <View style={styles.commonTextContainer}>
          <Text style={styles.commonText}>Latest Products</Text>
          <Text style={styles.viewText}>VIEW ALL</Text>
        </View>
      </View>
      <ProductsList/>
      </ScrollView>
     

    </View>
  )
}

export default Explorer;