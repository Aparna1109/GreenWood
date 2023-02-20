import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from './screens/landing/landing';
import SignIn from './screens/signIn/signin';
import SignUp from './screens/signup/signup';
import Stores from './screens/stores/stores';
import BusinessDetails from './screens/businessDetails/businessDetails';
const Stack = createNativeStackNavigator();

function GreenApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='BusinessDetails'  screenOptions={{headerShown: false}}>
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Stores" component={Stores} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="BusinessDetails" component={BusinessDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default GreenApp;