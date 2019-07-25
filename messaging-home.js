import React, {Component} from 'react';
import {Badge, Container, Header, Content, List, ListItem, Icon, Left, Body, Right, Thumbnail, Text, Fab, Form, Button, Item, Input, Textarea} from 'native-base';
import {ScrollView, Alert, Modal} from 'react-native';
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

  constructor(props) {
    super(props);
    this.state = {
      create: false
    };
  }

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
        message: 'How are you today? I hope you are doing well . .',
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
        <Container>
          <ScrollView>
            <List>
              {messageComponents}
            </List>
          </ScrollView>
          <Fab
            active={true}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: themes.light.primaryColor }}
            position="bottomRight"
            onPress={() => this.newMessage()}>
            <Icon large name="add" />
          </Fab>
          <Modal
            visible={this.state.create}
            transparent={false}
            onRequestClose={() => this.setState({ create: false})}
          >
            <Header />
            <Form style={{paddingBottom: 10}}>
              <Item>
                <Input placeholder="Recipient" />
              </Item>
              <Item>
                <Input placeholder="Message" />
              </Item>
            </Form>
            <Button block onPress={() => this.setState({ create: false})}>
              <Text> Send Message </Text>
            </Button>
          </Modal>
        </Container>
      )
    }

    newMessage() {
      this.setState({ create: true})
      // Alert.alert("New Message");
    }
}
