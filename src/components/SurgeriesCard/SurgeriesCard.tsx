import { Text, View } from "react-native";
import type { SurgeryItem } from "../../types/UICard";
import { SCStyles } from "./SurgeriesCardStyle";
import React from "react";
import { SurgeriesCardProps } from "./SurgeriesCardProps";
import GenericCard from "../GenericCard/GenericCard";

const SurgeryItem: React.FC<SurgeryItem> = ({ id, name, description }) => (
    <View style={SCStyles.surgeryItem}>
        <Text style={SCStyles.surgeryName}>{name}</Text>
        <Text style={SCStyles.surgeryDescription}>{description}</Text>
    </View>
);

const SurgeriesCardComponent: React.FC<SurgeriesCardProps> = ({
    data, onAddPress
}) => {
    const cardContent = {
        header: {
            title: 'Surgeries & Treatments',
            count: `${data.surgeries.length} Surgeries & Treatments`
        },
        emptyState: data.surgeries.length === 0 ? {
            icon: '',
            title: 'You haven\'t added any surgeries',
            description: 'Adding detailed surgery information builds patient truest and encourages more bookings'
        } : undefined,
        action: {
            label: 'Add Surgeries / Treatments',
            onPress: onAddPress
        },
        content: data.surgeries.length > 0 ? (
            <View style={SCStyles.surgeriesList}>
                {data.surgeries.map((surgery) => (
                    <SurgeryItem key={surgery.id} {...surgery} />
                ))}
            </View>
        ) : undefined
    }
    return <GenericCard content={cardContent} />
};

export default SurgeriesCardComponent;