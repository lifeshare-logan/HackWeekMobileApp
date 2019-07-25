import React, {Component} from 'react';
import {Alert, Image,ScrollView, View, TouchableOpacity} from 'react-native';
import {Text, Card, CardItem, ListItem, Left, Thumbnail, Body, Button, Icon, Right, List} from 'native-base';
import { StackNavigator } from 'react-navigation';
export default class MediaCard extends Component {

  render() {
    const media = this.props.media;
    if (media.caption) {
      return (
        <TouchableOpacity style={styles.item} onPress={() => this.props.navigation('PicView', {media: media})}>
          <Card>
            <CardItem cardBody>
              <Image source={media.uri} style={{flex: 1, maxHeight: 200}}/>
            </CardItem>
            <CardItem>
              <Body><Text>{media.caption}</Text></Body>
            </CardItem>
          </Card>
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity style={styles.item} onPress={() => this.props.navigation('PicView', {media: media})}>
          <Card>
            <CardItem cardBody>
              <Image source={media.uri} style={{flex: 1, maxHeight: 200}}/>
            </CardItem>
          </Card>
        </TouchableOpacity>
      )
    }
  }
}

const styles = {
  item: {
    width: '40%',
    borderRadius: 10
  }
}
