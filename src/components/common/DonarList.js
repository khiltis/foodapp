import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class DonarList extends Component{
  render(){
    const {containar, List} = styles;
    const {name, email, contact, address} = this.props;
    return(
      <View style={containar}>
        <View style={List}>
          <Text>Name: {name}</Text>
          <Text>Email Id: {email} </Text>
          <Text>Contact: {contact} </Text>
          <Text>Address: {address} </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containar:{
    marginTop: 10,
    padding: 1,
  },
  List:{
    top: 10,
    width: '90%',
    alignSelf: 'center',
    marginWidth: 10,
    marginVertical: 2,
    marginHorizontal: 16,
    padding: 20,
    backgroundColor: '#5cd6d6',
    borderRadius: 30,
  },
})

export default DonarList;
