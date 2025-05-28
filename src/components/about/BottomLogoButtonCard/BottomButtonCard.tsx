import { Button } from "@practo/self-serve"
import { View, StyleSheet } from "react-native"

export const BottomButtonCard = () => {
    return (
        <View style={styles.container}>
            <Button
                btnStyle="Outline"
                size="Medium"
                state="Default"
                text="Delete"
                type="Neutral"
            />
            <Button
                btnStyle="Fill"
                size="Medium"
                state="Default"
                text="Replace Logo"
                type="Secondary"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 12,
        backgroundColor: '#fff',
    },
    buttonWrapper: {
        flex: 1,
    },
    button: {
        borderRadius: 14,
        height: 56,
    },
})   