import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EstablishmentOverview from "../screens/establishment /EstablishmentOverview";

const AppNavigator = () => {
    const AppStack = createNativeStackNavigator();

    return (
        <AppStack.Navigator
        screenOptions={{
            statusBarTranslucent: true,
                statusBarStyle: 'dark',
                statusBarBackgroundColor: 'white',
        }}
        >
            <AppStack.Screen 
                name="EstablishmentOverview" 
                component={EstablishmentOverview}
            />
            {/* <AppStack.Screen/> */}
        </AppStack.Navigator>
    )

};

export default AppNavigator;