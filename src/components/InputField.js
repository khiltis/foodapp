import React, {Component} from 'react';
import{TextInput, StyleSheet} from 'react-native';

class InputField extends Component{
  render() {
    const {placeholder, onChangeText, style, value} = this.props;
    const {InputFieldStyle} = styles;
    return (
      <TextInput placeholder={placeholder} onChangeText= {onChangeText} value={value} style ={InputFieldStyle}  placeholderTextColor='black' />
    );
  }
}

const styles = {
  InputFieldStyle:{
    margin: 15,
    height: 50,
    borderColor: 'purple',
    borderWidth: 2,
    borderRadius: 10,
    alignSelf:'center',
    marginVertical: 10,
    width: "90%",
  },
};

export default InputField;
