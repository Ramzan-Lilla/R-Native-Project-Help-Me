import React, { useState } from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { CheckBox } from '@rneui/base';


const NavigateCard = () => {
  // return (
  //   <View>
  //     <Text>NavigateCard</Text>
  //   </View>
  // )




const [checkBox1, setCheckBox1] = useState(false);
  const [checkBox2, setCheckBox2] = useState(false);
  const [checkBox3, setCheckBox3] = useState(false);
  const [description, setDescription] = useState('');

  const handleCheckBox1 = () => {
   setCheckBox1((prevState) => !prevState);
  };

  const handleCheckBox2 = () => {
    setCheckBox2(!checkBox2);
  };

  const handleCheckBox3 = () => {
    setCheckBox3(!checkBox3);
    
  };

  const handleDescription = (text) => {
    setDescription(text);
  };

  const handlePlaceRequest = () => {
    // Do something when the "Place Request" button is pressed
  };

  return (
 
    
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox value={checkBox1} onValueChange={handleCheckBox1} />
        <Text style={styles.checkboxLabel}>Puncture</Text>
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox value={checkBox2} onValueChange={handleCheckBox2} />
        <Text style={styles.checkboxLabel}>Engine Problem</Text>
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox value={checkBox3} onValueChange={handleCheckBox3} />
        <Text style={styles.checkboxLabel}>Plung Issues</Text>
      </View>

      {/* <Image source={require('../Images/firstAid.jpeg')} style={styles.image} /> */}
      <TextInput
        style={styles.inputField}
        placeholder="Description"
        onChangeText={handleDescription}
        value={description}
      />
      <TouchableOpacity style={styles.button} onPress={handlePlaceRequest}>
        <Text style={styles.buttonLabel}>Place Request</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 8,
  },
  checkboxLabel: {
    marginLeft: 8,
    marginTop:15,
  },
  image: {
    width: 50,
    height: 50,
    marginVertical: 8,
  },
  inputField: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginVertical: 16,
    width: '100%',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginLeft:'25%',
    marginRight:'25%',

  },
  buttonLabel: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }, 
  
});

export default NavigateCard

// const styles = StyleSheet.create({})