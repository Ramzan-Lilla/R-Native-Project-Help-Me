// import { View, Text } from 'react-native'
// import React from 'react'

// export default function check_history({navigation}) {
//   return (
//     <View>
//       <Text>Check History</Text>
//     </View>
//   )
// }


import React from 'react';
import { StyleSheet, View, FlatList, Image } from 'react-native';
import { Text, Rating } from '@rneui/base';

const DATA = [
  {
    id: '1',
    image: require('../assets/Helpme.png'),
    title: 'Title 1',
    rating: 3,
  },
  {
    id: '2',
    image: require('../assets/Helpme.png'),
    title: 'Title 2',
    rating: 4,
  },
  {
    id: '3',
    image: require('../assets/Helpme.png'),
    title: 'Title 3',
    rating: 5,
  },
];

const Item = ({ image, title, rating }) => (
  <View style={styles.item}>
    <Image source={image} style={styles.image} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Rating rating={rating} max={5} style={styles.rating} />
    </View>
  </View>
);

const check_history = () => {
  const renderItem = ({ item }) => (
    <Item image={item.image} title={item.title} rating={item.rating} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    flexDirection: 'row',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#f9c2ff',
    borderRadius: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  rating: {
    alignSelf: 'flex-end',
  },
});

export default check_history;
