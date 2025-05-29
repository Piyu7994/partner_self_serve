/**
 * Level 0 screen of provide establishment self-serve
 */

import { FlatList, Image, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

import hospitalCoverImg from '../../assets/images/hospital_cover.png'
import { AboutOverviewScreen } from "./about/AboutOverview/AboutOverviewScreen";
import { MediaGalleryScreen } from "./media/MediaGalleryScreen/MediaGalleryScreen";

const EstablishmentOverviewScreen: React.FC = () => {
    return (
        <SafeAreaView edges={['left', 'right', 'bottom' ]} style={{flex: 1}}>
            <FlatList
                data={[]}
                renderItem={null}
                style={styles.cardsContainer}
                ListHeaderComponent={
                    <>
                        <Image source={hospitalCoverImg} style={{width: '100%', height: 192}}/>
                        <View style={styles.cardsContainer}>
                            <MediaGalleryScreen />
                            <View style={{height: 16}}/>
                            <AboutOverviewScreen />
                        </View>
                    </>
                }
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    cardsContainer: {
        marginTop: -36,
        paddingHorizontal: 10,
        paddingBottom: 16
    }
});

export default EstablishmentOverviewScreen;