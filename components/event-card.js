import React, {Component} from 'react';
import { Container, Header, List, Content, Card, CardItem, Body, Text } from 'native-base';

export default class EventCard extends Component {
    state = {expanded: false};

    render() {
      let events = this.props.events;
      let eventComponents = [];
      const displayCount = this.state.expanded
        ? events.length
        : Math.min(events.length, 3);
      for(let i = 0; i < displayCount; i++) {
        const eventText = events[i].time + " " + events[i].title;
        eventComponents.push(this.generateCardItem(i, eventText));
      }
      if (!this.state.expanded && events.length > 3) {
        const text = "Show " + (events.length - 3) + " More";
        eventComponents.push(this.generateCardItem(3, text, () => this.setState({expanded: true})));
      }
      else if (this.state.expanded) {
        const text = "Hide " + this.props.title;
        eventComponents.push(this.generateCardItem(events.length, text, () => this.setState({expanded: false})));
      }

      return (
          <Card>
            <CardItem bordered header>
              <Text>{this.props.title}</Text>
            </CardItem>
            <List>
              {eventComponents}
            </List>
          </Card>
      )
    }

    generateCardItem(key, text, onPress) {
      onPress = onPress || function(){};
      return <CardItem key={key} bordered button onPress={onPress}>
        <Body>
          <Text>
            {text}
          </Text>
        </Body>
      </CardItem>
    }
}
