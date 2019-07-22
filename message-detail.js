import React, {Component} from 'react';
import {Alert, View, Button, TouchableHighlight} from 'react-native';
import {Badge, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text} from 'native-base';
var image = require('./noPhoto.png');

export default class MessageDetail extends Component {
    render() {
      const { navigation } = this.props;
      const name = navigation.getParam('sender');
      return (
        <Text>{name}</Text>
      )
    }
}
