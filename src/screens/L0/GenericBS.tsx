import { Button, DeleteBottomSheet, Divider, GenericBottomSheet, ListItemWithControl, Search } from "@practo/self-serve"
import React, { useState } from "react"
import { Dimensions, FlatList, Text, View } from "react-native"

export const GenericBS = () => {
    const [show, setShow] = useState(false)
    const screenHeight = Dimensions.get('window').height;
    const maxListHeight = screenHeight * 0.6; // or 0.6, 0.7 as per design

    return (
        <View>
            <Button
                onPress={() => { setShow(true) }}
                text="Generic BottomSheet"
                type='Neutral'
                btnStyle='Fill' size='Medium' state='Default'
            />
            <GenericBottomSheet
                footerButtonProps={{
                    btnStyle: 'Fill',
                    enableLeftIcon: false,
                    enableRightIcon: false,
                    onPress: () => { setShow(false) },
                    size: 'Large',
                    state: 'Default',
                    text: 'Add speciality',
                    type: 'Primary'
                }}
                headerText="Add speciality"
                isSheetVisible={show}
                onClose={() => { setShow(false) }}
                onFooterButtonPress={() => { setShow(false) }}
                showFooter
                showHeader
                showHeaderIcon
                showHeaderText
                children={
                    <>
                        <View
                            style={{
                                paddingHorizontal: 16
                            }}
                        >
                            <Search
                                bgType="White"
                                onChangeText={() => { }}
                                size="Large"
                                enableShadow={false}
                                enableVoiceSearch={false}
                            />
                        </View>
                        <FlatList style={{ maxHeight: maxListHeight, paddingHorizontal: 16 }}
                            data={['Ear Nore Throat', 'Sexual Health', 'Orthopaedics',
                                'Child Specialist', 'Digestive Issues', 'Homeopathy', 'Eye Specialist',
                                'Ear Nore Throat', 'Sexual Health', 'Orthopaedics',
                                'Child Specialist', 'Digestive Issues', 'Homeopathy', 'Eye Specialist',
                            ]}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(_, index) => index.toString()}
                            renderItem={({ item }) => (
                                <>
                                    <ListItemWithControl label={item} imageUrl={''} />
                                    <Divider />
                                </>
                            )}
                        />
                    </>
                }
            />
        </View>
    );
}