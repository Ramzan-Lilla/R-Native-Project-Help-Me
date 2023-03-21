import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import Map from '../Components/Map';
import MapView from 'react-native-maps';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigateCard from '../Components/NavigateCard';

const MapScreen = () => {
const stack = createNativeStackNavigator();

  return (
    <View> 
       <View style={tw `h-1/2`}>
         <Map/>
       </View>

      <View style={tw `h-1/2`}>
        <stack.Navigator>
        <stack.Screen
          name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown:false,
            }}
          />
         </stack.Navigator>
      </View>
    </View>   
  )
}

export default MapScreen
const styles = StyleSheet.create({})