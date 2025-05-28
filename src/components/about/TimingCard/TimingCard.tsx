import { View, StyleSheet, ScrollView } from "react-native"
import { InfoCard, TimingWithDays } from "@practo/self-serve"

export const TimingCard = () => {
    return (
        <View style={styles.card}>
            <InfoCard
                body=""
                rightIcon="Arrow"
                title="Establishment Timings"
            />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.timingContainer}>
                    <TimingWithDays
                        days="Mon - Sat"
                        slot1="09:00 am - 01:00 pm"
                        slot2="03:00 pm - 09:00 pm"
                    />
                    <TimingWithDays
                        days="Sun"
                        slot1="09:00 am - 01:00 pm"
                        slot2=""
                    />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        paddingTop: 12,
        paddingHorizontal: 12
    },
    timingContainer: {
        flexDirection: 'row',
        paddingHorizontal: 12,
        gap: 12,
        paddingBottom: 24
    }
})