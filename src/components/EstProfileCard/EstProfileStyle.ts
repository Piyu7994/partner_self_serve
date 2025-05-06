import { StyleSheet } from "react-native";

export const EPCStyle = StyleSheet.create({
    card: {
        width: 'auto',
        marginTop: 16,
        padding: 16,
        borderRadius: 12,
        backgroundColor: 'white'
    },
    headerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 12,
    },
    logoContainer: {
        borderRadius: 12,
        borderWidth: 1.5,
        marginRight: 12, 
        width: 64, 
        height: 64, 
        overflow: 'hidden'
    },
    logo: {
      width: '100%',
      height: '100%'
    },
    name: {
      fontSize: 20,
      fontWeight: '700',
      color: '#222',
    },
    speciality: {
      fontSize: 14,
      color: '#666',
      marginTop: 2,
    },
    departmentsRow: {
      flexDirection: 'row',
      marginBottom: 12,
    },
    departmentPill: {
      backgroundColor: '#F5F6F8',
      borderRadius: 16,
      paddingHorizontal: 14,
      paddingVertical: 6,
      marginRight: 8,
      flexDirection: 'row',
      alignItems: 'center',
    },
    departmentText: {
      fontSize: 14,
      color: '#444',
    },
    arrow: {
      fontSize: 16,
      color: '#888',
      marginLeft: 6,
    },
    infoRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 4,
    },
    infoIcon: {
        width: 16,
        height: 16,
        marginRight: 6,
    },
    infoText: {
      fontSize: 14,
      color: '#444',
    },
    bold: {
      fontWeight: '700',
      color: '#111',
    },
    profileCompletionBox: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FFF3F3',
      borderRadius: 12,
      padding: 12,
      marginTop: 14,
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
    }
});