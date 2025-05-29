import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "../theme/color";
import EstablishmentOverviewScreen from "../screens/establishment/EstablishmentOverview";

const AppNavigator = () => {
    const AppStack = createNativeStackNavigator();

    return (
        <AppStack.Navigator
            initialRouteName="EstablishmentOverview"
            screenOptions={{
                headerShown: false,
                statusBarTranslucent: true,
                statusBarStyle: 'light',
                statusBarBackgroundColor: 'transparent',
                contentStyle: {
                    backgroundColor: colors.bg.tertiary,
                },
            }}
        >
            <AppStack.Screen 
                name="EstablishmentOverview"
                component={EstablishmentOverviewScreen}
                options={{
                    title: "Overview",
                    headerShown: false,
                }}
            />
        </AppStack.Navigator>
    )

};

export default AppNavigator;