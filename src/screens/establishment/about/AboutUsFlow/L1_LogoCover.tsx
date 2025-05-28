import { View, StyleSheet } from "react-native"
import { LogoCover } from "../../../../components/about/LogoCover/LogoCover"
import { Header } from "@practo/self-serve"
import { BottomButtonCard } from "../../../../components/about/BottomLogoButtonCard/BottomButtonCard"

export const L1_LogoCover = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.gap} />
                <View style={styles.headerContainer}>
                <Header
                    onBackPress={() => {}}
                    showBackIcon
                    subtext=""
                    title="Logo"
                    variant="Screen Header"
                />
                </View>
                <View style={styles.logoCoverWrapper}>
                    <LogoCover />
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <BottomButtonCard />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,   
    },
    content: {
        flex: 1,
        paddingTop: 24,
    },
    gap: {
        height: 10,
    },
    logoCoverWrapper: {
        marginBottom: 200,
        marginHorizontal: 12,
    },
    buttonContainer: {
        paddingHorizontal: 16,
        paddingBottom: 34,
        paddingTop: 12,
        backgroundColor: '#ffffff',
    },
    headerContainer: {
        backgroundColor: '#ffffff',
        height: 56,
        marginBottom: 24,
    }
})