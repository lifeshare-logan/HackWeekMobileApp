import React, {Component} from 'react';
import {Alert, Image,ScrollView, View} from 'react-native';
import {Text, Card, CardItem, Left, Thumbnail, Body, Button, Icon, Right, List} from 'native-base';
import { StackNavigator } from 'react-navigation';
var image = require('./noPhoto.png');
import MediaCard from './media-card';
import { themes } from './themes';

export default class MediaHome extends Component {
  static navigationOptions = {
    title: 'LifeShare Powered By Spectrio',
    headerStyle: {
      color: themes.spectrio.textColor,
      backgroundColor: themes.spectrio.accentColor
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      color: themes.spectrio.textColor
    },
  };

    render() {
      const { navigate } = this.props.navigation;

      const media = [
        {
          id: "123",
          uri: require('./wayne.jpg'),
          caption: "Reggie"
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
          uri: require('./wayne.jpg'),
          caption: ""
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
    height: '100%',
    backgroundColor: themes.spectrio.backgroundColor
  },
  wrapper: {
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: themes.spectrio.backgroundColor
  }
}
