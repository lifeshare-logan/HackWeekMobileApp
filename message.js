import React, {Component} from 'react';
import {AppRegistry, Alert, View, Button, TouchableHighlight} from 'react-native';
import {Badge, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text} from 'native-base';
import { StackNavigator } from 'react-navigation';
var image = require('./noPhoto.png');
import { themes } from './themes';

export default class Message extends Component {

  alertMe(name) {
    Alert.alert('You tapped the message from ' + name + '.');
  }

  render() {
    let badge;
    if (this.props.numberNew > 0) {
      badge = <Badge><Text>{this.props.numberNew}</Text></Badge>
    }
    return (
        <ListItem avatar onPress={() => this.props.navigation('Details', {sender: this.props.sender, message: this.props.message, time: this.props.time})}>
          <Left>
            <Thumbnail source={image} />
          </Left>
          <Body>
            <Text>{this.props.sender}</Text>
            <Text note style={styles}>{this.props.message}</Text>
          </Body>
          <Right>
            <Text note style={styles}>{this.props.time}</Text>
            {badge}
          </Right>
        </ListItem>
    );
  }
}

const styles = {
  color: themes.spectrio.textColor,
}
