import { StyleSheet } from "react-native";

export const EACStyle = StyleSheet.create({
    card: {
        width: 'auto',
        marginTop: 16,
        padding: 16,
        borderRadius: 12,
        backgroundColor: 'white'
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        color: '#222',
    },
    subtitle: {
        fontSize: 14,
        color: '#888',
        marginTop: 2,
        marginBottom: 10,
    },
    divider: {
        height: 1,
        backgroundColor: '#F0F0F0',
        marginVertical: 12,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#222',
        marginBottom: 2,
    },
    sectionText: {
        fontSize: 14,
        color: '#444',
        marginBottom: 4,
    },
    mapImage: {
        width: 60,
        height: 60,
        borderRadius: 10,
        marginLeft: 12,
        backgroundColor: '#F0F0F0',
    },
    timingRow: {
        marginBottom: 16,
    },
    timingDays: {
        fontSize: 14,
        color: '#666',
    },
    timingSlots: {
        fontSize: 14,
        color: '#222',
        fontWeight: '500',
    },
    profileCompletionBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF3F3',
        borderRadius: 12,
        padding: 12,
        marginTop: 14,
        marginBottom: 16,
    },
    profileCircle: {
        width: 48,
        height: 48,
        borderRadius: 24,
        borderWidth: 4,
        borderColor: '#F7B2B2',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
    profilePercent: {
        fontSize: 16,
        fontWeight: '700',
        color: '#E57373',
    },
    profileTitle: {
        fontSize: 15,
        fontWeight: '600',
        color: '#222',
    },
    profileMessage: {
        fontSize: 13,
        color: '#666',
        marginTop: 2,
    },
    updateButton: {
        borderWidth: 1,
        borderColor: '#222',
        borderRadius: 12,
        paddingVertical: 14,
        alignItems: 'center',
        marginTop: 8,
    },
    updateButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#222',
    },
});