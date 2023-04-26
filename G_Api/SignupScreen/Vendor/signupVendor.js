import { View, Text, Image, StyleSheet, TextInput,TouchableOpacity} from 'react-native';
import React, {useState} from 'react'
import { createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../../Firebase/FBVendorAuth';
import { styles } from "../SignupStyle";

export default function VendorSignUp({navigation}) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [validationMessage, setValidationMessage] = useState('')

  let validateAndSet = (value,setValue) => {
   setValue(value)
}
function checkPassword(firstpassword,secondpassword) {
  if(firstpassword !== secondpassword){
    setValidationMessage('Password do not match') 
  }
  else setValidationMessage('')
}
  async function createAccount() {
    email === '' || password === '' 
    ? setValidationMessage('required filled missing')
    : ''
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigation.navigate('Vendor');
    } catch (error) {
      setValidationMessage(error.message);
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
            onChangeText={(value) => validateAndSet(value, setPassword)}
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
            value={confirmPassword}
            onChangeText={(value) => validateAndSet(value,setConfirmPassword)}
            onBlur={()=>checkPassword(password,confirmPassword)}
          /> 
         
        </View>

        <View style={styles.submitButton}>
            <TouchableOpacity style={styles.submit} onPress={createAccount}>
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>
      </View>


      <View style={styles.text}>
        <Text>I Already have an Account</Text>
        <TouchableOpacity style={styles.textButton} onPress={() => navigation.navigate('Vendor')}>
          <Text>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}