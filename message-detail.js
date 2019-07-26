import React, {Component} from 'react';
import {Alert, View, Button, TouchableHighlight} from 'react-native';
import {Badge, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text} from 'native-base';
var image = require('./noPhoto.png');
import {themes} from './themes';
import {chatMessages} from './fakeData';
import { GiftedChat } from 'react-native-gifted-chat'

export default class MessageDetail extends Component {
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

    constructor(props) {
      super(props);
      this.state = {
        messages: [],
      };
    }

    componentWillMount() {
      this.setState({
        messages: chatMessages
      })
    }

    // The GiftedChat's onSend function triggers this which basically makes a coppy
    // of the previous state, appends a new message, and resets the state.
    onSend(messages = []) {
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, messages),
      }))
    }

    // pass a list of messages to gifted chat, with id's of two different users,
    // and the chat will sort them by oldest to newest and present them in an
    // messaging type chat.
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
