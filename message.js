import React, {Component} from 'react';
import {Badge, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text} from 'native-base';
var image = require('./noPhoto.png');

export default class Message extends Component {
  render() {
    let badge;
    if (this.props.numberNew > 0) {
      badge = <Badge><Text>{this.props.numberNew}</Text></Badge>
    }
    return (

      <ListItem avatar>
        <Left>
          <Thumbnail source={image} />
        </Left>
        <Body>
          <Text>{this.props.sender}</Text>
          <Text note>{this.props.message}</Text>
        </Body>
        <Right>
          <Text note>{this.props.time}</Text>
          {badge}
        </Right>

      </ListItem>
    );
  }
}
