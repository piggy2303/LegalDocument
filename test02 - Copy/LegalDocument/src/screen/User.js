import React, {Component} from 'react';
import {View} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Item,
  Label,
  Input,
  Body,
  Left,
  Right,
  Icon,
  Form,
  Text
} from "native-base";

export default class User extends Component{
  render(){
    return(
      <Content>
          <Form>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
          </Form>
          <Button block style={{ margin: 15, marginTop: 50 }}>
            <Text>Sign In</Text>
          </Button>
        </Content>
    );
  }
}
