import React, {Component} from 'react';
import { Content } from 'native-base';
import EventCard from './components/event-card';
import MenuCarousel from './components/menu-carousel';
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
          <MenuCarousel/>
        </Content>
      );
    }
}

export default UserHome;
