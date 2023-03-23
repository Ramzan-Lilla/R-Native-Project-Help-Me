// import {StyleSheet, View, Text,SafeAreaView,Image } from 'react-native'
// import React from 'react'
// import tw from 'tailwind-react-native-classnames'
// import NavOptions from '../Components/NavOptions'
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import {GOOGLE_MAPS_APIKEY} from  "@env";
// import {Provider, useDispatch } from 'react-redux';
// import {setDestination,setOrigin} from "../slices/navSlice";
// import { Store } from 'redux';
// import { store } from '../store';

// export default function HomeCustomer({navigation}) {
 
//   const dispatch=useDispatch();
  
//   return (
//     <SafeAreaView style={tw `bg-white h-full`}>
     

//       <View style = {tw `p-8 `}>
//         <Image 
//         style={{
//             innerWidth:50,
//             outerWidth:100,
//             innerHeight:50,
//             outerHeight:100,
//             resizeMode:'contain',
//         }}          

//         source={require('../Images/HelpMe.png')}        
//         />
//         <Text style={tw `text-red-500 pl-20 text-lg bg-green-500`}>I am HomeScreen</Text> 
//         <GooglePlacesAutocomplete
//           placeholder='Origin?'
//           styles={{
//             container:{
//               flex:0,
//             },
//             textInput:{
//               fontSize:18,
//             }
//           }}

//           onPress={(data, details)=>{ 
//             dispatch(
//               setOrigin({
//               location: details.geometry.location,
//               description: data.description,
//             }))

//             dispatch(setDestination(null)); 
//             // console.log(data);
//             // console.log(details);
//           }}

//           fetchDetails={true}
//           returnKeyType={"search"}
//           enablePoweredByContainer={true}
//           minLength={2}         

//           query={{
//             key:GOOGLE_MAPS_APIKEY,
//             language:'en',
//           }}
//           nearbyPlacesAPI='GooglePlacesSearch'
//           debounce={400}
//         />
//         <NavOptions/>
//       </View>
//     </SafeAreaView>
//   )
// }


// const styles=StyleSheet.create({
//     text:{
//         color:'blue',
//     },    
// }); 