import React, {Component} from 'react';
import {Text, ScrollView, View} from 'react-native';
import { themes } from './themes';

export default class SettingsHome extends Component {
  static navigationOptions = {
    title: 'LifeShare Powered By Spectrio',
    headerStyle: {
      color: themes.spectrio.textColor,
      backgroundColor: themes.spectrio.accentColor
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      color: themes.spectrio.textColor
    },
  };
    render() {
      return (
        <ScrollView>
        <Text>
          SETTings HOME
        </Text>
        </ScrollView>
      )
    }
}
