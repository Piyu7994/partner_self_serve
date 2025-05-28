import { NavigationContainer } from "@react-navigation/native"
import AppNavigator from "./AppNavigator"
import React from 'react'

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <AppNavigator />
        </NavigationContainer>
    )
}

export default RootNavigator;