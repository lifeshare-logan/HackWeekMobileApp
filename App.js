import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';
import { Container, Header, Title, Button, Left, Right, Body, Icon, Content, Footer, FooterTab, Tabs, Tab, TabHeading} from 'native-base';
import UserHome from './user-home';
import MessagingHome from './messaging-home';
import MediaHome from './media-home';
import SettingsHome from './settings-home';
import { Font, AppLoading } from 'expo';

export default function App() {
  return (<AppShell></AppShell>);
}

class AppShell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowingText: true,
      text: '',
      loading: true,
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
      <Container>
        <Header style={styles.header}>
          <Left>
          <Title>LifeShare</Title>
          </Left>
          <Body/>
          <Right />
        </Header>
        <Tabs tabBarPosition="bottom">
          <Tab heading={ <TabHeading><Icon name="home" /></TabHeading> }>
            <UserHome/>
          </Tab>
          <Tab heading={ <TabHeading><Icon name="mail" /></TabHeading> }>
            <MessagingHome/>
          </Tab>
          <Tab heading={ <TabHeading><Icon name="images" /></TabHeading> }>
            <MediaHome/>
          </Tab>
          <Tab heading={ <TabHeading><Icon name="settings" /></TabHeading> }>
            <SettingsHome/>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}


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
