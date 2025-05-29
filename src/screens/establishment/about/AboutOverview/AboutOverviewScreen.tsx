/* eslint-disable react/react-in-jsx-scope */
import { StyleSheet, Text, View } from "react-native"
import { AboutUsTiming, Address, Divider, GenericCard, GenericList, InfoCard, MediaTile } from '@practo/self-serve'
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
    L1_AboutUs: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'L1_AboutUs'>;

export const AboutOverviewScreen: React.FC = () => {

    const navigation = useNavigation<NavigationProp>();

    const onBtnClick = () =>{
        navigation.navigate('L1_AboutUs')        
    }

    const headerProps = {
        title: 'About Apollo Hospital',
        subtext: 'Established in 1942',
        showBackIcon: false,
        headerVariantOptions: 'Card Header'
    }

    const buttonProps = {
        text: 'Update about hospital',
        type: 'Neutral',
        btnStyle: 'Outline',
        onPress: onBtnClick,
    }

    const insurance = <View>
        <GenericList
            data={[
                <MediaTile
                    borderRadius={0}
                    bottomIconBackgroundColor="#3B82F6"
                    bottomIconSize={16}
                    bottomIconTintColor="#FFFFFF"
                    thumbnailUri="https://i.ibb.co/WW71qyjw/Images.png"
                    tileSize={120}
                    title="Indian Oil"
                    topIconBackgroundColor="#DC2626"
                    topIconSize={16}
                    topIconTintColor="#FFFFFF"
                    variant="Detailed"
                />,
                <MediaTile
                    borderRadius={0}
                    bottomIconBackgroundColor="#3B82F6"
                    bottomIconSize={16}
                    bottomIconTintColor="#FFFFFF"
                    thumbnailUri="https://i.ibb.co/KjdyLx87/Images-1.png"
                    tileSize={120}
                    title="NTPC"
                    topIconBackgroundColor="#DC2626"
                    topIconSize={16}
                    topIconTintColor="#FFFFFF"
                    variant="Detailed"
                />,
                <MediaTile
                    borderRadius={0}
                    bottomIconBackgroundColor="#3B82F6"
                    bottomIconSize={16}
                    bottomIconTintColor="#FFFFFF"
                    thumbnailUri="https://i.ibb.co/WW71qyjw/Images.png"
                    tileSize={120}
                    title="BHEL"
                    topIconBackgroundColor="#DC2626"
                    topIconSize={16}
                    topIconTintColor="#FFFFFF"
                    variant="Detailed"
                />,
                <MediaTile
                    borderRadius={0}
                    bottomIconBackgroundColor="#3B82F6"
                    bottomIconSize={16}
                    bottomIconTintColor="#FFFFFF"
                    thumbnailUri="https://i.ibb.co/KjdyLx87/Images-1.png"
                    tileSize={120}
                    title="NTPC"
                    topIconBackgroundColor="#DC2626"
                    topIconSize={16}
                    topIconTintColor="#FFFFFF"
                    variant="Detailed"
                />
            ]}
            layout='Horizontal'
            numColumns={2}
        />
    </View>

    const body = <View>
        <View style={{ marginStart: 8 }}>
            <InfoCard
                body={<Address
                    address="Vishal Patil Clinic, 154/11, Bannerghatta Road, Landmark: Opposite IIM, Bangalore"
                />}
                rightIcon='None'
                title="Address"
                titleBodyGap={12}
            />
        </View>
        <Divider />
        <View style={{ marginTop: 12 }}>
            <AboutUsTiming
                days1="Monday - Saturday"
                days2="Monday - Saturday"
                slot1a="10:00 AM - 8PM"
                slot1b="10:00 AM - 8PM"
                slot2a="10:00 AM - 8PM"
                slot2b="10:00 AM - 8PM"
                title="Timings"
            />
        </View>
        <Divider />
        <View style={{ marginStart: 8 }}>
            <InfoCard
                body={<Text>Credit Card | Cash | Online Payment | Debit Card | Insurance | UPI</Text>}
                rightIcon='None'
                title="Modes of payment"
                titleBodyGap={12}
            />
        </View>
        <Divider />
        <View style={{ marginStart: 8 }}>
            <InfoCard
                body={<Text>UPI No registration fee added</Text>}
                rightIcon='None'
                title="Registration fee"
                titleBodyGap={12}
            />
        </View>
        <Divider />
        <View style={{ marginStart: 8 }}>
            <InfoCard
                body={insurance}
                rightIcon='None'
                title="Insurance & Corporate Tie-ups"
                titleBodyGap={12}
            />
        </View>
        <Divider />
        <View style={{ marginStart: 8 }}>
            <InfoCard
                body={<Text>No description Added</Text>}
                rightIcon='None'
                title="Description"
                titleBodyGap={12}
            />
        </View>
        <Divider />
        <View style={{ marginStart: 8 }}>
            <InfoCard
                body={<Text>This profile has been officially verified for authencity and ownership</Text>}
                rightIcon='None'
                title="Ownership Verified"
                titleBodyGap={12}
            />
        </View>
    </View>

    return (
        <View>
            <GenericCard
                headerProps={headerProps}
                buttonProps={buttonProps}
                body={body}
            />
        </View>
    )
}