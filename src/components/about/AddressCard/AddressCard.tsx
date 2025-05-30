import { Address, ContactInfoCard} from "@practo/self-serve"
import { View, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

type RootStackParamList = {
    L2_EstablishmentName: undefined;
    L2_ContactInfo: undefined;
    L2_EmergencyContactCard: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const AddressCard = () => {
    const navigation = useNavigation<NavigationProp>();

    return (
        <View style={styles.card}>
            <ContactInfoCard
                address="Vishal Patil Clinic, 154/11, Bannerghatta Road, Landmark: Opposite IIM, Bangalore"
                addressInfoCardProps={{
                    body: <Address address="Vishal Patil Clinic, 154/11, Bannerghatta Road, Landmark: Opposite IIM, Bangalore" />,
                    rightIcon: 'Arrow',
                    title: 'Location & Address',
                    variant: 'Large'
                }}
                onContactPress={() => navigation.navigate('L2_ContactInfo')}
                contactNumber="9876543210"
                onEmergencyContactPress={() => navigation.navigate('L2_EmergencyContactCard')}
                emergencyContactNumber="1122334455"
            />
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
    addressContainer: {
        paddingBottom: 24
    }
})