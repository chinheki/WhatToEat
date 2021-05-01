/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { AntDesign, MaterialIcons,MaterialCommunityIcons,FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Text, StyleSheet,  View } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import FridgeScreen from '../screens/FridgeScreen';
import MenuScreen from '../screens/MenuScreen';
import SettingScreen from '../screens/SettingScreen';
import { BottomTabParamList, HomeParamList,FridgeParamList,MenuParamList,SettingParamList } from '../types';

const icon_color = "white"
const basic_bg_color="#5F9EA0"
const active_bg_color="#008B8B"
const tab_bar_opton = {
  activeTintColor: "white",
  activeBackgroundColor: active_bg_color,
  inactiveTintColor: "white",
  inactiveBackgroundColor :basic_bg_color,
  labelStyle: {
    fontSize: 12,
    color:icon_color
  },  
}
const header_option = {
  headerStyle: {
    backgroundColor: active_bg_color,
  },
  headerTintColor: '#fff',
  fontWeight: 'bold',
}
const BottomTab = createBottomTabNavigator<BottomTabParamList>();
export default function BottomTabNavigator() {

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={tab_bar_opton}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: () => <HomeTabBarIcon/>,
        }}
      />
      <BottomTab.Screen
        name="Fridge"
        component={FridgeNavigator}
        options={{
          tabBarIcon: () => <FridgeTabBarIcon/>,
        }}
      />
      <BottomTab.Screen
        name="Menu"
        component={MenuNavigator}
        options={{
          tabBarIcon: () => <MenuTabBarIcon/>,
        }}
      />
      <BottomTab.Screen
        name="Setting"
        component={SettingNavigator}
        options={{
          tabBarIcon: () => <SettingTabBarIcon/>,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function HomeTabBarIcon() {
  return <FontAwesome5 name="question" color={icon_color} size={30} style={{ marginBottom: -3 }}/>;
}

function SettingTabBarIcon() {
  return <AntDesign name="setting" color={icon_color}  size={30} style={{ marginBottom: -3 }}/>;
}
function MenuTabBarIcon() {
  return <MaterialIcons  name="menu-book" color={icon_color}  size={30} style={{ marginBottom: -3 }}/>;
}
function FridgeTabBarIcon() {
  return <MaterialCommunityIcons  name="fridge-outline" color={icon_color}  size={30} style={{ marginBottom: -3 }}/>;
}
// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          ...header_option,
          headerTitle: 'WHAT TO EAT'
        }}
      />
    </HomeStack.Navigator>
  );
}
const FridgeStack = createStackNavigator<FridgeParamList>();

function FridgeNavigator() {
  return (
    <FridgeStack.Navigator>
      <FridgeStack.Screen
        name="FridgeScreen"
        component={FridgeScreen}
        options={{
          ...header_option,
          headerTitle: 'MY FRIDGE'
        }}
      />
    </FridgeStack.Navigator>
  );
}const MenuStack = createStackNavigator<MenuParamList>();

function MenuNavigator() {
  return (
    <MenuStack.Navigator>
      <MenuStack.Screen
        name="MenuScreen"
        component={MenuScreen}
        options={{
          ...header_option,
          headerTitle: 'MY MENU'
        }}
      />
    </MenuStack.Navigator>
  );
}const SettingStack = createStackNavigator<SettingParamList>();

function SettingNavigator() {
  return (
    <SettingStack.Navigator>
      <SettingStack.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{
          ...header_option,
          headerTitle: 'SETTING'
        }}
      />
    </SettingStack.Navigator>
  );
}
