import React, {Component} from 'react';
import {Badge, Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text} from 'native-base';
import Message from './message';

export default class MessagingHome extends Component {
    render() {
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
            sender={messages[i].sender}
            message={messages[i].message}
            time={messages[i].time}
            numberNew={messages[i].numberNew}/>
        )
      }
      return (
        <List>
          {messageComponents}
        </List>
      )
    }
}
