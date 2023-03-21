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


export default function App() {
  const stack = createNativeStackNavigator();
  return (
    <Provider store={store} >
    <NavigationContainer>
      <SafeAreaProvider>
      <stack.Navigator>
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
            headerShown: false,
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
