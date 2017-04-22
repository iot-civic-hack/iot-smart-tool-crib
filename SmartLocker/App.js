import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class App extends Component {

  openLocker = (id) => {
    // fetch('http://172.16.1.5:3000/unlock?id=' + id);
    // fetch('http://172.16.104.214:3000/unlock?id=' + id);
    fetch('http://172.16.1.4:3000/unlock?id=' + id);
  }

  render() {
    return (
      <View style={styles.root}>
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
