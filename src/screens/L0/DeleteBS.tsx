import { Button, DeleteBottomSheet } from "@practo/self-serve"
import React, { useState } from "react"
import { Text, View } from "react-native"

export const DeleteBS = () => {
    const [show, setShow] = useState(false)
    return (
        <View>
            <Button
                onPress={() => { setShow(true)}}
                text="Delete BottomSheet"
                type='Warning'
                btnStyle='Fill' size='Medium' state='Default'
            />
            <DeleteBottomSheet
                buttonLayout='Row'
                icon="https://i.postimg.cc/85z10p6t/image.png"
                isVisible={show}
                onClose={() => { setShow(false)}}
                primaryButtonProps={{
                    btnStyle: 'Fill',
                    enableLeftIcon: false,
                    enableRightIcon: false,
                    onPress: () => {setShow(false) },
                    size: 'Medium',
                    state: 'Default',
                    text: 'Remove',
                    type: 'Warning'
                }}
                secondaryButtonProps={{
                    btnStyle: 'Outline',
                    enableLeftIcon: false,
                    enableRightIcon: false,
                    onPress: () => { setShow(false)},
                    size: 'Medium',
                    state: 'Default',
                    text: 'Cancel',
                    type: 'Neutral'
                }}
                title="Are you sure you want to delete this image?"
            />
        </View>
    );
}