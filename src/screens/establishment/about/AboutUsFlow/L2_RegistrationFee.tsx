import { StyleSheet, View, KeyboardAvoidingView, Platform } from "react-native"
import { FoundationYearCard } from "../../../../components/about/FoundationYearCard/FoundationYearCard"
import { Header } from "@practo/self-serve"
import { BottomSaveButton } from "../../../../components/about/BottomSaveButton/BottomSaveButton"
import { RegistrationFeeCard } from "../../../../components/about/RegistrationFeeCard/RegistrationFeeCard"
import { useNavigation } from "@react-navigation/native"

export const L2_RegistrationFee = () => {
    const navigation = useNavigation();

 return (
    <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
        <View style={styles.content}>
            <View style={styles.gap} />
            <View style={styles.headerContainer}>
                <Header
                    onBackPress={() => navigation.goBack()}
                    showBackIcon
                    subtext=""
                    title="Add Registration Fee"
                    variant="Screen Header"
                />
            </View>
            <View style={styles.inputWrapper}>
                <RegistrationFeeCard />
            </View>
        </View>
        <View style={styles.buttonContainer}>
            <BottomSaveButton/>
        </View>
    </KeyboardAvoidingView>
 )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
    },
    gap: {
        height: 10,
    },
    inputWrapper: {
        marginTop: 24,
        marginHorizontal: 12,
        backgroundColor: 'white',
        borderRadius: 12,
    },
    headerContainer: {
        backgroundColor: '#ffffff',
        height: 56,
        paddingTop: 16,
        marginTop: 24,
        marginLeft: 12,
        paddingBottom: 12,
    },
    buttonContainer: {
        paddingHorizontal: 16,
        paddingBottom: 34,
        paddingTop: 12,
        backgroundColor: '#ffffff',
        minHeight: 100,
        left: 0,
        right: 0,
    }
})