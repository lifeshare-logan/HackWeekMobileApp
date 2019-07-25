import React, {Component} from 'react';
import {Text} from 'react-native';
import { themes } from './themes';

export default class SettingsHome extends Component {
  static navigationOptions = {
    title: 'LifeShare',
    headerStyle: {
      color: themes.light.textColor,
      backgroundColor: themes.light.backgroundColor
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      color: themes.light.textColor
    },
  };
    render() {
      return (
        <Text>
          SETTings HOME
        </Text>
      )
    }
}
