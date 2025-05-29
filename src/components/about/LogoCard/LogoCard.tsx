import { AddLogo, InfoCard } from "@practo/self-serve"
import { View, Text, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

type RootStackParamList = {
    L1_LogoCover: undefined;
    L2_EstablishmentName: undefined;
    L2_EstablishmentDescription: undefined;
    L2_FoundationYear: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const LogoCard = () => {
    const navigation = useNavigation<NavigationProp>();

    return (
        <View style={styles.card}>
            <AddLogo
                borderRadius={16}
                containerWidth="100%"
                logoSize={100}
                subtitle="Upload a 100x100 px image for your logo"
                title="Add New Logo"
                verticalAlignment="Center"
                onPress={() => navigation.navigate('L1_LogoCover')}
            />
            <View style={styles.textContainer}>
                <InfoCard
                    body={<Text>Apollo Hospital</Text>}
                    rightIcon="Edit"
                    title="Establishment Name"
                    onRightIconPress={() => navigation.navigate('L2_EstablishmentName')}
                />
                <InfoCard
                    body={<Text>Apollo Hospitals for your recovery journey, backed by over 30 years of excellence. Benefit from a team of 10,000+ highly lots of leaf... </Text>}
                    rightIcon="Edit"
                    title="Establishment Description"
                    onRightIconPress={() => navigation.navigate('L2_EstablishmentDescription')}
                />
                <InfoCard
                    body={<Text>1980</Text>}
                    rightIcon="Edit"
                    title="Year of Foundation"
                    onRightIconPress={() => navigation.navigate('L2_FoundationYear')}
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