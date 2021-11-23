import React, {Component} from 'react';
import {View, Text,StyleSheet} from 'react-native';

class DonationList extends Component{
  render(){
    const {Card, containar} = styles;
    const {name, email, date, typeoffood, contact, address} = this.props;
    return(
      <View style={containar}>
        <View style={Card}>
          <Text>Name: {name}</Text>
          <Text>Email Id: {email} </Text>
          <Text>Date: {date} </Text>
          <Text>Type of food: {typeoffood} </Text>
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
  Card:{
    top: 10,
    width: '90%',
    alignSelf: 'center',
    borderColor: 'black',
    marginWidth: 10,
    marginVertical: 2,
    marginHorizontal: 16,
    padding: 20,
    backgroundColor: '#5cd6d6',
    borderRadius: 30,
  },
  textViewStyle: {
    height: 50,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DonationList;
