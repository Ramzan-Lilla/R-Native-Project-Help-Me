import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../Firebase/FBCustAuth';
import {  onAuthStateChanged, signOut, sendPasswordResetEmail,} from 'firebase/auth';

import { useEffect } from 'react';

const CProfileButton = () => {
const navigation = useNavigation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showRequest, setShowRequest] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleRequest = () => {
    setShowRequest(!showRequest);
  };

  const handleUpdatePassword = async () => {

    try {
    await sendPasswordResetEmail(auth, email);
    setSubmitted(true);
    setError(null);
    alert('Password Reset link has been sent')
  } catch (error) {
    if (error.code === 'auth/user-not-found') {
      setError('User not found');
    } else {
      setError('There was a problem with your request');
    }
  }
    // Handle update password action here
    // console.log('Update password');
  };

  useEffect

  const handleChangeUsername = () => {
    // Handle change username action here
    console.log('Change username');
  };

  const handleDeleteAccount = () => {
    // Handle delete account action here
    console.log('Delete account');
  };

  const handleToReview = () => {
    // Handle to review action here
    console.log('To review');
  };

  const handleCanceledOrder = () => {
    // Handle canceled order action here
    console.log('Canceled order');
  };

  const handleProcessing = () => {
    // Handle processing action here
    console.log('Processing');
  };

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.button} onPress={toggleDropdown}>
        <Text style={styles.buttonText}>Update Account</Text>
      </TouchableOpacity>

      {showDropdown && (
        <View>
          <TouchableOpacity style={styles.subButton} onPress={handleUpdatePassword}>
            <Text style={styles.subButtonText}>Update Password</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.subButton} onPress={handleChangeUsername}>
            <Text style={styles.subButtonText}>Change Username</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.subButton} onPress={handleDeleteAccount}>
            <Text style={styles.subButtonText}>Delete Account</Text>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity style={styles.button} onPress={toggleRequest}>
        <Text style={styles.buttonText}>Request</Text>
      </TouchableOpacity>

      {showRequest && (
        <View>
          <TouchableOpacity style={styles.subButton} onPress={handleToReview}>
            <Text style={styles.subButtonText}>To Review</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.subButton} onPress={handleCanceledOrder}>
            <Text style={styles.subButtonText}>Canceled Order</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.subButton} onPress={handleProcessing}>
            <Text style={styles.subButtonText}>Processing</Text>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity style={styles.button}  onPress={handleLogout}> 
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default CProfileButton

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
  button: {
    width: '80%',
    backgroundColor: '#00aaff',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subButton: {
    width: '80%',
    backgroundColor: '#eee',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginBottom: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  subButtonText: {
    color: '#333',
    fontSize: 16,
    textAlign: 'center',
  },
});