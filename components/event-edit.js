import React, {Component} from 'react';
import { Container, Header, Content, Form, Item, Input, Textarea } from 'native-base';
import {Switch} from 'react-native';
import { themes } from '../themes';

export default class EventEdit extends Component {
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

  state = {selected: false};
  render() {
    return (
      <Container style={{backgroundColor: themes.spectrio.backgroundColor}}>
        <Content>
          <Form>
              <Input style={{color: themes.spectrio.textColor}} placeholder="Subject" />
              <Textarea style={{color: themes.spectrio.textColor}} rowSpan={5} bordered placeholder="Notes" />
              <Switch
                onValueChange = {value => this.setState({selected: value})}
                value = {this.state.selected}/>
          </Form>
        </Content>
      </Container>
    );
  }
}
