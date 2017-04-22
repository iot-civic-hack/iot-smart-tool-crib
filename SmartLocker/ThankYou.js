import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  DeviceEventEmitter,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import BottomTab from './BottomTab';
import oscope from './tools/oscope.png';

export default class ThankYou extends Component {

  render() {
    return (
        <View style={{ 
          padding: 20,
          paddingTop: 40,
          paddingBottom: 40,
          width: 300,
          backgroundColor: '#ffffff',
          borderWidth: 2,
          borderColor: '#398439',
          borderRadius: 4,    
          shadowColor: '#398439',
          shadowOffset: {
            width: 0,
            height: 2
          },
          shadowRadius: 6,
          shadowOpacity: 0.4,
          justifyContent: 'flex-start',
          alignItems: 'center'
        }}>

          <TouchableWithoutFeedback>
            <Icon name={"check-circle"} size={120} color="#398439" />
          </TouchableWithoutFeedback>

          <View style={{
            borderWidth: 1,
            borderRadius: 4,
            borderColor: '#cccccc',
            marginTop: 10,
            marginBottom: 20,
            paddingLeft: 30,
            paddingRight: 30,
            alignItems: 'center',
          }}>
            <Text style={{
              fontFamily: 'Avenir-Heavy',
              fontSize: 20,
              color: '#398439',
              marginTop: 20,
              marginBottom: 20
            }}>

              Thank You!

            </Text>

          </View>

        </View>
    )
  }

}

