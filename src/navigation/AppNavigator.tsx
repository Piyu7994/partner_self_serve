import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EstablishmentOverviewScreen from '../screens/establishment/EstablishmentOverview';
import ServiceListScreen from '../screens/establishment/service/ServiceListScreen/ServiceListScreen';
import SurgeryDetailsPageContainer from '../containers/surgery/SurgeryDetailsPageContainer/SurgeryDetailsPage.Container';
import {colors} from '../theme/color';
import DoctorManagementViewContainer from '../containers/surgery/DoctorManagementViewContainer/DoctorManagementView.Container';

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
        component={EstablishmentOverviewScreen}
        options={{
          title: 'L0',
          headerShown: true,
        }}
      />
      <AppStack.Screen
        name="ServiceList"
        component={ServiceListScreen}
        options={{
          title: 'Surgeries/treatments',
          headerShown: true,
        }}
      />
      <AppStack.Screen
        name="SurgeryDetailScreen"
        component={SurgeryDetailsPageContainer}
        options={{
          title: 'Surgeries/treatments',
          headerShown: true,
        }}
      />
      <AppStack.Screen
        name="DoctorManagementView"
        component={DoctorManagementViewContainer}
        options={{
          title: 'Doctors in surgery & treatment',
          headerShown: true,
        }}
      />
    </AppStack.Navigator>
  );
};
export default AppNavigator;
