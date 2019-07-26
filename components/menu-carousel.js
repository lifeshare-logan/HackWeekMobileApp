import Carousel, { Pagination } from 'react-native-snap-carousel';
import { StyleSheet, Dimensions, Platform } from 'react-native';
import {Body, Card, CardItem, List, View, Text, Title, H1} from 'native-base';
import React, {Component} from 'react';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
import {themes} from '../themes';

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(100);
const itemWidth = wp(85);

export default class MenuCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: props.meals
    }
  }

    _renderItem ({item, index}) {
      // style={styles.slide}
      let eventComponents = [];
      for (let i = 0; i < item.items.length; i++) {
        eventComponents.push(
          <CardItem key={i} bordered>
            <Body>
              <Text>
                {item.items[i]}
              </Text>
            </Body>
          </CardItem>);
      }
        return (
          <Card>
            <CardItem bordered>
              <Text style={{color: themes.light.primaryColor}}>{item.title}</Text>
            </CardItem>
            <List>
              {eventComponents}
            </List>
          </Card>
        );
    }

    render () {
        return (
          <Carousel
            ref={(c) => { this._carousel = c; }}
            data={this.state.meals}
            renderItem={this._renderItem}
            sliderWidth={slideWidth}
            itemWidth={itemWidth}
            loop={true}
            autoplay={false}
          />
        );
    }
}
