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

const region = {
  identifier: 'iBeacon Demo',
  uuid: 'e2c56db5-dffb-48d2-b060-d0f5a71096ea'
};


const threshold = -65;


export default class SmartLockerView extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'SmartLocker',
    headerBackTitle: null,
    tabBarIcon: ({ focused }) => {
      return <BottomTab icon={"lock"} label="Smart Tool Crib" focused={focused} />
    },
  });


  state = {
    rssi: '',
    proximity: '',
    date: null
  }


  componentDidMount = () => {
    if(Beacons && Beacons.requestWhenInUseAuthorization) {
      this.readBeacons();
    }
  }

  readBeacons = () => {
    // Request for authorization while the app is open
    Beacons.requestWhenInUseAuthorization();

    Beacons.startMonitoringForRegion(region);
    Beacons.startRangingBeaconsInRegion(region);

    Beacons.startUpdatingLocation();

    // Listen for beacon changes
    const subscription = DeviceEventEmitter.addListener(
      'beaconsDidRange',
      (data) => {
        if(data && data.beacons && data.beacons.length > 0) {
          const rssi = data.beacons.map(b => b.rssi).join(', ');
          const proximity = data.beacons.map(b => b.proximity).join(', ');
          this.setState({
            rssi,
            proximity,
            date: new Date()
          });
        } else {
          this.setState({
            rssi: '',
            proximity: '',
            date: new Date()
          })
        }
      }
    );
  }


  openLocker = (id) => {
    // fetch('http://172.16.1.5:3000/unlock?id=' + id);
    // fetch('http://172.16.104.214:3000/unlock?id=' + id);
    // fetch('http://172.16.1.4:3000/unlock?id=' + id);
  }

  renderGreenLight = () => {
    if(this.state.rssi && 
      this.state.rssi != 0 && 
      this.state.rssi != '' &&
      this.state.rssi > threshold) {
      return (
        <View style={{padding: 20, paddingRight: 50, paddingLeft: 50, backgroundColor: '#00ff00'}}>
          <Text style={{color: '#ffffff', fontSize: 20}}>OK</Text>
        </View>
      )
    } else {
      return (
        <View style={{padding: 20, paddingRight: 50, paddingLeft: 50, backgroundColor: '#ff0000'}}>
          <Text style={{color: '#ffffff', fontSize: 20}}>NO</Text>
        </View>
      )
    }
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image source={containerImage} style={{flex: 1, resizeMode: 'cover', alignItems: 'center', justifyContent: 'center'}}>

          <View style={{
            backgroundColor: '#ffffff', 
            padding: 30,
            margin: 20,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#cccccc',
            borderRadius: 4,    
            shadowColor: '#000000',
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowRadius: 6,
            shadowOpacity: 0.4
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

  render2() {
    return (
      <View style={styles.root}>

        <Text></Text>

        {this.renderGreenLight()}

        <Text></Text>
        <Text style={{fontSize: 20}}>RSSI: {this.state.rssi}</Text>
        <Text style={{fontSize: 20}}>PROX: {this.state.proximity}</Text>
        <Text></Text>
        <Text></Text>
        <Text>{this.state.date && this.state.date.getTime()}</Text>
        <Text></Text>
        <Text></Text>

        <TouchableOpacity onPress={() => this.openLocker(1)} style={styles.link}>
          <Text style={styles.linkText}>Open Locker 1</Text>
        </TouchableOpacity>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <TouchableOpacity onPress={() => this.openLocker(2)} style={styles.link}>
          <Text style={styles.linkText}>Open Locker 2</Text>
        </TouchableOpacity>

      </View>
    );
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