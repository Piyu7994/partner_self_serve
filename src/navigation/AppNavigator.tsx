import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const AppNavigator = () => {
    const AppStack = createNativeStackNavigator();

    return (
        <AppStack.Navigator
        >
            <></>
            {/* <AppStack.Screen/> */}
        </AppStack.Navigator>
    )

};

export default AppNavigator;