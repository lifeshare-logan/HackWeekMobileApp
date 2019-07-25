import React, {Component} from 'react';
import {AppRegistry, Text, View, Button} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body } from 'native-base';
import EventCard from './components/event-card';
import { StackNavigator } from 'react-navigation';
import { themes } from './themes';

class UserHome extends Component {
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

      let activities = [
        {title: "Foo", time: "10:00AM"},
        {title: "Bar", time: "11:00AM"},
        {title: "Baz", time: "12:00PM"},
        {title: "Bam", time: "1:00PM"},
        {title: "Bat", time: "1:00PM"},
      ];

      let appointments = [
        {title: "Foo", time: "10:00AM"},
        {title: "Bar", time: "11:00AM"},
      ];
      return (
        <Content style={themes.light}>
          <EventCard title="Activities"
                     events={activities}/>
          <EventCard title="Appointments"
                     events={appointments}/>
        </Content>
      );
    }
}

export default UserHome;
