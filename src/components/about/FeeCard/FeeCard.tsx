import { AboutUsFee } from "@practo/self-serve"
import { View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

type RootStackParamList = {
    L2_RegistrationFee: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
export const FeeCard = () => {
    const navigation = useNavigation<NavigationProp> ();

    return (
        <View>
            <AboutUsFee
            fee=""
            feeTitle="Registration fee for new patients (₹)"
            paymentModes=""
            onFirstInfoIconPress={() => navigation.navigate('L2_RegistrationFee')}
            paymentModesTitle="Modes of payment accepted"
            title="Payments & Fees"
            />
        </View>
    )
}