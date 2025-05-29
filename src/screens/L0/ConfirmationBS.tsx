import { Button, ConfirmationBottomSheet, FeeInputBox } from "@practo/self-serve"
import React, { useState } from "react"
import { Text, View } from "react-native"

export const ConfirmationBS = () => {
    const [show, setShow] = useState(false)
    return (
        <View>
            <Button
                onPress={() => setShow(true)}
                text="Confirmation BottomSheet"
                type='Secondary'
                btnStyle='Fill' size='Medium' state='Default'
            />
            <ConfirmationBottomSheet
                header="Consultation fee"
                isVisible={show}
                onBack={() => setShow(false)}
                onClose={() => setShow(false)}
                onPrimaryClick={() => {setShow(false) }}
                onSecondaryClick={() => { setShow(false)}}
                showBackIcon 
                primaryButtonText="Confirm & Save"
                secondaryButtonText="Go Back & Edit"
                children={
                    <View>
                        <Text
                            ellipsizeMode="tail"
                            numberOfLines={3}
                        >
                            The entered fee seems unusually high, are you sure you want to proceed?
                        </Text>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                marginBottom: 16
                            }}
                        >
                            <View
                                style={{
                                    flex: 1
                                }}
                            >
                                <FeeInputBox
                                    subTitle="500"
                                    title="Hospital appointment"
                                />
                            </View>
                            <View
                                style={{
                                    flex: 1
                                }}
                            >
                                <FeeInputBox
                                    title="Video Consult"
                                />
                            </View>
                        </View>
                    </View>
                }/>
        </View>
    );
}