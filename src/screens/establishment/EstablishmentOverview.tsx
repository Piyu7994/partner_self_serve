/**
 * Level 0 screen of provide establishment self-serve
 */

import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

const EstablishmentOverviewScreen: React.FC = () => {
    return (
        <SafeAreaView edges={['left', 'right', 'bottom' ]} style={{flex: 1}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    cardsContainer: {
        marginTop: -48,
        paddingHorizontal: 12,
        paddingBottom: 16
    }
});

export default EstablishmentOverviewScreen;