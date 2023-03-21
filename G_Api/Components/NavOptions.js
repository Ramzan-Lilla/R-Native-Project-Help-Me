import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames'
// import { Icon } from 'react-native-elements'
import { Icon } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectOrigin } from '../slices/navSlice'
// import Icon from 'react-native-paper/lib/typescript/components/Icon'

const data = [
    {
        id:"123",
        title:"book a Mechanic",
        image: require('../Images/Mechanic.jpeg'),
        screen:'MapScreen',
    },
    {
        id:"456",
        title:"book a beautian",
        image:require('../Images/palor.jpeg'),
        screen:'MapScreen',
        // screen:'BeautianScreen',
    },
    {
        id:"789",
        title:"Need First Aid?",
        image:require('../Images/palor.jpeg'),
        screen:'MapScreen',
        // screen:'BeautianScreen',
    }
]

const NavOptions = () => {

  const navigation = useNavigation();
  const origin=useSelector(selectOrigin)

  return (
    <FlatList
        data={data}
        keyExtractor={(item)=>item.id}
        horizontal
        renderItem={({item})=>(
            <TouchableOpacity 
             onPress={()=>navigation.navigate(item.screen)}
            style={tw`p-2 pl-4 pb-4 pt-4 bg-gray-200 m-2`}
            // disabled={!origin}
            >
           
            <View >
                <Image 
                 style={{width:100, height:100, resizeMode:'contain'}}
                 source={ item.image}
                 />                 
                 <Text style={tw`mt-2 font-semibold`}>
                    {item.title}
                </Text>
                <Icon 
                style={tw`p-2 bg-black rounded-full w-10 mt-2`}
                name ="arrowright" color='white' type='antdesign' />
                
            </View>
            </TouchableOpacity>
        )}
    />
    // <View>
    //   <Text>NavOptions</Text>
    // </View>
  )
}

export default NavOptions

const styles = StyleSheet.create({
    imageStyle:{
        width:100,
        height:100,
    }
})