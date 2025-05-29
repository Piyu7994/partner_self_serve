import { Button, DoctorInfoBottomSheet } from "@practo/self-serve"
import React, { useState } from "react"
import { View } from "react-native"

export const DrBS: React.FC = () => {
    const [show, setShow] = useState(false)
    
    return (
        <View>
            <Button
                onPress={() => { setShow(true) }}
                text="Show Bottom Sheet"
                type='Secondary'
                btnStyle='Fill'
                size='Medium'
                state='Default'
            />
            <DoctorInfoBottomSheet
                alertText="Doctor details can only be updated by the doctor. Please contact them for any change."
                buttonText="Add Doctor"
                doctor={{
                    councilName: 'TNMC',
                    councilVerified: true,
                    degree: [
                        'MBBS',
                        'MD Dermatology'
                    ],
                    imageUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
                    listedOn: 'April 2016',
                    name: 'Dr. Aditi P. Ramachandran',
                    regNumber: 'TN/12345/2020'
                }}
                education={[
                    'MD - Dermatology, Venereology & Leprosy - Devaraj URS Medical College - Kolar 2013',
                    'Fellow in Dermato - Surgery - Bangalore Medical College and Research Institute, Bangalore 2016'
                ]}
                isVisible={show}
                onButtonPress={() => {setShow(false) }}
                onClose={() => { setShow(false) }}
                showButton
                specialisations={[
                    'Dermatologist',
                    'Cosmetologist'
                ]}
            />
        </View>
    )
}