import React, {Component} from 'react';
import {View,TouchableOpacity} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text,
  Item,Input,Thumbnail
} from "native-base";
import styles from "./styles_Menu";

export default class Home extends Component{
  render(){
    return(

      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate('DrawerOpen')}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
              <Text>Trang chủ</Text>

          </Body>
          <Right>
            <Button transparent onPress={() => {this.props.navigation.navigate('screenUser')}}><Icon name="person" /></Button>
          </Right>
        </Header>
        <Content padder>
          <Text>Legal Document</Text>
          <Text>Ứng dụng hỗ trợ tra cứu văn bản luật</Text>
        </Content>
      </Container>
    );
  }
}
