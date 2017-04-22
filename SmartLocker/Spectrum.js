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

import BottomTab from './BottomTab';
import spectrumAnalyzer from './tools/spectrum-analyzer.png';

export default class Spectrum extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Spectrum Analyzer',
    headerBackTitle: null,
    tabBarIcon: ({ focused }) => {
      return <BottomTab icon={"wrench"} label="Equipment" focused={focused} />
    },
  });

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={{ 
          padding: 20,
          paddingTop: 40,
          paddingBottom: 40,
          width: 300,
          backgroundColor: '#ffffff',
          borderWidth: 1,
          borderColor: '#cccccc',
          borderRadius: 4,    
          shadowColor: '#000000',
          shadowOffset: {
            width: 0,
            height: 2
          },
          shadowRadius: 6,
          shadowOpacity: 0.4,
          justifyContent: 'flex-start',
          alignItems: 'center'
        }}>

          <Image source={spectrumAnalyzer} style={{height: 120, width: 120}} 
            resizeMode={Image.resizeMode.contain} />

            <Text style={{
              fontFamily: 'Avenir-Heavy',
              fontSize: 25,
              color: '#0066cc',
              textAlign: 'center',
              textAlign: 'center'
            }}>
              Spectrum Analyzer
            </Text>

          <View style={{
            marginTop: 10,
            marginBottom: 20,
            paddingLeft: 20,
            paddingRight: 20,
            alignItems: 'center',
          }}>
            <Text style={{
              fontFamily: 'Avenir-Book',
              fontSize: 20,
              color: '#dd0000',
              marginTop: 20,
              marginBottom: 20
            }}>

              This part is not available

            </Text>

            <Text style={{
              fontFamily: 'Avenir-Book',
              fontSize: 20,
              color: '#888',
              marginTop: 20,
              marginBottom: 5
            }}>
              Checked out by:
            </Text>
            <Text style={{
              fontFamily: 'Avenir-Heavy',
              fontSize: 20,
              color: '#555',
              marginBottom: 20
            }}>
              George Costanza
            </Text>

          </View>

        </View>
      </View>
    )
  }

}

