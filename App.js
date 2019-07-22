import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';
import { Container, Header, Title, Button, Left, Right, Body, Icon, Content, Footer, FooterTab } from 'native-base';

export default function App() {
  return (<AppShell></AppShell>);
}

class AppShell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowingText: true,
      text: '',
    };
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Text>
            This is Content Section
          </Text>
        </Content>
        <Footer>
        <FooterTab>
            <Button>
              <Icon name="apps" />
            </Button>
            <Button>
              <Icon name="camera" />
            </Button>
            <Button active>
              <Icon active name="navigate" />
            </Button>
            <Button>
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>
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
  }
});
