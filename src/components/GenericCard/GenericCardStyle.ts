import { StyleSheet } from "react-native";
import { fonts, weights } from "../../theme/font";
import { colors } from "../../theme/color";

export const GCStyles = StyleSheet.create({
    card: {
        width: 'auto',
        marginTop: 16,
        padding: 16,
        borderRadius: 12,
        backgroundColor: 'white'
    },
    header: {
        marginBottom: 16
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        flex: 1
    },
    count: {
        fontSize: 16,
        color: '#666',
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        marginTop: 4
    },
    content: {
        minHeight: 100
    },
    emptyState: {
        flexDirection: 'row',
        backgroundColor: colors.bg.error.primary,
        borderRadius: 14,
        padding: 12,
        gap: 6
    },
    emptyStateIcon: {
        width: 20,
        height: 20,
        marginRight: 12,
    },
    emptyStateTitle: {
        fontSize: fonts.label.label_2.fontSize,
        lineHeight: fonts.label.label_2.lineHeight,
        letterSpacing: fonts.label.label_2.letterSpacing,
        fontWeight: weights.medium
    },
    emptyStateDescription: {
        fontSize: fonts.body.body_3.fontSize,
        lineHeight: fonts.body.body_3.lineHeight,
        letterSpacing: fonts.body.body_3.letterSpacing,
        fontWeight: weights.regular,
        color: '#666',
        marginTop: 4
    },
    actionButton: {
        backgroundColor: 'white',
        borderRadius: 12,
        borderColor: 'black',
        borderWidth: 1,
        paddingVertical: 12,
        paddingHorizontal: 20,
        alignItems: 'center',
        marginTop: 16
    },
    actionButtonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: '500'
    }
});