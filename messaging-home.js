import React, {Component} from 'react';
import {Badge, Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text} from 'native-base';
import {ScrollView} from 'react-native';
import Message from './message';
import { themes } from './themes';

export default class MessagingHome extends Component {
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
      const { navigate } = this.props.navigation;

      let messages = [{
        sender: 'Tommy T',
        message: 'Doing what you like will always keep you happy . .',
        time: '3:43 pm',
        numberNew: '0'
      },
      {
        sender: 'Logan Schiessle',
        message: 'How are you today?',
        time: '3:55 pm',
        numberNew: '1'
      }
    ]
      let messageComponents = [];

      for(let i = 0; i < messages.length; i++) {
        messageComponents.push(
          <Message
            key={i}
            navigation={navigate}
            sender={messages[i].sender}
            message={messages[i].message}
            time={messages[i].time}
            numberNew={messages[i].numberNew}/>
        )
      }
      return (
        <ScrollView>
        <List>
          {messageComponents}
        </List>
        </ScrollView>
      )
    }
}
