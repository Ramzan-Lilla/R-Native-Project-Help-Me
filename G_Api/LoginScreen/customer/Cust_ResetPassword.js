import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../Firebase/FBCustAuth'; // assuming this is where you initialize Firebase Auth

const Cust_ResetPassword = ({ setScreen }) => {
  // define state variables for email, error message, and submission status
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  
  // function to reset user password using Firebase Auth
  const resetUserPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setSubmitted(true); // set submission status to true
      setError(null); // reset any previous error message
    } catch (error) {
      // handle any errors that may occur during password reset
      if (error.code === 'auth/user-not-found') {
        setError('User not found');
      } else {
        setError('There was a problem with your request');
      }
    }
  };

  return (
    <View style={styles.outer}>
      <View style={styles.inner}>
        <Text style={styles.header}>Reset Password</Text>

        {error && <Text style={styles.error}>{error}</Text>}

        {submitted ? (
          <Text>Please check your email for a reset password link.</Text>
        ) : (
          <>
            <TextInput
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              placeholder="Enter email address"
              autoCapitalize="none"
              placeholderTextColor="#aaa"
              style={styles.input}
            />
           
            
          </>
        )}
      </View>
       <View>
                <Button style={styles.Reset} title="Reset Password" onPress={resetUserPassword}  />
            </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  inner: {
    width: '80%',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  Reset:{
    alignItems:'center',
    justifyContent:'center',
    marginTop:10,
    paddingHorizontal:20,
    width:'50%',
    marginLeft:'25%',
    paddingVertical:15,
    backgroundColor:'#8585e0',
    borderRadius:'12%',
    marginHorizontal:70,
  },
});

export default Cust_ResetPassword;
