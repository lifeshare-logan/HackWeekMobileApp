import React, {Component} from 'react';
import { H2, Container, Header, List, Button, Badge, Content, Card, CardItem, Body, Icon, Text, Left, Right } from 'native-base';
import { StackNavigator } from 'react-navigation';
import {themes} from '../themes';
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
             <Left>
              <H2 primary>{this.props.title}</H2>
              </Left>
              <Right>
                {this.props.editable &&
                  <Button rounded style={{ backgroundColor: themes.light.primaryColor}} onPress={() => this.props.navigation.navigate('EventEdit', {})}>
                    <Icon name="add" style={{ backgroundColor: themes.light.primaryColor, fontSize: 24, lineHeight: 24, color: "#fff"}}/>
                  </Button>
                }
              </Right>
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
