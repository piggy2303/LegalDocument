import React, {Component} from 'react';
import {View,Text} from 'react-native';
import {Button,Icon} from 'native-base';

export default class Menu extends Component{
  render(){
    return(
      <View>
        <Text>
          Tra cứu văn bản luật
        </Text>
        <Text>
          So sánh dự thảo luật
        </Text>
        <Text>
          Lý lịch cán bộ
        </Text>
        <Text>
          Lịch sử tra cứu
        </Text>

        <Text>
          Trợ giúp
        </Text>
        <Text>
          Đăng xuất
        </Text>
      </View>

    );
  }
}
