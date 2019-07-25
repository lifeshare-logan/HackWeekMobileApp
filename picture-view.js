import React, {Component} from 'react';
import {Text, Image, View, Modal, TouchableNativeFeedback, TouchableOpacity} from 'react-native';
import {Card, CardItem, Thumbnail, Left, Body, Right, Item, Input, Label, Button,Icon, Header} from 'native-base';
import ImageViewer from 'react-native-image-zoom-viewer';
import { themes } from './themes';

export default class PictureView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caption: this.props.navigation.getParam('media').caption,
      index: 0,
      modalVisible: false
    }

  }
  render() {
    const { navigation } = this.props;
    const media = navigation.getParam('media');
    const images = [];
    images.push({
      props: {
        source: media.uri
      },
      freeHeight: true
    });
    return (
      <View style={{flex: 1, height: '100%', alignItems: 'center'}}>
        <Card style={{width: '90%'}}>
          <TouchableOpacity onPress={() => this.setState({modalVisible: true})}>
            <CardItem cardBody>
              <Image source={media.uri} style={{height: 400, width: null, flex: 1}}/>
            </CardItem>
          </TouchableOpacity>
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
              <Button block style={{backgroundColor: themes.light.primaryColor}} onPress={() => navigation.goBack()}>
                <Text>Success</Text>
              </Button>
            </Body>
          </CardItem>
        </Card>
        <Modal
          visible={this.state.modalVisible}
          transparent={true}
          onRequestClose={() => this.setState({ modalVisible: false})}
        >
          <ImageViewer
            imageUrls={images}
            index={this.state.index}
            onSwipeDown={() => this.setState({ modalVisible: false })}
            onMove={data => console.log(data)}
            renderHeader={() =>  <Header style={styles.headerStyle}><Left><Button transparent large onPress={() => this.setState({ modalVisible: false})}><Icon style={styles.icon} name='close'/></Button></Left></Header>}
            enableSwipeDown={true}
          />
        </Modal>
      </View>
    )
  }
}

const styles = {
  headerStyle: {
    backgroundColor: "black",
    borderBottomWidth: 0
  },
  icon: {
    color: "white",
    fontSize: 30
  }
}
