import React from 'react';
import {DrawerNavigator,StackNavigator} from 'react-navigation';
import Home from './screen/Home';
import Menu from './screen/Menu';
import User from './screen/User';
import Compare from './screen/Compare';

export const HomStackAll = StackNavigator(
  {
    screenHome: { screen: Home},
    screenUser: { screen: User},
  },
  {
      headerMode: "none"
  }
);

export const SideMenu = DrawerNavigator({
  Tabbar:{
    screen: HomStackAll
  }
},
  {
    drawerWidth: 300,
    drawerPosition: 'left',
    contentComponent: props => <Menu {...props} />
  }
);
