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

import oscope from './tools/oscope.png';
import spectrumAnalyzer from './tools/spectrum-analyzer.png';
import DS1102D from './tools/Rigol-DS1102D.png';
import UT300B from './tools/UT300B.png';
import CP2E from './tools/CP-2E.png';
import AT852D from './tools/Atten-AT852D.png';
import ut61b from './tools/multimeter-ut61b.png';
import UT18D from './tools/UT18D.png';
import ProgStudio from './tools/Prog-Studio.png';
import dm3068 from './tools/dm3068.png';

const ImageTile = ({tool}) => {
  return (
    <TouchableOpacity onPress={tool.onPress}>
      <View style={{
        padding: 10, 
        margin: 15,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 4,    
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowRadius: 5,
        shadowOpacity: 0.2
      }}>
        <Image source={tool.image} style={{height: 120, width: 120}} 
          resizeMode={Image.resizeMode.contain} />
        <Text style={{
          fontSize: 16,
          fontFamily: 'Avenir-Book',
          textAlign: 'center'
        }}>{tool.label}</Text>
      </View>
    </TouchableOpacity>
  )
}


const Row = ({tool1, tool2}) => {
  return (
    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <ImageTile tool={tool1} />
      <ImageTile tool={tool2} />
    </View>
  )
}


export default class EquipmentList extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Equipment',
    // headerTitle: <HeaderTitle label="TO DO" style={{marginLeft: (Platform.OS === 'ios' ? 0 : 40)}} />,
    // headerStyle: { backgroundColor : '#ffffff', shadowRadius: 0, shadowOffset: { height: 0 }, elevation: 0 },
    tabBarIcon: ({ focused }) => {
      return <BottomTab icon={"wrench"} label="Equipment" focused={focused} />
    },
    headerBackTitle: null
  });

  loadOscope = () => {
    this.props.navigation.navigate('Oscope', {checkedOut: this.props.checkedOut});
  }

  loadSpectrum = () => {
    this.props.navigation.navigate('Spectrum');
  }

  render() {
    return (
      <ScrollView style={{paddingTop: 20, paddingBottom: 20}}>
        <View style={{marginBottom: 100}}>

        <Row tool1={{image: oscope, label: 'ADS1102CA', onPress: this.loadOscope}} 
              tool2={{image: spectrumAnalyzer, label: 'Spectrum Analyzer', onPress: this.loadSpectrum}} />

        <Row tool1={{image: DS1102D, label: 'DS1102D'}} 
              tool2={{image: UT300B, label: 'UT300B'}} />

        <Row tool1={{image: CP2E, label: 'CP-2E'}} 
              tool2={{image: AT852D, label: 'Atten-AT852D'}} />

        <Row tool1={{image: ut61b, label: 'Multimeter ut61b'}} 
              tool2={{image: UT18D, label: 'UT18D'}} />

        <Row tool1={{image: ProgStudio, label: 'Prog-Studio'}} 
              tool2={{image: dm3068, label: 'dm3068'}} />

        </View>
      </ScrollView>
    )
  }


}

