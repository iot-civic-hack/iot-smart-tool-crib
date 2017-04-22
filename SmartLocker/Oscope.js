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

import BottomTab from './BottomTab';
import oscope from './tools/oscope.png';

import Unlocked from './Unlocked';
import ThankYou from './ThankYou';

export default class Oscope extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'ADS1102CA',
    headerBackTitle: null,
    tabBarIcon: ({ focused }) => {
      return <BottomTab icon={"wrench"} label="Equipment" focused={focused} />
    },
  });

  state = {
    close: false,
    unlocked: false,
    doorClosed: false
  }

  renderTextOrButton = () => {
    if(!this.state.close) {
      return (
        <Text style={{
          fontFamily: 'Avenir-Book',
          fontSize: 20,
          color: '#888',
          marginTop: 10,
          marginBottom: 20
        }}>
          Walk over to tool crib
        </Text>
      )
    } else {
      return (
        <TouchableOpacity onPress={() => {this.setState({unlocked: true})}} style={{
          padding: 10,
          paddingLeft: 20,
          paddingRight: 20,
          marginBottom: 20,
          borderWidth: 2,
          borderColor: '#398439',
          backgroundColor: '#5cb85c',
          borderRadius: 4
        }}>
          <Text style={{
            fontFamily: 'Avenir-Book',
            fontSize: 20,
            color: '#ffffff'
          }}>
            UNLOCK
          </Text>
        </TouchableOpacity>
      )
    }
  }

  walkClose = () => {
    this.setState({close: true});
  }

  doorClosed = () => {
    this.setState({doorClosed: true});
  }

  render() {
    if(this.state.doorClosed) {
      return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ThankYou />
        </View>
      )      
    }

    if(this.state.unlocked) {
      return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Unlocked doorClosed={this.doorClosed} />
        </View>
      )
    }

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

          <TouchableWithoutFeedback onPress={this.walkClose}>
            <Image source={oscope} style={{height: 120, width: 120}} 
              resizeMode={Image.resizeMode.contain} />
          </TouchableWithoutFeedback>

            <Text style={{
              fontFamily: 'Avenir-Heavy',
              fontSize: 25,
              color: '#0066cc',
              textAlign: 'center',
              textAlign: 'center'
            }}>
              ADS1102CA
            </Text>

          <View style={{
            marginTop: 10,
            marginBottom: 20,
            paddingLeft: 30,
            paddingRight: 30,
            alignItems: 'center',
          }}>
            <Text style={{
              fontFamily: 'Avenir-Heavy',
              fontSize: 20,
              color: '#44dd44',
              marginTop: 20,
              marginBottom: 20
            }}>

              Available

            </Text>

            {this.renderTextOrButton()}

          </View>

        </View>
      </View>
    )
  }

}

