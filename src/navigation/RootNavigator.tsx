import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigation from './BottomNavigation';
import LoginScreen from '@screens/LoginScreen';
import RegisterScreen from '@screens/RegisterScreen';
import RoomScreen from '@screens/RoomScreen';
import DiagnosisScreen from "@screens/DiagnosisScreen";
import WriteScreen from "@screens/WriteScreen";
import ArticleScreen from "@screens/ArticleScreen";
import ResultScreen from "@screens/ResultScreen";
import NotificationScreen from "@screens/NotificationScreen";
import ArticleSearch from "@screens/ArticleSearch";
import MemoScreen from "@screens/MemoScreen";
import ViewResult from "@screens/ViewResult";

const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator
      initialRouteName="Register"
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
};

const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Tab"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Tab"
        component={BottomNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name={'Auth'} component={Auth} />
      <Stack.Screen name={'Diagnosis'} component={DiagnosisScreen}
        options={{
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name={"Write"}
        component={WriteScreen}
        options={{
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name={'Article'}
        component={ArticleScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name={'Result'}
        component={ResultScreen}
        options={{
          gestureEnabled: false,
        }}
        />
      <Stack.Screen name={'Notification'}
        component={NotificationScreen}
        options={{
          gestureEnabled: false,
        }}
      />
      <Stack.Screen name={"Search"}
        component={ArticleSearch}
        />
      <Stack.Screen name={'Memo'}
                    component={MemoScreen}
                    options={{
                      gestureEnabled: false,
                    }}
      />
        <Stack.Screen name={"ViewResult"}
                      component={ViewResult}
                      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
