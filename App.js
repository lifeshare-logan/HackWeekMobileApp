import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';
import { Container, Header, Title, Button, Left, Right, Body, Icon, Content, Footer, FooterTab, Tabs, Tab, TabHeading} from 'native-base';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import UserHome from './user-home';
import MessagingHome from './messaging-home';
import MediaHome from './media-home';
import SettingsHome from './settings-home';
import MessageDetail from './message-detail';

const UserStack = createStackNavigator({
  User: UserHome,
});

const MessagingStack = createStackNavigator({
  Messaging: {
    screen: MessagingHome,
    path: 'messaging'
  },
  Details: {
    screen: MessageDetail,
    path: 'messaging/details'
  }
});

const MediaStack = createStackNavigator({
  Media: MediaHome,
})

const SettingsStack = createStackNavigator({
  Settings: SettingsHome,
})

const LifeShareAppNavigator = createAppContainer(createBottomTabNavigator(
  {
    Home: UserStack,
    Messaging: MessagingStack,
    Media: MediaStack,
    Settings: SettingsStack,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
     tabBarIcon: ({ focused, tintColor }) => {
       const { routeName } = navigation.state;
       let iconName;
       if (routeName === 'Home') {
         iconName = "md-home";
       } else if (routeName === 'Messaging') {
         iconName = "md-mail";
       } else if (routeName == 'Media') {
         iconName = "md-images";
       } else {
         iconName = "md-settings";
       }
       return <Ionicons name={iconName} size={25} color={tintColor} />;
     },
   }),
   tabBarOptions: {
     activeTintColor: 'blue',
     inactiveTintColor: 'gray',
   },
  }
));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteBack: {
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#1DBBFF'
  }
});

const AppNavigation = () => (
  <LifeShareAppNavigator/>
)

export default class App extends Component {
  render() {
    return (
      <AppNavigation/>
    )
  }
}
