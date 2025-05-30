import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import EstablishmentOverviewScreen from '../screens/establishment/EstablishmentOverview';
import ServiceListScreen from '../screens/establishment/service/ServiceListScreen/ServiceListScreen';

import {colors} from '../theme/color';

const AppNavigator = () => {
  const AppStack = createNativeStackNavigator();

  return (
    <AppStack.Navigator
      initialRouteName="L0"
      screenOptions={{
        headerShown: false,
        statusBarTranslucent: true,
        statusBarStyle: 'light',
        statusBarBackgroundColor: 'transparent',
        contentStyle: {
          backgroundColor: colors.bg.tertiary,
        },
      }}>
      <AppStack.Screen
        name="L0"
        component={ServiceListScreen}
        options={{
          title: 'L0',
          headerShown: true,
        }}
      />
    </AppStack.Navigator>
  );
};
export default AppNavigator;
