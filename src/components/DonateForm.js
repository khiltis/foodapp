import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Alert} from 'react-native';
import {connect} from 'react-redux';
import {name, email, date, type, contact, address} from '../actions';

class DonateForm extends Component{
  render(){
    const {container, InputTextStyle, TextStyle, submitButton, submitButtonText} = styles;
    return(
      <View style={container}>
      <ScrollView>
      <Text style={TextStyle}> Name: </Text>
      <TextInput style={InputTextStyle}
        placeholder="name"
        //keyboardType="email-address"
        maxLength={30}
        onChangeText={ value => {
      console.log('value:', value);
         this.props.name(value);
       }}
       value={this.props.name_input_value}
         />
        <Text style={TextStyle}> Email Id: </Text>
        <TextInput style={InputTextStyle}
          placeholder="Email Id"
          //keyboardType="email-address"
          maxLength={20}
          onChangeText={ value => {
        console.log('value:', value);
           this.props.email(value);
         }}
         value={this.props.email_input_value}
         />
          <Text style={TextStyle}> Date: </Text>
          <Text> Format must DD/MM/YYYY </Text>
          <TextInput style={InputTextStyle}
            placeholder="date"
            maxLength = {10}
            onChangeText={ value => {
          console.log('value:', value);
             this.props.date(value);
           }}
           value={this.props.date_input_value}
            />
            <Text style={TextStyle}> Type of Food: </Text>
            <TextInput style={InputTextStyle}
              placeholder="Type of Food"
              onChangeText={ value => {
            console.log('value:', value);
               this.props.type(value);
             }}
             value={this.props.type_input_value}
              />
            <Text style={TextStyle}> Contact No.: </Text>
            <TextInput style={InputTextStyle}
              placeholder="contact no."
              keyboardType="numeric"
              maxLength={10}
              onChangeText={ value => {
            console.log('value:', value);
               this.props.contact(value);
             }}
             value={this.props.contact_input_value}
              />
            <Text style={TextStyle}> Address: </Text>
            <TextInput style={InputTextStyle}
              placeholder="address"
              onChangeText={ value => {
            console.log('value:', value);
               this.props.address(value);
             }}
             value={this.props.address_input_value}
            />
            <TouchableOpacity
                 style = {submitButton}
                 onPress={() => {
                   if(this.props.name_input_value == '' || this.props.email_input_value == '' || this.props.date_input_value == '' || this.props.type_input_value == '' || this.props.contact_input_value == '' || this.props.address_input_value == '')
                   {
                     Alert.alert("Please Enter All the Values.");
                   }
                  else
                  {
                   Alert.alert("All Text Input is Filled.");
                   this.props.navigation.navigate('Donar');
                   }

                 }} >
                 <Text style = {submitButtonText}> Submit </Text>
              </TouchableOpacity>
            </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      padding: 18,
      marginTop: '20%',
      margin: 20,
      borderRadius: 10,
      borderWidth: 4,
      borderColor: '#004d4d',
   },
   submitButton: {
      backgroundColor: '#004d4d',
      padding: 10,
      margin: 15,
      height: 40,
      alignSelf: 'center',
      borderRadius: 10,
   },
   submitButtonText:{
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
   },
   TextStyle:{
     fontSize: 20,
     fontWeight: 'bold',
     color: 'black',
     margin: 8,
   },
  InputTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 2,
    borderWidth: 2,
    borderColor: '#004d4d',
    margin: 2,
    elevation: 1,
  },
})

//export default DonateForm;
const mapStateToProps = state => {
  return {
    name_input_value: state.input_value.fname,
    email_input_value: state.input_value.femail,
    date_input_value: state.input_value.fdate,
    type_input_value: state.input_value.ftype,
    contact_input_value: state.input_value.fcontact,
    address_input_value: state.input_value.faddress,
  };
};

export default connect(mapStateToProps, {name, email, date, type, contact, address}) (DonateForm);
