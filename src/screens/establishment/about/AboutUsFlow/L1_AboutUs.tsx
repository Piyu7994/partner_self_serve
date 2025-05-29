import { ScrollView, View, StyleSheet, StatusBar } from "react-native"
import { LogoCard } from "../../../../components/about/LogoCard/LogoCard"
import { TimingCard } from "../../../../components/about/TimingCard/TimingCard"
import { AddressCard } from "../../../../components/about/AddressCard/AddressCard"
import { FeeCard } from "../../../../components/about/FeeCard/FeeCard"
import { Header } from "@practo/self-serve"
import { InsuranceCard } from "../../../../components/about/InsuranceCard/InsuranceCard"
import { OwnershipCard } from "../../../../components/about/OwnershipCard/OwnershipCard"

export const L1_AboutUs = () => {
    return (
        <View>
            <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
            <ScrollView>
                <View style={styles.headerContainer}>
                    <Header
                        onBackPress={() => {}}
                        showBackIcon
                        subtext=""
                        title="About"
                        variant="Screen Header"
                    />
                </View>
                <View style={styles.firstCardContainer}>
                    <LogoCard />
                </View>
                <View style={styles.cardContainer}>
                    <TimingCard />
                </View>
                <View style={styles.cardContainer}>
                    <AddressCard />
                </View>
                <View style={styles.cardContainer}>
                    <FeeCard />
                </View>
                <View style={styles.cardContainer}>
                    <InsuranceCard/>
                </View>
                <View style={styles.cardContainer}>
                    <OwnershipCard/>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginBottom: 12,
        marginHorizontal: 12
    },
    firstCardContainer: {
        marginBottom: 12,
        marginTop: 35,
        marginHorizontal: 12
    },
    headerContainer: {
        marginTop: 35,
        backgroundColor: '#ffffff',
        height: 56
    }
})