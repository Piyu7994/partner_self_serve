import { Input } from "@practo/self-serve"
import { StyleSheet, View } from "react-native"

export const EstablishmentName = () => {
    return (
        <View style={styles.inputContainer}>
            <Input
                disableRightAction
                helperState="Default"
                label="Establishment Name (required)"
                showLabel
                isLabelMandatory={false}
                showHelperField={false}
                state="Default"
                type="Custom"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        padding: 12,
    },
})


