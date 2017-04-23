import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  DeviceEventEmitter,
  Image
} from 'react-native';

import Beacons from 'react-native-beacons-manager';

import smartlockimage from './smartlock.png';
import containerImage from './container.png';

import BottomTab from './BottomTab';

export default class SmartLockerView extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'SmartLocker',
    headerBackTitle: null,
    tabBarIcon: ({ focused }) => {
      return <BottomTab icon={"lock"} label="Smart Tool Crib" focused={focused} />
    },
  });

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image source={containerImage} style={{flex: 1, resizeMode: 'cover', alignItems: 'center', justifyContent: 'center'}}>

          <View style={{
            backgroundColor: 'transparent', 
            padding: 30,
            margin: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={smartlockimage} style={{height: 200, width: 200}} 
            resizeMode={Image.resizeMode.contain} />

            <Text style={{
              fontSize: 40,
              marginTop: 20,
              fontFamily: 'Avenir-Heavy',
              color: '#0066cc'
            }}>
            Smart Tool Crib
            </Text>

            <Text style={{
              fontSize: 25,
              fontFamily: 'Avenir-Book',
              color: '#112288'
            }}>
              Equipment Tracking
            </Text>
          </View>

        </Image>
      </View>
    )
  }

}


const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#0066cc'
  },
  linkText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0066cc',
  }
});