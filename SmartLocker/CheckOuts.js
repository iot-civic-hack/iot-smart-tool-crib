import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  DeviceEventEmitter,
  Image,
  ScrollView
} from 'react-native';

import BottomTab from './BottomTab';
import CheckingOut from './CheckingOut';

import oscope from './tools/oscope.png';


export default class CheckOuts extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Checked Out',
    tabBarIcon: ({ focused }) => {
      return <BottomTab icon={"list-ul"} label="Checked Out" focused={focused} />
    },
    headerBackTitle: null
  });

  state = {
    done: false
  }

  done = () => {
    this.setState({done: true});
  }

  doCheckout = () => {
    this.props.navigation.navigate('CheckingOut', {done: this.done});
  }

  renderTool = () => {
    if(this.state.done) {
      return <Text style={{
        margin: 20,
        color: '#888',
        fontSize: 18,
        textAlign: 'center',
        fontFamily: 'Avenir-Book',
      }}>You have no equipment checked out</Text>
    } else {
      return (
        <TouchableOpacity onPress={this.doCheckout}
          style={{
            flexDirection: 'row', 
            alignSelf: 'stretch', 
            backgroundColor: '#ffffff',
            padding: 20,
            justifyContent: 'space-around'
        }}>
          <Image source={oscope} style={{height: 120, width: 120}} 
            resizeMode={Image.resizeMode.contain} />

          <View style={{
            flexDirection: 'column',
            padding: 10,
            paddingLeft: 40
          }}>

            <Text style={{
              fontSize: 20,
              color: '#0066cc',
              fontFamily: 'Avenir-Book',
            }}>
              ADS1102CA
            </Text>


            <Text style={{
              fontSize: 12,
              color: '#444',
              fontFamily: 'Avenir-Heavy',
            }}>
              Checked Out:
            </Text>

            <Text style={{
              fontSize: 16,
              color: '#888',
              fontFamily: 'Avenir-Book',
            }}>
              April 22nd, 2017
            </Text>


            <Text style={{
              fontSize: 12,
              color: '#444',
              fontFamily: 'Avenir-Heavy',
            }}>
              Due:
            </Text>

            <Text style={{
              fontSize: 16,
              color: '#888',
              fontFamily: 'Avenir-Book',
            }}>
              May 22nd, 2017
            </Text>

          </View>

        </TouchableOpacity>
      )
    }
  }

  render() {
    return (
      <ScrollView style={{flex: 1}}>
        {this.renderTool()}
      </ScrollView>
    )
  }


}

