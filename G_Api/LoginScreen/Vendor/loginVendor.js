import { View, Text, Image, StyleSheet, TextInput,TouchableOpacity} from 'react-native';
import React, {useState} from 'react'
import { signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../../Firebase/FBVendorAuth';
import { styles } from "../LoginStyles";

export default function Vendor({navigation}) {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [validationMessage,setvalidationMessage] = useState('');
  
  async function login() {
    if (email === '' || password === '') {
      alert('required filled missing')
      return;
    }

    try {
      await signInWithEmailAndPassword(auth,email, password);
      navigation.navigate('HomeVendor');
    } catch (error) {
     alert(error.message);
    }
  }
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
            placeholder="Enter Name or Email"
            style={styles.TextInput}
            placeholderTextColor="#fff"
            value={email}
            onChangeText={(text) => setEmail(text)}
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
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        
        {<Text style={styles.error}>{validationMessage}</Text>}

        <View style={styles.submitButton}>
            <TouchableOpacity style={styles.submit} onPress={login}
            // onPress={() => navigation.navigate('HomeVendor')}
            >
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.text}>
        <Text>I Don't have an Account</Text>
        <TouchableOpacity style={styles.textButton} onPress={() => navigation.navigate('vendorSignUp')}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}