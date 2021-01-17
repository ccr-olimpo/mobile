import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather'
import * as React from 'react';

import Home from '../screens/Home';
import Briefing from '../screens/Briefing';
// import Search from '../screens/Search';
import { BottomTabParamList } from '../types';
const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
      />
      <BottomTab.Screen
        name="Briefing"
        component={BriefingNavigator}
      />
      {/* <BottomTab.Screen
        name="Search"
        component={SearchNavigator}
      /> */}
    </BottomTab.Navigator>
  );
}
// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
      />
    </HomeStack.Navigator>
  );
}

const BriefingStack = createStackNavigator();

function BriefingNavigator() {
  return (
    <BriefingStack.Navigator>
      <BriefingStack.Screen
        name="Briefing"
        component={Briefing}
      ></BriefingStack.Screen>
    </BriefingStack.Navigator>
  );
}

const SearchStack = createStackNavigator();

// function SearchNavigator() {
//   return (
//     <SearchStack.Navigator>
//       <SearchStack.Screen
//         name="Search"
//         component={Search}
//         options={{ headerTitle: 'Tab Two Title' }}
//       />
//     </SearchStack.Navigator>
//   );
// }
