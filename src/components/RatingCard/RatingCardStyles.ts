import { StyleSheet } from "react-native";

export const RCStyles = StyleSheet.create({
    ratingContent: {
        padding: 16
    },
    overallRating: {
        alignItems: 'center',
        marginBottom: 24
    },
    ratingTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8
    },
    ratingValue: {
        fontSize: 20,
        fontWeight: '700',
        marginTop: 8
    },
    starsContainer: {
        flexDirection: 'row'
    },
    star: {
        fontSize: 24,
        marginHorizontal: 2
    },
    categoriesContainer: {
        gap: 16
    },
    categoryItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0'
    },
    categoryName: {
        fontSize: 14,
        flex: 1
    }
})