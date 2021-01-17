import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialIcons } from "@expo/vector-icons";

import Home from "../screens/Home";
// import Search from '../screens/Search';
import { BottomTabParamList } from "../types";

const BottomTab = createBottomTabNavigator();

const icons = {
  Home: "home",
  Search: "search",
  Bookmark: "bookmark",
  Profile: "person",
};

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          return (
            <MaterialIcons name={icons[route.name]} size={40} color="#213A4A" />
          );
        },
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
      <BottomTab.Screen name="Home" component={HomeNavigator} />
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
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}
