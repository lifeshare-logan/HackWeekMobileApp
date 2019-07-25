import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Platform, TextInput, ScrollView } from 'react-native';
import { H1, Container, DatePicker, Header, Title, Button, Left, Right, Body, Icon, Content, Footer, FooterTab, Tabs, Tab, TabHeading} from 'native-base';
import { createBottomTabNavigator, createStackNavigator, createAppContainer, } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import UserHome from './user-home';
import MessagingHome from './messaging-home';
import MediaHome from './media-home';
import PictureView from './picture-view';
import SettingsHome from './settings-home';
import MessageDetail from './message-detail';
import { Font, AppLoading } from 'expo';
import { ThemeProvider, withTheme, themes} from './themes';

// state = {date: new Date()};

function setDate(newDate) {
  // this.setState({ date: newDate });
}

const UserStack = createStackNavigator({
  User: {
    screen: UserHome,
    navigationOptions: {
      header: <View style={{flexDirection: "row"}}>
        <Left><H1>Hi, Maggie</H1></Left>
        <Right><DatePicker
            formatChosenDate={date => [date.getMonth() + 1, date.getDate(), date.getFullYear()].join('/')}
            locale={"en_US"}
            defaultDate={new Date()}
            textStyle={{fontSize: 24}}
            onDateChange={setDate}/>
            </Right>
      </View>,
      // header: null
    },
  }
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
  PicView: PictureView,
});

const SettingsStack = createStackNavigator({
  Settings: SettingsHome,
});

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
       } else if (routeName === 'Media') {
         iconName = "md-images";
       } else {
         iconName = "md-settings";
       }
       return <Ionicons name={iconName} size={25} color={tintColor} />;
     },
   }),
   tabBarOptions: {
     activeTintColor: themes.light.primaryColor,
     inactiveTintColor: themes.light.textColor,
     style: themes.light
   },
  }
));

// const AppContainerWithTheme = withTheme(({ theme }) => {
//   return <AppContainer screenProps={{ theme }} />;
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTitleStyle: {
    ...Platform.select({
      ios: { fontFamily: 'Arial', },
      android: { fontFamily: 'Roboto' },
    }),
  },
});

const AppNavigation = () => (
    <LifeShareAppNavigator/>
)

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      theme: props.light
    };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
          <AppLoading />
      );
    }
    return (
      <ThemeProvider theme={this.state.theme}>
        <AppNavigation/>
      </ThemeProvider>
    )
  }
}
