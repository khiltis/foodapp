import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class AdminScreen extends Component{
  
  render(){
    const {lineargradientstyle, HomeStyle, textstyle, textstyle1} = styles;
    return(
      <View style={HomeStyle}>
        <LinearGradient colors={['#d6f5f5', '#5cd6d6', '#248f8f']} style={lineargradientstyle}>
        <TouchableOpacity
        onPress={() => {
        this.props.navigation.navigate('Donator');
      }}>
          <Text style={textstyle1}> Donator's Details List  </Text>
        </TouchableOpacity>
          <TouchableOpacity
          onPress={() => {
          this.props.navigation.navigate('Donation');
          }}>
            <Text style={textstyle}> Donation's Details List </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  HomeStyle: {
    flex: 1,
  },
  lineargradientstyle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: "100%",
    width: "100%",
  },
  textstyle: {
    top: 75,
    left: 70,
    padding: 3,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    height: 34,
    width: "50%",
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#004d4d',
    borderRadius: 20,
  },
  textstyle1: {
    top: 50,
    left: 70,
    padding: 3,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    height: 34,
    width: "50%",
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#004d4d',
    borderRadius: 20,
  },
})

export default AdminScreen;
