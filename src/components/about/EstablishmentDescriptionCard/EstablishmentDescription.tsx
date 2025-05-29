import { Input } from "@practo/self-serve"
import { StyleSheet, View } from "react-native"

export const EstablishmentDescription = () => {
    return (
        <View style={styles.inputContainer}>
            <Input
                disableRightAction
                helperState="Default"
                label="Establishment Description (required)"
                showLabel
                isLabelMandatory={false}
                showHelperField={false}
                state="Default"
                type="Custom"
                isMultiline={true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        padding: 12,
    },
})


