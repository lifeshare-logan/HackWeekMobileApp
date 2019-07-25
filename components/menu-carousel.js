import Carousel, { Pagination } from 'react-native-snap-carousel';
import { StyleSheet, Dimensions, Platform } from 'react-native';
import {Body, Card, CardItem, View, Text, Title, H1} from 'native-base';
import React, {Component} from 'react';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);

export default class MenuCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [
        {title: "Breakfast", text: "Steel Cut Oats\nVeggie Frittata\nWhole Wheat Toast\nMelon Medley\n"},
        {title: "Bar", text: "11:00AM"},
        {title: "Baz", text: "12:00PM"},
        {title: "Bam", text: "1:00PM"},
        {title: "Bat", text: "1:00PM"},
      ]
    }
  }

    _renderItem ({item, index}) {
      // style={styles.slide}
        return (
          <Card>
            <CardItem bordered header>
              <Text>{item.title}</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  {item.text}
                </Text>
              </Body>
            </CardItem>
          </Card>
        );
    }

    render () {
        return (
          <Carousel
            ref={(c) => { this._carousel = c; }}
            data={this.state.entries}
            renderItem={this._renderItem}
            sliderWidth={slideWidth}
            itemWidth={slideHeight}
            loop={true}
          />
        );
    }
}
