import React, {Component} from 'react';
import { Content, DatePicker } from 'native-base';
import EventCard from './components/event-card';
import MenuCarousel from './components/menu-carousel';
import { View } from 'react-native';
import { themes } from './themes';


class UserHome extends Component {
    render() {
      const { navigate } = this.props.navigation;

      const activities = [
        {title: "Foo", time: "10:00AM"},
        {title: "Bar", time: "11:00AM"},
        {title: "Baz", time: "12:00PM"},
        {title: "Bam", time: "1:00PM"},
        {title: "Bat", time: "1:00PM"},
      ];

      const appointments = [
        {title: "Foo", time: "10:00AM"},
        {title: "Bar", time: "11:00AM"},
      ];

      const meals = [
        {title: "Breakfast", items: ["Steel Cut Oats", "Veggie Frittata", "Whole Wheat Toast", "Melon Medley"]},
        {title: "Lunch", items: ["Steel Cut Oats", "Veggie Frittata", "Whole Wheat Toast", "Melon Medley"]},
        {title: "Dinner", items: ["Steel Cut Oats", "Veggie Frittata", "Whole Wheat Toast", "Melon Medley"]},
      ];

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
