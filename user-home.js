import React, {Component} from 'react';
import { Content } from 'native-base';
import EventCard from './components/event-card';
import MenuCarousel from './components/menu-carousel';
import { StackNavigator } from 'react-navigation';

export default class UserHome extends Component {
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
        <Content>
          <EventCard title="Activities"
                     events={activities}/>
          <EventCard title="Appointments"
                     events={appointments}/>
          <MenuCarousel/>
        </Content>
      );
    }
}
