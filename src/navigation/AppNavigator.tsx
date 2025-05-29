import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "../theme/color";
import { L1_AboutUs } from "../screens/establishment/about/AboutUsFlow/L1_AboutUs";
import { L1_LogoCover } from "../screens/establishment/about/AboutUsFlow/L1_LogoCover";
import { L2_EstablishmentDescription } from "../screens/establishment/about/AboutUsFlow/L2_EstablishmentDescription";
import { L2_EstablishmentName } from "../screens/establishment/about/AboutUsFlow/L2_EstablishmentName";
import { L2_FoundationYear } from "../screens/establishment/about/AboutUsFlow/L2_FoundationYear";

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
            <AppStack.Screen
                name="L2_EstablishmentDescription"
                component={L2_EstablishmentDescription}
            />
            <AppStack.Screen
                name="L2_EstablishmentName"
                component={L2_EstablishmentName}
            />
            <AppStack.Screen
                name="L2_FoundationYear"
                component={L2_FoundationYear}
            />
           
        </AppStack.Navigator>
    )

};








export default AppNavigator;