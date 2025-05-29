/* eslint-disable react/react-in-jsx-scope */
import { StyleSheet, View, KeyboardAvoidingView, Platform } from "react-native"
import { EstablishmentName } from "../../../../components/about/EstablishmentDetailsCard/EstablishmentName"
import { Header } from "@practo/self-serve"
import {EstablishmentDescription} from "../../../../components/about/EstablishmentDescriptionCard/EstablishmentDescription"
import { BottomSaveButton } from "../../../../components/about/BottomSaveButton/BottomSaveButton"
import { useNavigation } from "@react-navigation/native"

export const L2_EstablishmentDescription = () => {
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
                    title="Establishment Description"
                    variant="Screen Header"
                />
                </View>
                <View style={styles.inputWrapper}>
                    <EstablishmentDescription/>
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
        height: 0,
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
        paddingStart: 16
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