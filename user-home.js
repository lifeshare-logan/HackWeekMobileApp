import React, {Component} from 'react';
import { Content, DatePicker } from 'native-base';
import EventCard from './components/event-card';
import MenuCarousel from './components/menu-carousel';
import { View } from 'react-native';
import { themes } from './themes';
import {homeScreenData} from './fakeData';


class UserHome extends Component {
    render() {
      const { navigate } = this.props.navigation;

      //fake data
      const activities = homeScreenData.activities;
      const appointments = homeScreenData.appointments;
      const meals = homeScreenData.meals;

      return (
        <Content style={{backgroundColor: themes.spectrio.backgroundColor, flex: 1}}>
        <View style={{alignItems: 'center'}}>
          <EventCard title="Activities"
                     events={activities}/>
          <EventCard title="Appointments"
                     events={appointments}
                     navigation={this.props.navigation}
                     editable={true}/>
          <MenuCarousel meals={meals}/>
          </View>
        </Content>
      );
    }
}

export default UserHome;
