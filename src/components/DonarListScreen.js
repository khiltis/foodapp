import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import DonarList from '../components/common/DonarList';

class DonarListScreen extends Component{
  render(){
    const DATA = [
      {
        name: 'Khilti Savla',
        email: 'khilti.s@gmail.com',
        contact: '8097124461',
        address: 'Ghatkopar',
      },
      {
        name: 'Drashti Savla',
        email: 'Drashti.Savla@gmail.com',
        contact: '8089807102',
        address: 'Parel',
      },
      {
        name: 'Khilti1 Savla',
        email: 'khilti.s@gmail.com',
        contact: '8097124461',
        address: 'Ghatkopar',
      },
      {
        name: 'Drashti1 Savla',
        email: 'Drashti.Savla@gmail.com',
        contact: '8089807102',
        address: 'Parel',
      },
      {
        name: 'Khilti Savla',
        email: 'khilti.s@gmail.com',
        contact: '8097124461',
        address: 'Ghatkopar',
      },
      {
        name: 'Drashti Savla',
        email: 'Drashti.Savla@gmail.com',
        contact: '8089807102',
        address: 'Parel',
      },
      {
        name: 'Khilti Savla',
        email: 'khilti.s@gmail.com',
        contact: '8097124461',
        address: 'Ghatkopar',
      },
      {
        name: 'Drashti Savla',
        email: 'Drashti.Savla@gmail.com',
        contact: '8089807102',
        address: 'Parel',
      },
      {
        name: 'Khilti Savla',
        email: 'khilti.s@gmail.com',
        contact: '8097124461',
        address: 'Ghatkopar',
      },
      {
        name: 'Drashti Savla',
        email: 'Drashti.Savla@gmail.com',
        contact: '8089807102',
        address: 'Parel',
      },
    ];
    return(
      <View>
        <FlatList
        data = {DATA}
          renderItem={item => {
            return (
              <DonarList name={item.item.name} email={item.item.email} contact={item.item.contact} address={item.item.address} />
            );
          }}
        />
      </View>
    );
  }
}

export default DonarListScreen;
