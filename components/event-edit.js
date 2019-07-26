import React, {Component} from 'react';
import { Container, Header, Content, Form, Item, Input, Textarea } from 'native-base';
import {Switch} from 'react-native';

export default class EventEdit extends Component {
  state = {selected: false};
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
              <Input placeholder="Subject" />
              <Textarea rowSpan={5} bordered placeholder="Notes" />
              <Switch
                onValueChange = {value => this.setState({selected: value})}
                value = {this.state.selected}/>
          </Form>
        </Content>
      </Container>
    );
  }
}
