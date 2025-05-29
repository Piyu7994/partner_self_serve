import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "../theme/color";
import { L1_AboutUs } from "../screens/establishment/about/AboutUsFlow/L1_AboutUs";
import { L1_LogoCover } from "../screens/establishment/about/AboutUsFlow/L1_LogoCover";

const AppNavigator = () => {
    const AppStack = createNativeStackNavigator();

    return (
        <AppStack.Navigator
        initialRouteName="L1_AboutUs"
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
                name="L1_AboutUs"
                component={L1_AboutUs}
            />
            <AppStack.Screen
                name="L1_LogoCover"
                component={L1_LogoCover}
            />
           
        </AppStack.Navigator>
    )

};








export default AppNavigator;