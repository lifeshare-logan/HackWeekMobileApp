import React, {Component} from 'react';
import {AppRegistry, Text, View, Button} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class UserHome extends Component {
    render() {
      const { navigate } = this.props.navigation;
      return (
        <View>
        <Text>This is the User Home screen</Text>
        <Button
          onPress={() => navigate('Messaging')}
          title="Messaging"
        />
      </View>

      )
    }
}
