import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


class DonarScreen extends Component{
  render(){
    const {lineargradientstyle, HomeStyle, textstyle, textstyle1} = styles;
    return(
      <View style={HomeStyle}>
        <LinearGradient colors={['#d6f5f5', '#5cd6d6', '#248f8f']} style={lineargradientstyle}>
          <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Donation Form');
          }}>
            <Text style={textstyle}> Can Donate Now!</Text>
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
    width: 152,
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#004d4d',
    borderRadius: 20,
  },
})
export default DonarScreen;
