import { StyleSheet } from "react-native";

export const DCStyles = StyleSheet.create({
    doctorItem: {
        width: 120,
        marginRight: 12,
        alignItems: 'center'
    },
    doctorImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 8
    },
    doctorName: {
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 4
    },
    doctorSpeciality: {
        fontSize: 12,
        color: '#666',
        textAlign: 'center'
    }
});