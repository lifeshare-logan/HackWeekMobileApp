import React, {Component} from 'react';
import {Alert, Image,ScrollView, View} from 'react-native';
import {Text, Card, CardItem, Left, Thumbnail, Body, Button, Icon, Right, List} from 'native-base';
import { StackNavigator } from 'react-navigation';
var image = require('./noPhoto.png');
import MediaCard from './media-card';
import { themes } from './themes';

export default class MediaHome extends Component {
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

      const media = [
        {
          id: "123",
          uri: require('./noPhoto.png'),
          caption: "No Photo"
        },
        {
          id: "124",
          uri: require('./bob_copy_2.jpg'),
          caption: ""
        },
        {
          id: "125",
          uri: require('./noPhoto.png'),
          caption: ""
        },
        {
          id: "126",
          uri: require('./bob_copy_2.jpg'),
          caption: "Bob Lee Swagger"
        },
        {
          id: "127",
          uri: require('./noPhoto.png'),
          caption: ""
        },
        {
          id: "128",
          uri: require('./noPhoto.png'),
          caption: "No Photo"
        },
      ];
      const comps = [];
      for (let i = 0; i < media.length; i++)
      {
          comps.push(
            <MediaCard
              key={media[i].id}
              navigation={navigate}
              media={media[i]}/>
          );
      }
      return (
        <View style={styles.outer}>
          <ScrollView contentContainerStyle={styles.wrapper}>
            {comps}
          </ScrollView>
        </View>
      )
    }
}

const styles = {
  outer: {
    flex: 1,
    height: '100%'
  },
  wrapper: {
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    flexDirection: 'row'
  }
}
