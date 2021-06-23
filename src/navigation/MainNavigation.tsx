import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, NavigationContainerRef, TabNavigationState } from "@react-navigation/native";
import CalendarScreen from '../screens/Calendar';
import GroupsScreen from '../screens/Groups';
import HomeworksScreen from '../screens/Homeworks';
import ProfileScreen from '../screens/Profile';
import { CalendarIcon, GroupsIcon, HomeworksIcon, ProfileIcon } from "../assets/icons";


const Tab = createBottomTabNavigator();

export default function MainNavigation(){

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
        activeTintColor: '#000000',
        inactiveTintColor: '#000000'
      }}>

        <Tab.Screen name="Calendar" component={CalendarScreen} options={{
          tabBarLabel: 'Calendar',
          tabBarIcon: () => (
            <CalendarIcon/>
          ),
        }} />
        <Tab.Screen name="Groups" component={GroupsScreen} options={{
          tabBarLabel: 'Groups',
          tabBarIcon: () => (
            <GroupsIcon/>
          ),
        }} />
        <Tab.Screen name="Homeworks" component={HomeworksScreen} options={{
          tabBarLabel: 'Homeworks',
          tabBarIcon: () => (
            <HomeworksIcon/>
          ),
        }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => (
          <ProfileIcon/>
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
