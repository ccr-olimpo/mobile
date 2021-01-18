import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

import Home from '../screens/Home';
import Briefing from '../screens/Briefing';
import Rank from '../screens/Rank';
import { BottomTabParamList } from '../types';
import Search from '../screens/Search';

const BottomTab = createBottomTabNavigator();

const icons = {
  Home: "home",
  Search: "search",
  Bookmark: "bookmark",
  Profile: "person",
  Briefing: "bookmark",
  Rank: "podium-gold"
};

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => 
          route.name==='Rank'
            ? <MaterialCommunityIcons name="podium-gold" size={24} color="black" /> :
            <MaterialIcons name={icons[route.name]} size={40} color="#213A4A" />
        ,
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: "#fff",
          borderTopColor: "#fff",
        },
        activeTintColor: "#213A4A",
        inactiveTintColor: "rgba(33, 58, 74, 0.5)",
      }}
      >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
      />
      <BottomTab.Screen
        name="Briefing"
        component={BriefingNavigator}
      />
      <BottomTab.Screen
        name="Search"
        component={Search}
      />
      <BottomTab.Screen
        name="Rank"
        component={RankNavigator}
      />
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
        options={{ headerShown: false }}
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
        options={{ headerShown: false }}
      ></BriefingStack.Screen>
    </BriefingStack.Navigator>
  );
}

const RankStack = createStackNavigator();

function RankNavigator() {
  return (
    <RankStack.Navigator>
      <RankStack.Screen
        name="Rank"
        component={Rank}
        options={{ headerShown: false }}
      />
    </RankStack.Navigator>
  );
}
