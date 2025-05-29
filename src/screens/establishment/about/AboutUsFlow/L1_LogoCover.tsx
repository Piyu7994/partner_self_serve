import { useState } from "react"
import { View, StyleSheet } from "react-native"
import { LogoCover } from "../../../../components/about/LogoCover/LogoCover"
import { Header, DeleteBottomSheet } from "@practo/self-serve"
import { BottomButtonCard } from "../../../../components/about/BottomLogoButtonCard/BottomButtonCard"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

type RootStackParamList = {
    L1_LogoCover: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const L1_LogoCover = () => {

    const [isDeleteBottomSheetVisible, setIsDeleteBottomSheetVisible] = useState(false);
    const onDeleteHandler = () => {
        setIsDeleteBottomSheetVisible(true);
    }
    const navigation = useNavigation<NavigationProp>();

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.gap} />
                <View style={styles.headerContainer}>
                <Header
                    onBackPress={() => navigation.goBack()}
                    showBackIcon
                    subtext=""
                    title="Logo"
                    variant="Screen Header"
                />
                </View>
                <View style={styles.logoCoverWrapper}>
                    <LogoCover />
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <BottomButtonCard onDeleteHandler={onDeleteHandler}/>
            </View>



            <DeleteBottomSheet
                icon="https://i.postimg.cc/85z10p6t/image.png"
                isVisible={isDeleteBottomSheetVisible}
                onClose={() => setIsDeleteBottomSheetVisible(false)}
                primaryButtonProps={{
                    btnStyle: 'Fill',
                    enableLeftIcon: false,
                    enableRightIcon: false,
                    onPress: () => setIsDeleteBottomSheetVisible(false),
                    size: 'Medium',
                    state: 'Default',
                    text: 'Remove',
                    type: 'Warning'
                }}
                secondaryButtonProps={{
                    btnStyle: 'Outline',
                    enableLeftIcon: false,
                    enableRightIcon: false,
                    onPress: () => setIsDeleteBottomSheetVisible(false),
                    size: 'Medium',
                    state: 'Default',
                    text: 'Cancel',
                    type: 'Neutral'
                }}
                title="Are you sure you want to delete this image?"
/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,   
    },
    content: {
        flex: 1,
        paddingTop: 24,
    },
    gap: {
        height: 10,
    },
    logoCoverWrapper: {
        marginBottom: 200,
        marginHorizontal: 12,
    },
    buttonContainer: {
        paddingHorizontal: 16,
        paddingBottom: 34,
        paddingTop: 12,
        backgroundColor: '#ffffff',
    },
    headerContainer: {
        backgroundColor: '#ffffff',
        height: 56,
        marginBottom: 24,
    }
})