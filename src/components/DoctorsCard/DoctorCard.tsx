import { FlatList, Image, Text, View } from "react-native";
import { DoctorCardProps } from "./DoctorCardProps";
import { DCStyles } from "./DoctorCardStyles";
import GenericCard from "../GenericCard/GenericCard";
import React from "react";
import type { DoctorItem } from "../../types/UICard";

const DoctorItem: React.FC<DoctorItem> = ({ 
    id, image, name, speciality
 }) => (
    <View style={DCStyles.doctorItem}>
        {image &&
            <Image source={{uri: image }} style={DCStyles.doctorImage}/>
        }
        <Text style={DCStyles.doctorName}>{name}</Text>
        <Text style={DCStyles.doctorSpeciality}>{speciality}</Text>
    </View>
);

const DoctorCardComponent: React.FC<DoctorCardProps> = ({
    data, onAddPress
}) => {
    const cardContent = {
        header: {
            title: 'Doctors',
            count: `${data.doctors.length} Doctors`
        },
        emptyState: data.doctors.length === 0 ? {
            icon: '',
            title: 'You haven\'t added any doctors',
            description: 'Add doctors to appear in doctor search and get appointments'
        } : undefined,
        action: {
            label: 'Add Doctors',
            onPress: onAddPress
        },
        content: data.doctors.length > 0 ? (
            <FlatList
                data={data.doctors}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <DoctorItem {...item} />}
                keyExtractor={( item ) => item.id} 
            />
        ) : undefined
    };

    return <GenericCard content={cardContent} />;
};

export default DoctorCardComponent;