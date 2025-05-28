import { AddLogo, InfoCard } from "@practo/self-serve"
import { View, Text, StyleSheet } from "react-native"

export const LogoCard = () => {
    return (
        <View style={styles.card}>
            <AddLogo
                borderRadius={16}
                containerWidth="100%"
                logoSize={100}
                subtitle="Upload a 100x100 px image for your logo"
                title="Add New Logo"
                verticalAlignment="Center"
            />
            <View style={styles.textContainer}>
                <InfoCard
                    body={<Text>Apollo Hospital</Text>}
                    rightIcon="Edit"
                    title="Establishment Name"
                />
                <InfoCard
                    body={<Text>Apollo Hospitals for your recovery journey, backed by over 30 years of excellence. Benefit from a team of 10,000+ highly lots of leaf... </Text>}
                    rightIcon="Edit"
                    title="Establishment Description"
                />
                <InfoCard
                    body={<Text>1980</Text>}
                    rightIcon="Edit"
                    title="Year of Foundation"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        paddingHorizontal: 12
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        paddingTop: 12
    }
})