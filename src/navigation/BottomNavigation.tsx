import React, { useRef, useState } from 'react';
import {
  StatusBar,
  View,
  TouchableOpacity
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MyInfoIcon from '@assets/icons/myinfo.svg';
import HomeIcon from '@assets/icons/home.svg';
import AnalyticsIcon from '@assets/icons/analytics.svg';
import MusicIcon from '@assets/icons/music.svg';
import ForumIcon from '@assets/icons/forum.svg';

import Home from '@screens/HomeScreen';
import MyInfo from '@screens/MyInfoScreen';
import Music from '@screens/MusicScreen';
import Forum from '@screens/ForumScreen';
import Analytics from '@screens/AnalyticsScreen';
import styled from 'styled-components/native';

import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Typography } from '@components/Atomic';
import { colors } from '@/theme/colors';

function BottomNavigation() {
  const Tab = createBottomTabNavigator();
  const navigation = useNavigation();

  interface ItemContainerProps {
    onPress: () => void;
    children: React.ReactNode;
  }

  return (
    <SafeAreaProvider
      style={{
        backgroundColor: 'white',
      }}
    >
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Tab.Navigator
        initialRouteName="Home"
        tabBar={(props) => <BottomTabBar {...props} />}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <HomeIcon height={20} fill={focused ? '#3FB5F8' : '#515359'} />
            ),
          }}
        />
        <Tab.Screen
          name="Analytics"
          component={Analytics}
          options={{
            tabBarIcon: ({ focused }) => (
              <AnalyticsIcon height={20} fill={focused ? '#3FB5F8' : '#515359'} />
            ),
          }}
        />
        <Tab.Screen
          name="Music"
          component={Music}
          options={{
            tabBarIcon: ({ focused }) => (
              <MusicIcon height={20} fill={focused ? '#3FB5F8' : '#515359'} />
            ),
          }}
        />

        <Tab.Screen
          name="Forum"
          component={Forum}
          options={{
            tabBarIcon: ({ focused }) => (
              <ForumIcon height={20} fill={focused ? '#3FB5F8' : '#515359'} />
            ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaProvider>
  );
}

interface TabIconProps {
  children: React.ReactNode;
  onPress: () => void;
}




const BottomTabBar = ({ state, descriptors, navigation }: any) => {
  const insets = useSafeAreaInsets();

  interface LabelProps {
    [key: string]: string;
  }

  const ScreenLabel: LabelProps = {
    Home: '홈',
    Analytics: '분석',
    Music: '음악',
    Forum: '게시판',
    MyInfo: '내 정보',
  };

  return (
    <Container
      style={{
        bottom: insets.bottom,
      }}
    >
      {state.routes.map((route: any, index: number) => {
        const isFocused = state.index === index;
        const { options } = descriptors[route.key];
        const Icon = options.tabBarIcon;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        return (
          <TouchableOpacity
            style={
              {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }
            }
            onPress={() => onPress()} key={index}>
            <IconBox>
              <Icon focused={isFocused} />
            </IconBox>
            <View
              style={{
                height: 5,
              }}
            />
            <Typography
              size={10}
              color={isFocused ? '#3FB5F8' : '#515359'}
              weight={500}
            >
              {ScreenLabel[route.name]}
            </Typography>
          </TouchableOpacity>
        );
      })}
    </Container>
  );
};

const IconBox = styled.View`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.SafeAreaView`
  width: 100%;
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  border-top-width: 1px;
  border-color: ${colors.gray100};
`;

export default BottomNavigation;
