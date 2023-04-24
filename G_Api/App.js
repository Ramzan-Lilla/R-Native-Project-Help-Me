// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { Provider } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import Welcome from './WelcomeScreen/Index';
import ButtonScreen from './LoginScreen/ButtonScreen';
import Vendor from './LoginScreen/Vendor/loginVendor';
import Customer from './LoginScreen/customer/loginCustomer';
import CustomerSignUp from './SignupScreen/Customer/signupCustomer';
import VendorSignUp from './SignupScreen/Vendor/signupVendor';
import HomeVendor from './HomeScreen/HVendor';

import get_customer from './Vendor_side/Get-Customer';
import check_history from './Vendor_side/check-history';
import set_profile from './Vendor_side/set-profile';
import CustomerProfile from './CustomerSide/CustomerProfile';
import CProfileButton from './CustomerSide/CProfileButton';

export default function App() {
  const stack = createNativeStackNavigator();
  return (
    <Provider store={store} >
    <NavigationContainer>
      <SafeAreaProvider>

 <stack.Navigator initialRouteName='Welcome'>
      <stack.Screen name="Welcome" component={Welcome} options={{
        headerShown: false
      }}  />


      
 <stack.Screen
         name='Login' component={ButtonScreen}
         options={{
         headerShown: false
      }}/>

<stack.Screen name='CustomerProfile' component={CustomerProfile}  options={{
        headerTitle:"Profile"
      }}/>

<stack.Screen name='Vendor' component={Vendor}  options={{
        headerTitle:"LogIn"
      }}/>
      <stack.Screen name='Customer' component={Customer}  options={{
        headerTitle:"LogIn"
      }}/>

<stack.Screen name='customerSignUp' component={CustomerSignUp}  options={{
        headerTitle:"SignUp"
      }}/>
      <stack.Screen name='vendorSignUp' component={VendorSignUp}  options={{
        headerTitle:"SignUp"
      }}/>


      <stack.Screen name='HomeVendor' component={HomeVendor}  options={{
        headerTitle:"Home Vendor"
      }}/>


 <stack.Screen name='get_customer' component={get_customer}  options={{
        headerTitle:"Get customer"
      }}/>
      <stack.Screen name='check_history' component={check_history}  options={{
        headerTitle:"Check History"
      }}/>

      <stack.Screen name='set_profile' component={set_profile}  options={{
        headerTitle:"Set profile"
      }}/>


{/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
        <stack.Screen
          name='HomeScreen'
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />

       

        
         <stack.Screen
          name='MapScreen'
          component={MapScreen}
          options={{
            headerTitle: "MapScreen",
          }}
        />

      </stack.Navigator>

        {/* <HomeScreen/> */}
      </SafeAreaProvider>
    </NavigationContainer>      
    </Provider>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
