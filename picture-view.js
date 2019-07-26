import React, {Component} from 'react';
import {Text, Image, View, Modal, TouchableNativeFeedback, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {Card, CardItem, Thumbnail, Left, Body, Right, Item, Input, Label, Button,Icon, Header} from 'native-base';
import ImageViewer from 'react-native-image-zoom-viewer';
import { themes } from './themes';

export default class PictureView extends Component {
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
      <KeyboardAvoidingView style={{flex: 1, backgroundColor: themes.spectrio.backgroundColor}} behavior="position">
        <Card style={{width: '100%'}}>
          <TouchableOpacity onPress={() => this.setState({modalVisible: true})}>
            <CardItem cardBody>
              <Image source={media.uri} style={{height: 400, width: null, flex: 1}}/>
            </CardItem>
          </TouchableOpacity>
          <CardItem style={{backgroundColor: themes.spectrio.secondaryColor}}>
            <Body>
              <Item floatingLabel>
                <Label>Caption</Label>
                <Input
                  style={{color: themes.spectrio.textColor}}
                  value={this.state.caption}
                  onChangeText={(caption) => this.setState({caption})}
                />
              </Item>
            </Body>
          </CardItem>
          <CardItem style={{backgroundColor: themes.spectrio.secondaryColor}}>
            <Body>
              <Button block style={{backgroundColor: themes.spectrio.primaryColor}} onPress={() => navigation.goBack()}>
                <Text style={{color: themes.spectrio.textColor}}>Success</Text>
              </Button>
            </Body>
          </CardItem>
        </Card>
        <View style={{ height: 60 }} />
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
        </KeyboardAvoidingView>

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
