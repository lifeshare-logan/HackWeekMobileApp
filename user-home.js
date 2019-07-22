import React, {Component} from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';

import EventCard from './components/event-card';

export default class UserHome extends Component {
    render() {
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
