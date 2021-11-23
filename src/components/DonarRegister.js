import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Alert} from 'react-native';
import {connect} from 'react-redux';
import {dname_box, demail_box, dpassword_box, dcontact_box, daddress_box} from '../actions';

class DonarRegister extends Component{
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
         this.props.dname_box(value);
       }}
       value={this.props.name_input_value}
         />
        <Text style={TextStyle}> Email Id: </Text>
        <TextInput style={InputTextStyle}
          placeholder="email"
        //  keyboardType="email-address"
          maxLength = {50}
          autoCapitalize = 'none'
          onChangeText={ value => {
        console.log('value:', value);
           this.props.demail_box(value);
         }}
         value={this.props.email_input_value}
         />
          <Text style={TextStyle}> Password: </Text>
          <Text> Length Should be 8 characters only </Text>
          <TextInput style={InputTextStyle}
            placeholder="Password"
            maxLength = {8}
            secureTextEntry={true}
            onChangeText={ value => {
          console.log('value:', value);
             this.props.dpassword_box(value);
           }}
           value={this.props.password_input_value}
            />
            <Text style={TextStyle}> Contact No.: </Text>
            <TextInput style={InputTextStyle}
              placeholder="contact no."
              keyboardType="numeric"
              maxLength={10}
              onChangeText={ value => {
            console.log('value:', value);
               this.props.dcontact_box(value);
             }}
             value={this.props.contact_input_value}
              />
            <Text style={TextStyle}> Address: </Text>
            <TextInput style={InputTextStyle}
              placeholder="address"
              onChangeText={ value => {
            console.log('value:', value);
               this.props.daddress_box(value);
             }}
             value={this.props.address_input_value}
            />
            <TouchableOpacity
                 style = {submitButton}
                 onPress={() => {
                   if(this.props.name_input_value == '' || this.props.email_input_value == '' || this.props.password_input_value == ''  || this.props.contact_input_value == '' || this.props.contact_input_value == '')
                   {
                     Alert.alert("Please Enter All the Values.");
                   }
                  else
                  {
                   Alert.alert("All Text Input is Filled.");
                   this.props.navigation.navigate('Donar Login');
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

const mapStateToProps = state => {
  return {
    name_input_value: state.input.dname,
    email_input_value: state.input.demail,
    password_input_value: state.input.dpassword,
    contact_input_value: state.input.dcontact,
    address_input_value: state.input.daddress,
  };
};

export default connect(mapStateToProps, {dname_box, demail_box, dpassword_box, dcontact_box, daddress_box}) (DonarRegister);
//export default DonarRegister;
