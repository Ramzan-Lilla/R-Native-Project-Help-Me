import {StyleSheet} from 'react-native';

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
      height: 400,
      borderRadius: 50,
      marginHorizontal: 10,
      marginVertical: 10,
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
      paddingLeft:5,
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
    error: {
    marginTop: 10,
    color: 'red',
  },
  
  });

  export {styles};
  