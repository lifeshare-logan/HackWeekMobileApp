import React, {Component} from 'react';
import {Badge, Container, Header, Content, List, ListItem, Icon, Left, Body, Right, Thumbnail, Text, Fab, Form, Button, Item, Input, Textarea} from 'native-base';
import {ScrollView, Alert, Modal, View} from 'react-native';
import Message from './message';
import { themes } from './themes';
import {messagingHomeList} from './fakeData';

export default class MessagingHome extends Component {
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
      create: false
    };
  }

    render() {
      // Each home screen for the repective tab, should capture the nav prop like
      // so, then pass it to each child component. See how the Message components
      // below all have the prop: navigation={navigate}. Now those components
      // can also navigate.
      const { navigate } = this.props.navigation;

      let messages = messagingHomeList;

      // In React Native, you can actually create an array of actual components
      // Then throw them on the screen in a list or whatever.
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
          <ScrollView style={{backgroundColor: themes.spectrio.backgroundColor}}>
            <List>
              {messageComponents}
            </List>
          </ScrollView>
          <Fab
            active={true}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: themes.spectrio.primaryColor }}
            position="bottomRight"
            onPress={() => this.newMessage()}>
            <Icon large name="add" />
          </Fab>
          <Modal
            visible={this.state.create}
            transparent={true}
            animationType={'slide'}
            onRequestClose={() => this.setState({ create: false})}
          >
            <Header style={{backgroundColor: themes.spectrio.accentColor}}/>
            <View style={{backgroundColor: themes.spectrio.backgroundColor}}>
            <Form style={{paddingBottom: 10, backgroundColor: themes.spectrio.backgroundColor}}>
              <Item>
                <Input placeholder="Recipient" />
              </Item>
              <Item>
                <Input placeholder="Message" />
              </Item>
            </Form>
            <Button block style={{backgroundColor: themes.spectrio.primaryColor}}onPress={() => this.setState({ create: false})}>
              <Text style={{color: themes.spectrio.textColor}}> Send Message </Text>
            </Button>
            </View>
          </Modal>
        </Container>
      )
    }

    newMessage() {
      this.setState({ create: true})
    }
}
