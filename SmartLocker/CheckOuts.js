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

export default class CheckOuts extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Checked Out',
    tabBarIcon: ({ focused }) => {
      return <BottomTab icon={"list-ul"} label="Checked Out" focused={focused} />
    },
    headerBackTitle: null
  });

  render() {
    return (
      <View>
        <Text>Checkouts</Text>
      </View>
    )
  }


}

