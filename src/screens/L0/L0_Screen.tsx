import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import hospitalCoverImg from "../../assets/images/img_hospital.png";
import React from "react";
import DoctorCardComponent from "../../components/DoctorsCard/DoctorCard";
import { CardType } from "../../types/Card";
import SurgeriesCardComponent from "../../components/SurgeriesCard/SurgeriesCard";
import RatingCardComponent from "../../components/RatingCard/RatingCard";
import MediaCardComponent from "../../components/MediaCard/MediaCard";
import { HospitalProfileCard } from "../../components/EstProfileCard/EstProfileCard";
import EstAboutCardComponent from "../../components/EstAboutCard/EstAboutCard";

const L0_Screen: React.FC = () => {
    return (
        <SafeAreaView edges={['left', 'right', 'bottom' ]} style={{flex: 1}}>
            <ScrollView 
                showsVerticalScrollIndicator={false}>
                <Image source={hospitalCoverImg} style={{width: '100%', height: 192}}/>
                <View style={styles.cardsContainer}>
                    <HospitalProfileCard 
                        data={{
                            logoUrl: '',
                            name: 'Apollo Hospital',
                            speciality: 'Multi speciality Hospital',
                            departments: ['Cardiology', 'Dermatology', 'Orthopaedics', 'General'],
                            openTime: '8 AM',
                            closeTime: '9:30 PM',
                            location: 'Bannerghata road, Bangalore',
                            profileCompletion: 15,
                            profileCompletionMessage: 'Update this score to 100% to get 3x increase in transactions',
                        }}
                    />
                    <DoctorCardComponent 
                        data={{
                            type: CardType.DOCTORS,
                            doctors: []
                        }}
                        onAddPress={() => {}}
                    />
                    <SurgeriesCardComponent 
                        data={{
                            type: CardType.SURGERIES,
                            surgeries: []
                        }}
                        onAddPress={() => {}}
                    />
                    <RatingCardComponent 
                        data={{
                            type: CardType.RATING,
                            overallRating: 4.5,
                            ratingProvider: 'Practo',
                            categories: [
                                { name: 'Patient Care', rating: 4.8 },
                                { name: 'Facilities', rating: 4.3 },
                                { name: 'Staff', rating: 4.6 },
                            ]
                        }}
                        onUpdatePress={() => {}}
                    />
                    <MediaCardComponent 
                        data={{
                            type: CardType.MEDIA,
                            media: []
                        }}
                        onAddPress={() => {}}
                    />
                    <EstAboutCardComponent 
                        data={{
                            type: CardType.EST_ABOUT,
                            hospitalName: 'Apollo Hospital',
                            establishedYear: 1942,
                            address: 'Vishal Patil Clinic, 154/11, Bannerghatta Road, Landmark: Opposite IIM, Bangalore',
                            mapImageUrl: 'https://your-map-image-url.com/map.png',
                            timings: [
                            { days: 'Monday - Saturday', slots: ['10:00 AM - 8PM', '10:00 AM - 8PM'] },
                            { days: 'Monday - Saturday', slots: ['10:00 AM - 8PM', '10:00 AM - 8PM'] },
                            ],
                            paymentModes: ['Credit Card', 'Cash', 'Online Payment', 'Debit Card', 'Insurance', 'UPI'],
                            registrationFee: 'UPI No registration fee added',
                            insuranceTieUps: 'No Insurance & Corporate Tie-ups added',
                            description: 'No description added',
                            ownershipVerified: true,
                            ownershipMessage: 'This profile has been officially verified for authenticity and ownership',
                            profileCompletion: 12,
                            profileCompletionTitle: 'Add a description for hospital',
                            profileCompletionMessage: 'Add a description for users to understand more about your hospital',
                        }}
                        onUpdatePress={() => {}}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    cardsContainer: {
        marginTop: -48,
        paddingHorizontal: 12,
        paddingBottom: 16
    }
});

export default L0_Screen;