import { Input } from "@practo/self-serve"
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native"
import { useState } from "react"

export const EmergencyContactCard = () => {
    const [contactNumbers, setContactNumbers] = useState([1]); // Start with one contact number
    const MAX_CONTACTS = 2;

    const addNewContact = () => {
        if (contactNumbers.length < MAX_CONTACTS) {
            setContactNumbers([...contactNumbers, contactNumbers.length + 1]);
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                {contactNumbers.map((index) => (
                    <View key={index} style={index > 1 ? styles.secondCard : null}>
                        <Input
                            helperState="Default"
                            label={`Emergency Contact Number ${index} ${index === 1 ? '(required)' : ''}`}
                            rightActionType="Cross"
                            showLabel
                            showRightButton
                            state="Default"
                            type="Phone"
                            showHelperField={false}
                            changeDefaultLabel={true}
                            isLabelMandatory={false}
                        />
                    </View>
                ))}
                {contactNumbers.length < MAX_CONTACTS && (
                    <TouchableOpacity 
                        style={styles.linkContainer}
                        onPress={addNewContact}
                    >
                        <Text style={styles.linkText}>Add another number</Text>
                    </TouchableOpacity>
                )}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 12
    },
    linkContainer: {
        marginTop: 16
    },
    linkText: {
        color: '#F59E0B',
        textDecorationLine: 'underline',
        fontSize: 14,
        paddingBottom: 16
    },
    secondCard: {
        marginTop: 16
    }
}) 