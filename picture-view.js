import React, {Component} from 'react';
import {Text, Image, View} from 'react-native';
import {Card, CardItem, Thumbnail, Left, Body, Right, Item, Input, Label, Button} from 'native-base';

export default class PictureView extends Component {
  constructor(props) {
    super(props);
    this.state = {caption: this.props.navigation.getParam('media').caption}
  }
  render() {
    const { navigation } = this.props;
    const media = navigation.getParam('media');
    return (
      <View style={{flex: 1, height: '100%', alignItems: 'center'}}>
        <Card style={{width: '90%'}}>
          <CardItem cardBody>
            <Image source={media.uri} style={{height: 400, width: null, flex: 1}}/>
          </CardItem>
          <CardItem>
            <Body>
              <Item floatingLabel>
                <Label>Caption</Label>
                <Input
                  value={this.state.caption}
                  onChangeText={(caption) => this.setState({caption})}
                />
              </Item>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Button block success onPress={() => navigation.goBack()}>
                <Text style={{color:"white"}}>Success</Text>
              </Button>
            </Body>
          </CardItem>
        </Card>

      </View>
    )
  }
}
