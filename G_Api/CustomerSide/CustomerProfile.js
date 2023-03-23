// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const CustomerProfile = () => {
//   return (
//     <View>
//       <Text>CustomerProfile</Text>
//     </View>
//   )
// }

// export default CustomerProfile

// const styles = StyleSheet.create({})


import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
// import { Camera } from 'expo-camera';
import { useNavigation } from '@react-navigation/native';


export default function CustomerProfile() {
  const navigation = useNavigation();

//   const handleImagePress = () => {
//     navigation.navigate('Camera');
//   };

  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={require('../Images/Profile.png')}
        style={styles.image}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop:10,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    height:230,
  },
  image: {
    marginTop:0,
    width: '50%',
    height: '100%',
    resizeMode: 'contain',
  },
});