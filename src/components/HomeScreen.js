import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
//import Button from '../components/common/Button';

class HomeScreen extends Component{
  render(){
    const {lineargradientstyle, HomeStyle, textstyle, textstyle1} = styles;
    return(
      <View style={HomeStyle}>
        <LinearGradient colors={['#d6f5f5', '#5cd6d6', '#248f8f']} style={lineargradientstyle}>
        <TouchableOpacity
        onPress={() => {
        this.props.navigation.navigate('help');
      }}>
           <Text style={{left: 360, fontSize: 22, fontWeight: 'bold', color: 'white', backgroundColor: '#004d4d', borderRadius: 60, width: 25, textAlign: 'center', top: 20}}> i </Text>
        </TouchableOpacity>
       <TouchableOpacity
         onPress={() => {
         this.props.navigation.navigate('Admin Login');
       }}>
          <Text style={textstyle1}> Admin Login </Text>
        </TouchableOpacity>
          <TouchableOpacity
          onPress={() => {
          this.props.navigation.navigate('Donar Login');
        }} >
            <Text style={textstyle}> Donor Login </Text>
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
    //alignItems: 'center',
    //justifyContent: 'center',
    borderRadius: 5,
    height: "100%",
    width: "100%",
  },
  textstyle: {
    top: "1200%",
    left: 180,
    padding: 3,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    height: 34,
    width: 150,
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#004d4d',
    borderRadius: 20,
  },
  textstyle1: {
    top: "1150%",
    left: 180,
    padding: 3,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    height: 34,
    width: 150,
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#004d4d',
    borderRadius: 20,
  },
})
export default HomeScreen;
