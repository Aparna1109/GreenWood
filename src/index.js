import * as React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './navigator/mainNavigator';
import TabNavigator from './navigator/tabNavigator';
// import {Provider} from 'react-redux';
// import store from './store/store';

function GreenApp() {

  React.useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({fade: true});
    }, 3000);
  }, []);


  return (
   
      <NavigationContainer>
        <MainNavigator />
        {/* <TabNavigator/> */}
      </NavigationContainer>
  
  );
}

export default GreenApp;