import * as React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from '../screens/landing/landing';
import SignIn from '../screens/signIn/signin';
import SignUp from '../screens/signup/signup';
import Stores from '../screens/stores/stores';
import SignInNumber from '../screens/signInNumber/signInNumber';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import BusinessDetails from '../screens/businessDetails/businessDetails';
import TabNavigator from './tabNavigator';

const Stack = createNativeStackNavigator();

function MainNavigator() {

  const [initialRouteName, setInitialRouteName] = React.useState('Landing');

  const checkLoggedUser = async () => {
    try {
      let user = JSON.parse(await AsyncStorage.getItem('usersdata'));
      console.log("user++++", user);
      if (user != null) {
        setInitialRouteName('TabNavigator');
      } else {
        setInitialRouteName('Landing');
      }
    } catch(e) {
    }
  }

  React.useEffect(() => {
    // checkLoggedUser();
    setTimeout(() => {
      RNBootSplash.hide({ fade: true });
    }, 3000);
  }, []);

  React.useEffect(() => {
    checkLoggedUser();
  }, [initialRouteName]);

  return (


    <Stack.Navigator 
    initialRouteName="Initial" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Initial" component={initialRouteName == "Landing" ? Landing : TabNavigator} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignInNumber" component={SignInNumber} />
      <Stack.Screen name="Stores" component={Stores} />
      <Stack.Screen name="SignUp" component={SignUp} />
      {/* <Stack.Screen name="BusinessDetails" component={BusinessDetails}/>
        <Stack.Screen name="More" component={More}/>
        <Stack.Screen name="Explorer" component={Explorer}/> */}
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
    </Stack.Navigator>

  );
}

export default MainNavigator;