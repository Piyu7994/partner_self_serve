import { Address, ContactInfoCard} from "@practo/self-serve"
import { View, StyleSheet } from "react-native"

export const AddressCard = () => {
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
                contactInfoCardProps={{
                    rightIcon: 'Arrow',
                    title: 'Contact number for patients',
                    variant: 'Small'
                }}
                contactNumber="9876543210"
                emergencyContactNumber="1122334455"
                emergencyInfoCardProps={{
                    rightIcon: 'Arrow',
                    title: 'Emergency contact number for patients',
                    variant: 'Small'
                }}
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