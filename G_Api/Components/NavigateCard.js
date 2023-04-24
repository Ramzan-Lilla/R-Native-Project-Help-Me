import React, { useState } from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity,FlatList } from 'react-native';
import { CheckBox } from '@rneui/base';


// const NavigateCard = () => {
//   // return (
//   //   <View>
//   //     <Text>NavigateCard</Text>
//   //   </View>
//   // )}



// const [isChecked1, setIsChecked1] = useState(false);
//   const [isChecked2, setIsChecked2] = useState(false);
//   const [isChecked3, setIsChecked3] = useState(false);

//   const handleCheck1 = () => {
//     setIsChecked1(!isChecked1);
//   };

//   const handleCheck2 = () => {
//     setIsChecked2(!isChecked2);
//   };

//   const handleCheck3 = () => {
//     setIsChecked3(!isChecked3);
//   };


// // const [checkBox1, setCheckBox1] = useState(false);
// //   const [checkBox2, setCheckBox2] = useState(false);
// //   const [checkBox3, setCheckBox3] = useState(false);
//   const [description, setDescription] = useState('');

// //   const handleCheckBox1 = () => {
// //    setCheckBox1((prevState) => !prevState);
// //   };

// //   const handleCheckBox2 = () => {
// //     setCheckBox2(!checkBox2);
// //   };

// //   const handleCheckBox3 = () => {
// //     setCheckBox3(!checkBox3);
    
// //   };

//   const handleDescription = (text) => {
//     setDescription(text);
//   };

//   const handlePlaceRequest = () => {
//     // A Sync Request will be generated to the vendor side of App
//   };

//   return (
 
    
//     <View style={styles.container}>
//       {/* <View style={styles.checkboxContainer}>
//         <CheckBox value={checkBox1} onValueChange={handleCheckBox1} />
//         <Text style={styles.checkboxLabel}>Puncture</Text>
//       </View>

//       <View style={styles.checkboxContainer}>
//         <CheckBox value={checkBox2} onValueChange={handleCheckBox2} />
//         <Text style={styles.checkboxLabel}>Engine Problem</Text>
//       </View>

//       <View style={styles.checkboxContainer}>
//         <CheckBox value={checkBox3} onValueChange={handleCheckBox3} />
//         <Text style={styles.checkboxLabel}>Plung Issues</Text>
//       </View> */}

//        <View style={styles.checkboxContainer}>
//         <CheckBox value={isChecked1} onValueChange={handleCheck1} />
//         <Text>Checkbox 1</Text>
//         <CheckBox value={isChecked2} onValueChange={handleCheck2} />
//         <Text>Checkbox 2</Text>
//         <CheckBox value={isChecked3} onValueChange={handleCheck3} />
//         <Text>Checkbox 3</Text>
//     </View>

//       {/* <Image source={require('../Images/firstAid.jpeg')} style={styles.image} /> */}
//       <TextInput
//         style={styles.inputField}
//         placeholder="Description"
//         onChangeText={handleDescription}
//         value={description}
//       />
//       <TouchableOpacity style={styles.button} onPress={handlePlaceRequest}>
//         <Text style={styles.buttonLabel}>Place Request</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };


const NavigateCard = () => {
  const [services, setServices] = useState([
    {id: 1, title: 'Oil Change', selected: false},
    {id: 2, title: 'Brake Repair', selected: false},
    {id: 3, title: 'Tire Replacement', selected: false},
  ]);
  const [description, setDescription] = useState('');

  const handleServiceSelect = (id) => {
    const updatedServices = services.map(service => {
      if (service.id === id) {
        return {...service, selected: !service.selected};
      }
      return service;
    });
    setServices(updatedServices);
  };

  const handleRequestSubmit = () => {
    const selectedServices = services.filter(service => service.selected).map(service => service.title);
    // Send request to mechanic API with selected services and description
    console.log(`Selected services: ${selectedServices}`);
    console.log(`Description: ${description}`);
    // Reset form fields
    setServices(services.map(service => ({...service, selected: false})));
    setDescription('');
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 14, fontWeight: 'bold', marginBottom: 10 }}>
        Select services you need:
      </Text>
      <FlatList
        data={services}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <CheckBox value={item.selected} onValueChange={() => handleServiceSelect(item.id)} />
            <Text style={{ marginLeft: 10 }}>{item.title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        style={{ marginBottom: 10 }}
      />
      <Text style={{ fontSize: 14 }}>Description:</Text>
      <TextInput
        multiline={true}
        numberOfLines={2}
        placeholder="Enter description"
        value={description}
        onChangeText={text => setDescription(text)}
        style={{ borderWidth: 1, borderRadius: 5, padding: 5, marginBottom: 20 }}
      />
      <TouchableOpacity style={{width:'50%', backgroundColor: 'blue', padding: 10, alignItems: 'center', borderRadius: 5,marginLeft:'25%' }} onPress={handleRequestSubmit}>
        <Text style={{ color: 'white', fontSize: 15 }}>Submit Request</Text>
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