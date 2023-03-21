import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import MapView from 'react-native-maps/lib/MapView';
import tw from 'tailwind-react-native-classnames';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';
import {Marker, Circle} from 'react-native-maps'; 



const Map = () => {
 const origin1 = useSelector(selectOrigin) || { location: { lat: 31.4815, lng: 74.3030 } };
 const [origin, setOrigin] = useState({
    location: {
      lat: origin1.location.lat,
      lng: origin1.location.lng,
    },
    description: `Latitude: ${origin1.location.lat}, Longitude: ${origin1.location.lng}`,
  });

 const handleMapPress = (event) => {
    const { coordinate } = event.nativeEvent;
    setOrigin({
      location: {
        lat: coordinate.latitude,
        lng: coordinate.longitude,
      },
      description: `Latitude: ${coordinate.latitude}, Longitude: ${coordinate.longitude}`,
    });
  };

 const popRadius = {
    latitude: origin.location.lat,
    longitude:origin.location.lng,
    // longitude: origin?.longitude,
    radius: 1609.34, //1 mile in meters
  };
  return (
    <MapView
    style={tw `flex-1`}
    mapType="mutedStandard"
    initialRegion={{
    latitude:origin.location.lat,
    longitude:origin.location.lng,

    latitudeDelta: 0.04622,
    longitudeDelta: 0.04621,
    }}
    onPress={handleMapPress}
  >

  {origin?.location && (
    <Marker
        coordinate={{
          latitude:origin.location.lat,
          longitude:origin.location.lng,
        }}
         title="Origin"
         description={origin.description}
         identifier="origin"
    />
  )}

  {popRadius && (
   <Circle
           center={{ latitude: popRadius.latitude, longitude: popRadius.longitude }}
           radius={popRadius.radius}
           fillColor={"rgba(128, 128, 128, 0.3)"}
           strokeColor={"rgba(128, 128, 128, 0.5)"}
           zIndex={2}
         />
       )} 
  </MapView>
);
};

export default Map

const styles = StyleSheet.create({})