import React, {
  Component
} from 'react';

import {
  Text,
  View,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';


// <Image source={this.props.icon} style={{height: 25}} resizeMode={Image.resizeMode.contain} />


export default class BottomTab extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Icon name={this.props.icon} size={25} color="#fff" />
        <Text style={{ 
          marginTop: 4, 
          fontSize: 12, 
          color: '#ffffff'
        }} >
          {this.props.label}
        </Text>
      </View>
    )
  } 
}
