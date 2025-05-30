import { StyleSheet, View, KeyboardAvoidingView, Platform, ScrollView } from "react-native"
import { ContactCard } from "../../../../components/about/ContactCard/ContactCard"
import { Header } from "@practo/self-serve"
import { BottomSaveButton } from "../../../../components/about/BottomSaveButton/BottomSaveButton"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { colors } from "../../../../theme/color"
import { EmergencyContactCard } from "../../../../components/about/EmergencyContactCard/EmergencyContactCard"

type RootStackParamList = {
    L1_AboutUs: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const L2_EmergencyContactCard = () => {
    const navigation = useNavigation<NavigationProp>();

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
                        title="Add emergency number"
                        variant="Screen Header"
                    />
                </View>
                <ScrollView style={styles.scrollView}>  
                <View style={styles.inputWrapper}>
                    <EmergencyContactCard />
                </View>
                </ScrollView>
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
        backgroundColor: colors.bg.tertiary,
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
        height: 100,
        paddingStart: 16,
        paddingTop: 20,
        paddingBottom: 16,
    },
    buttonContainer: {
        paddingHorizontal: 16,
        paddingBottom: 34,
        paddingTop: 12,
        backgroundColor: '#ffffff',
        minHeight: 100,
        left: 0,
        right: 0,
        
    },
    scrollView: {
        flex: 1
    },
})