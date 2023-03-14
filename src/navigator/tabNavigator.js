import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Events from '../screens/tabScreens/events/events';
import Deals from '../screens/tabScreens/deals/deals';
import Explorer from '../screens/explorer/explorer';
import More from '../screens/more/more';
import BusinessDetails from '../screens/businessDetails/businessDetails';
import { Image } from 'react-native';
import { Fonts } from '../utils/fontFamily';
import { COLORS } from '../utils/colors';
import Stores from '../screens/stores/stores';

const Tab = createBottomTabNavigator();
const tabBarLabelStyle = {
  fontSize: 12, 
  fontFamily: Fonts.poppinsRegular, 
  letterSpacing:0.31, 
  color:COLORS.brownishGrey 
  }

function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName='Explorer' screenOptions={{headerShown: false}}>
      <Tab.Screen 
      name="Events" 
      component={Events} 
      options={{
        tabBarLabel:'Events',
        tabBarLabelStyle: tabBarLabelStyle,
        tabBarIcon:() => (
          <Image source={require('../assets/images/cheersglass.png')} style={{height:25, width:28}}/>
        ),
        tabBarActiveBackgroundColor: COLORS.whiteTwo,
        tabBarInactiveBackgroundColor:COLORS.white,
      }}/>
      <Tab.Screen 
      name="Deals" 
      component={Deals} 
      options={{
        tabBarLabel:'Deals',
        tabBarLabelStyle: tabBarLabelStyle,
        tabBarIcon:() => (
          <Image source={require('../assets/images/offers.png')} style={{height:24, width:23}}/>
        ),
        tabBarActiveBackgroundColor: COLORS.whiteTwo,
        tabBarInactiveBackgroundColor:COLORS.white,
      }}/>

      <Tab.Screen name="Explorer" 
      component={Explorer} 
      options={{
        tabBarLabel:'Explore',
        tabBarLabelStyle: tabBarLabelStyle,
        tabBarIcon:() => (
          <Image source={require('../assets/images/elephant.png')} style={{height:30, width:37}}/>
        ),
        tabBarActiveBackgroundColor: COLORS.whiteTwo,
        tabBarInactiveBackgroundColor:COLORS.white,
      }}/>

      <Tab.Screen name="BusinessDetails" 
      component={BusinessDetails} 
      options={{
        tabBarLabel:'Product',
        tabBarLabelStyle: tabBarLabelStyle,
        tabBarIcon:() => (
          <Image source={require('../assets/images/product.png')} style={{height:26, width:20}}/>
        ),
        tabBarActiveBackgroundColor: COLORS.whiteTwo,
        tabBarInactiveBackgroundColor:COLORS.white,
      }}/>
      <Tab.Screen name="More" 
      component={More} 
      options={{
        tabBarLabel:'More',
        tabBarLabelStyle: tabBarLabelStyle,
        tabBarIcon:() => (
          <Image source={require('../assets/images/moreicon.png')} style={{height:7, width:29}}/>
        ),
        tabBarActiveBackgroundColor: COLORS.whiteTwo,
        tabBarInactiveBackgroundColor:COLORS.white,
      }}/>
    </Tab.Navigator>
  );
}

export default TabNavigator;

