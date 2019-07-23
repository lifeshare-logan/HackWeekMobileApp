import React, {Component} from 'react';
import {AppRegistry, Text, View, Button} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body } from 'native-base';
import EventCard from './components/event-card';
import { StackNavigator } from 'react-navigation';

export default class UserHome extends Component {
    render() {
      const { navigate } = this.props.navigation;

      let events = [
        {title: "Foo", time: "10:00AM"},
        {title: "Bar", time: "11:00AM"}
      ];
      return (
        <Container>
          <Content>
          <EventCard title="Activities"
                     events={events}/>

          </Content>
        </Container>
      )
    }
}
