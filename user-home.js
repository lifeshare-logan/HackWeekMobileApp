import React, {Component} from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';

import EventCard from './components/event-card';

export default class UserHome extends Component {
    render() {
      let activities = [
        {title: "Foo", time: "10:00AM"},
        {title: "Bar", time: "11:00AM"},
        {title: "Baz", time: "12:00PM"},
        {title: "Bam", time: "1:00PM"},
        {title: "Bat", time: "1:00PM"},
      ];

      let appointments = [
        {title: "Foo", time: "10:00AM"},
        {title: "Bar", time: "11:00AM"}
      ];

      return (
        <Content>
          <EventCard title="Activities"
                     events={activities}/>
          <EventCard title="Appointments"
                     events={appointments}/>
        </Content>
      )
    }
}
