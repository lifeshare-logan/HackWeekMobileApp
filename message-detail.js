import React, {Component} from 'react';
import {Alert, View, Button, TouchableHighlight} from 'react-native';
import {Badge, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text} from 'native-base';
var image = require('./noPhoto.png');
import { GiftedChat } from 'react-native-gifted-chat'

export default class MessageDetail extends Component {
    constructor(props) {
      super(props);
      this.state = {
        messages: [],
      };
    }

    componentWillMount() {
      this.setState({
        messages: [
          {
            _id: 1,
            text: 'Hello developer',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'React Native',
              avatar: 'https://placeimg.com/140/140/any',
            },
          },
          {
            _id: 2,
            text: 'Hello grandma',
            createdAt: new Date(),
            user: {
              _id: 1,
              name: 'Logan',
              avatar: 'https://placeimg.com/140/140/any',
            },
          },

        ],
      })
    }

    onSend(messages = []) {
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, messages),
      }))
    }

    render() {
      const { navigation } = this.props;
      const name = navigation.getParam('sender');
      return (
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1,
          }}
        />
      )
    }
}
