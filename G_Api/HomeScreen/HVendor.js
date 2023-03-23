import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeVendor({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("get_customer")}>
          { <Image source={require('../assets/get_customer.png')} style={styles.image} /> }
          <Text style={styles.text}>Get Customers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress = {()=>navigation.navigate("check_history")}>
          <Image source={require('../assets/history.png')} style={styles.image} />
          <Text style={styles.text}>Check History</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress = {() =>navigation.navigate("set_profile")}>
        <Image source={require('../assets/reset.png')} style={styles.image} />
        <Text style={styles.text}>Set Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 10,
    width: 150,
  },
  image: {
    height: 150,
    width: 100,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
