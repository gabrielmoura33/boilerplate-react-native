import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312E38' },
    }}
    initialRouteName="SignIn"
  >
    <Auth.Screen name="" component={() => {}} />
  </Auth.Navigator>
);

export default AuthRoutes;
