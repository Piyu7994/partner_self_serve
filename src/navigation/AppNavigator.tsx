import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "../theme/color";
import { L1_LogoCover } from "../screens/establishment/about/AboutUsFlow/L1_LogoCover";

const AppNavigator = () => {
    const AppStack = createNativeStackNavigator();

    return (
        <AppStack.Navigator
        initialRouteName="L0"
        screenOptions={{
            headerShown: false,
            statusBarTranslucent: true,
            statusBarStyle: 'dark',
            statusBarBackgroundColor: 'white',
            contentStyle: {
                backgroundColor: colors.bg.tertiary,
            },
        }}
        >
            <AppStack.Screen
                name="L0"
                component={L1_LogoCover}
            />
           
        </AppStack.Navigator>
    )

};








export default AppNavigator;