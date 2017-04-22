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

import logo from './logo.png';

const region = {
  identifier: 'iBeacon Demo',
  uuid: 'e2c56db5-dffb-48d2-b060-d0f5a71096ea'
};

export default class App extends Component {


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
            rssi: 'NONE',
            proximity: 'NONE',
            date: new Date()
          })
        }
      }
    );
  }


  openLocker = (id) => {
    // fetch('http://172.16.1.5:3000/unlock?id=' + id);
    // fetch('http://172.16.104.214:3000/unlock?id=' + id);
    fetch('http://172.16.1.4:3000/unlock?id=' + id);
  }

  render() {
    return (
      <View style={styles.root}>

        <Image source={logo} style={{width: 298, height: 93}} 
          resizeMode={Image.stretch} />

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

AppRegistry.registerComponent('SmartLocker', () => SmartLocker);
