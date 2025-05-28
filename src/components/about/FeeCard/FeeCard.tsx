import { AboutUsFee } from "@practo/self-serve"
import { View } from "react-native"

export const FeeCard = () => {
    return (
        <View>
            <AboutUsFee
            fee=""
            feeTitle="Registration fee for new patients (₹)"
            paymentModes=""
            paymentModesTitle="Modes of payment accepted"
            title="Payments & Fees"
            />
        </View>
    )
}