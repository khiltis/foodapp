import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {connect} from 'react-redux';
import {email_box, password_box} from '../actions';

class AdminLogin extends Component{
  
  render(){
    const {container, InputTextStyle, TextStyle, submitButton, submitButtonText} = styles;
    return(
      <View style={container}>
      <Text style={TextStyle}> Email Id</Text>
      <TextInput style={InputTextStyle}
        placeholder="email"
        maxLength = {50}
        autoCapitalize = 'none'
        onChangeText=
       {value => {
         console.log('value:', value);
         this.props.email_box(value);
       }}
        value={this.props.email_input_value}
       />
          <Text style={TextStyle}> Password </Text>
          <Text> Length Should be 8 characters only </Text>
          <TextInput style={InputTextStyle}
            placeholder="Password"
            maxLength = {8}
            secureTextEntry={true}
            autoCapitalize = 'none'
            onChangeText=
           {value => {
             console.log('value:', value);
             this.props.password_box(value);
           }}
            value={this.props.password_input_value}
           />

            <TouchableOpacity
                 style = {submitButton}
                 onPress={() => {
                   if(this.props.email_input_value == '' || this.props.password_input_value == '' )
                   {
                     Alert.alert("Please Enter All the Values.");

                   }
                  else
                  {
                   Alert.alert("All Text Input is Filled.");
                   this.props.navigation.navigate('Admin');
                   }

                 }}>
                 <Text style = {submitButtonText}> Submit </Text>
              </TouchableOpacity>
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
    email_input_value: state.input.email,
    password_input_value: state.input.password,
  };
};

export default connect(mapStateToProps, {email_box, password_box}) (AdminLogin);
