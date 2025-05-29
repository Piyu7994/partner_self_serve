import { Input } from "@practo/self-serve"
import { StyleSheet, View } from "react-native"

export const RegistrationFeeCard = () => {
        return(
            <View style={styles.inputContainer}>
            <Input
                disableRightAction={false}
                helperState="Default"
                label="Registration Fee (required)"
                showLabel
                isLabelMandatory={false}
                showHelperField={false}
                state="Default"
                type="Amount"
                
            />
        </View>
        )
}

const styles = StyleSheet.create({
    inputContainer: {
        padding: 12,
    },
})