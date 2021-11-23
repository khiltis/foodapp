import React, {Component} from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
import DonationList from '../components/common/DonationList';

class DonationListScreen extends Component{
  render(){
    const DATA = [
      {
        name: 'khilti savla',
        email: 'khilti.s@gmail.com',
        date: "30/10/2021",
        typeoffood: "Dal & Rice",
        contact: '8097124461',
        address: 'Ghatkopar',
      },
      {
        name: 'khilti shah',
        email: 'khilti.s@gmail.com',
        contact: '8097124461',
        date: "31/10/2021",
        typeoffood: "Roti and Vegatables",
        address: 'Ghatkopar',
      },
      {
        name: 'Drashti savla',
        email: 'khilti.s@gmail.com',
        date: "01/11/2021",
        typeoffood: "Dal & Rice",
        contact: '8097124461',
        address: 'Ghatkopar',
      },
      {
        name: 'khilti1 savla',
        email: 'khilti.s@gmail.com',
        date: "02/11/2021",
        typeoffood: "Roti and Vegatables",
        contact: '8097124461',
        address: 'Ghatkopar',
      },
      {
        name: 'khilti savla',
        email: 'khilti.s@gmail.com',
        date: "05/11/2021",
        typeoffood: "Roti and Vegatables",
        contact: '8097124461',
        address: 'Ghatkopar',
      },
      {
        name: 'khilti shah',
        email: 'khilti.s@gmail.com',
        date: "06/11/2021",
        typeoffood: "Dal & Rice",
        contact: '8097124461',
        address: 'Ghatkopar',
      },
      {
        name: 'Drashti savla',
        email: 'khilti.s@gmail.com',
        date: "10/11/2021",
        typeoffood: "Dal & Rice",
        contact: '8097124461',
        address: 'Ghatkopar',
      },
      {
        name: 'khilti1 savla',
        email: 'khilti.s@gmail.com',
        date: "01/11/2021",
        typeoffood: "Dal & Rice",
        contact: '8097124461',
        address: 'Ghatkopar',
      },
      {
        name: 'khilti shah',
        email: 'khilti.s@gmail.com',
        date: "01/11/2021",
        typeoffood: "Dal & Rice",
        contact: '8097124461',
        address: 'Ghatkopar',
      },
      {
        name: 'Drashti savla',
        email: 'khilti.s@gmail.com',
        date: "01/11/2021",
        typeoffood: "Dal & Rice",
        contact: '8097124461',
        address: 'Ghatkopar',
      },
      {
        name: 'khilti1 savla',
        email: 'khilti.s@gmail.com',
        date: "01/11/2021",
        typeoffood: "Dal & Rice",
        contact: '8097124461',
        address: 'Ghatkopar',
      },
    ];
    return(
      <View>
      <FlatList
        data = {DATA}
        renderItem={item => {
          return (
            <DonationList name={item.item.name} email={item.item.email} date={item.item.date} typeoffood={item.item.typeoffood} contact={item.item.contact} address={item.item.address} />
          );
        }}
      />
      </View>
    );
  }
}

export default DonationListScreen;
