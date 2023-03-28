import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CProfileButton from './CProfileButton';

export default function CustomerProfile() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>    
    <View>
      <TouchableOpacity style={styles.container}>
        <Image
          source={require('../Images/Profile.png')}
          style={styles.image}
        />
      </TouchableOpacity>
<CProfileButton/>
 
</View>
</SafeAreaView>

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