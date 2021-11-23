import React, {useRef, useState, useEffect} from 'react';
import {View, StyleSheet, Text, ActivityIndicator} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = props => {
  const [authLoaded, setAuthLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAuthLoaded(true);
    }, 4000);
  }, []);

  useEffect(() => {
    if (authLoaded) {
      props.navigation.replace(' ');
    }
  }, [authLoaded, props.navigation]);

  return (
    <View style={styles.splashStyle}>
      <LinearGradient colors={['#d6f5f5', '#5cd6d6', '#248f8f']} style={styles.lineargradientstyle}>
        <Text style={styles.TextStyle} >Welcome To Food Wastage Management</Text>
        <ActivityIndicator size="large" color="green" />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  splashStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lineargradientstyle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: "100%",
    width: "100%",
  },
  TextStyle:{
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SplashScreen;
