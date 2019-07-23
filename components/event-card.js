import React, {Component} from 'react';
import { Container, Header, List, Content, Card, CardItem, Body, Text } from 'native-base';

export default class EventCard extends Component {
    render() {
      let events = this.props.events;
      let eventComponents = [];
      for(let i = 0; i < Math.min(events.length, 3); i++) {
        eventComponents.push(
          <CardItem key={i} button onPress={() => alert("Hello!")}>
            <Body>
              <Text>
                {events[i].time} {events[i].title}
                </Text>
            </Body>
          </CardItem>
        )
      }
      if (events.length > 3) {
        eventComponents.push(
          <CardItem key={3} button onPress={() => alert("Hello!")}>
            <Body>
              <Text>
                And {events.length - 3} More
                </Text>
            </Body>
        </CardItem>
        );
      }

      return (
          <Card>
            <CardItem header button onPress={() => alert("Hello!")}>
              <Text>{this.props.title}</Text>
            </CardItem>
            <List>
              {eventComponents}
            </List>
          </Card>
      )
    }
}
