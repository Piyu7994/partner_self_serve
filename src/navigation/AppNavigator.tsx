import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import L0_Screen from "../screens/L0/L0_Screen";
import { colors } from "../theme/color";

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
            }}
        >
            <AppStack.Screen
                name="L0"
                component={L0_Screen}
                options={{
                    title: "L0",
                    headerShown: false,
                }}
            />
        </AppStack.Navigator>
    )

};

export default AppNavigator;