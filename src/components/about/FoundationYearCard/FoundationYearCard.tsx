import { Input } from "@practo/self-serve"
import { StyleSheet, View } from "react-native"

export const FoundationYearCard = () => {
        return(
            <View style={styles.inputContainer}>
            <Input
                disableRightAction
                helperState="Default"
                label="Year of Foundation (required)"
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