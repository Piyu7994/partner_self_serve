import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "../theme/color";
import { L2_FoundationYear } from "../screens/establishment/about/AboutUsFlow/L2_FoundationYear";

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
                component={L2_FoundationYear}
            />
           
        </AppStack.Navigator>
    )

};








export default AppNavigator;