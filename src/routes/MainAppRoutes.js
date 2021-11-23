import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../components/HomeScreen';
import HelpScreen from '../components/HelpScreen';
import AdminScreen from '../components/AdminScreen';
import DonarScreen from '../components/DonarScreen';
import DonarListScreen from '../components/DonarListScreen';
import DonationListScreen from '../components/DonationListScreen';
import AdminLogin from '../components/AdminLogin';
import DonarLogin from '../components/DonarLogin';
import DonarRegister from '../components/DonarRegister';
import DonateForm from '../components/DonateForm';
import SplashScreen from '../components/SplashScreen';

const Stack = createNativeStackNavigator();

function MainApproutes() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{header: () => null}} />
        <Stack.Screen name=" " component={HomeScreen}
        options={({navigation, route}) => ({
            headerStyle: {backgroundColor: '#d6f5f5'},
            header: () => null,
          })}
         />
         <Stack.Screen
         name="Admin Login" component={AdminLogin} />
         <Stack.Screen
         name="Donar Register" component={DonarRegister} />

         <Stack.Screen
         name="Donar Login" component={DonarLogin} />
         <Stack.Screen
         name="Donation Form" component={DonateForm} />
         <Stack.Screen
          name="Admin"
          component={AdminScreen}
          options={({navigation, route}) => ({
              headerStyle: {backgroundColor: '#d6f5f5'},
              headerRight:() => (
                <View>
                <TouchableOpacity
                onPress ={() => navigation.navigate(' ')}>
                   <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', backgroundColor: '#004d4d', width: 65, borderRadius: 20, textAlign: 'center'}}> Logout </Text>
                </TouchableOpacity>
                </View>
              ),
            })}
         />
        <Stack.Screen
         name="Donar"
         component={DonarScreen}
         options={({navigation, route}) => ({
             headerStyle: {backgroundColor: '#d6f5f5'},
             headerRight:() => (
               <View>
               <TouchableOpacity
               onPress ={() => navigation.navigate(' ')}>
                  <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', width: 65, backgroundColor: '#004d4d', borderRadius: 20, textAlign: 'center'}}> Logout </Text>
               </TouchableOpacity>
               </View>
             ),
           })}
         />
         <Stack.Screen
          name="help"
          component={HelpScreen}
          options={{header: () => null}}
        />
        <Stack.Screen
         name="Donator"
         component={DonarListScreen}
       />
       <Stack.Screen
        name="Donation"
        component={DonationListScreen}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainApproutes;
