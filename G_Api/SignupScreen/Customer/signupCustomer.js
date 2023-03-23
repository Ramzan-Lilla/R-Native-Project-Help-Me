import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react'

export default function CustomerSignUp({navigation}) {
  return (
    <View>
      <View style={styles.logo}>
        <Image
          source={require('../../assets/Helpme.png')}
          style={styles.logoImage}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.containerTextInput}>
          <TextInput
            placeholder="Enter First Name"
            style={styles.TextInput}
            placeholderTextColor="#fff"
          />
        </View>
        <View style={styles.containerTextInput}>
          <TextInput
            placeholder="Enter Last Name"
            style={styles.TextInput}
            placeholderTextColor="#fff"
          />
        </View>
        <View style={styles.containerTextInput}>
          <TextInput
            placeholder="Enter Name or Email"
            style={styles.TextInput}
            placeholderTextColor="#fff"
          />
        </View>
        <View style={styles.containerTextInput}>
          <TextInput
            placeholder="Enter Password"
            autoCapitalize={'none'}
            autoCorrect={false}
            secureTextEntry={true}
            textContentType={'password'}
            style={styles.TextInput}
            placeholderTextColor="#fff"
          />
        </View>
        <View style={styles.containerTextInput}>
          <TextInput
            placeholder="Enter Confirm Password"
            autoCapitalize={'none'}
            autoCorrect={false}
            secureTextEntry={true}
            textContentType={'password'}
            style={styles.TextInput}
            placeholderTextColor="#fff"
          />
        </View>
        <View style={styles.submitButton}>
            <TouchableOpacity style={styles.submit} onPress={() => navigation.navigate('Customer')}>
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>
      </View>
      <View style={styles.text}>
        <Text>I Already have an Account</Text>
        <TouchableOpacity style={styles.textButton} onPress={() => navigation.navigate('Customer')}>
          <Text>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  logo: {
    marginHorizontal: '35%',
    marginVertical: 30,
    width: 100,
    height: 100,
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  container: {
    backgroundColor: 'blue',
    // justifyContent:'center',
    height: 400,
    borderRadius: 50,
    marginHorizontal: 10,
    marginVertical: 15,
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#cccccc',
    borderRadius: 50,
    marginVertical: 5,
  },
  containerTextInput: {
    marginHorizontal: 10,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 20,
  },
  TextInput: {
    height: 40,
    borderColor: '#fff',
    color: '#fff',
  },
  submit:{
    alignItems:'center',
    justifyContent:'center',
    marginTop:30,
    paddingHorizontal:20,
    paddingVertical:15,
    backgroundColor:'#8585e0',
    borderRadius:50,
    marginHorizontal:70
  },

});
