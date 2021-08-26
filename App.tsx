import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Components/Home'
import {Provider} from 'react-redux';
import {store} from './Store';
import { connect } from 'react-redux';
import { fetchAction } from './src/actions';


export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
      <Home/> 
      <Text>Helloo</Text>{
        
      }
      </Provider>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
