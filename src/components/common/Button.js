import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class Button extends Component{
  render(){
    const {value} = this.props;
    const {textstyle} = styles;
    return(
      <View>
        <TouchableOpacity>
          <Text style={textstyle}> {value} </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textstyle: {
    //top: 10,
    //left: 70,
    width: 50,
    color: 'white',
    padding: 8,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    backgroundColor: '#004d4d',
    borderRadius: 15,
  },
})

export default Button;
