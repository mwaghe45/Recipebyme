// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image,Text
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props {
    navigation: any
}
const Splash = ({navigation}:Props) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      navigation.navigate('Auth');
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
    //   AsyncStorage.getItem('user_id').then((value) =>
    //     navigation.navigate(
    //       value === null ? 'Auth' : 'MainNavigator'
    //     ),
    //   );
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
        <Text style={{padding:10,borderRadius:20, fontFamily:'cursive', fontSize: 40, color: '#AFF307' }}>Recipe By Me</Text>

      <Image
        source={{ uri: 'https://img.freepik.com/premium-photo/traditional-italian-pasta-with-tomato-sauce-basil-cheese-black-background-top-down-view-with-copy-space_221774-9148.jpg?w=2000' }}
        style={{width: 250, height: 450,margin: 30,}}
      />
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});