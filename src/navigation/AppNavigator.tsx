import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "../theme/color";
import EstablishmentOverviewScreen from "../screens/establishment/EstablishmentOverview";
import { MediaGalleryScreen } from "../screens/establishment/media/MediaGalleryScreen/MediaGalleryScreen";
import { View, Text, TouchableOpacity } from "react-native";
import { RoomGalleryScreen } from "../screens/establishment/media/MediaGalleryScreen/RoomGalleryScreen";
import { PhotosAndVideosScreen } from "../screens/establishment/media/MediaGalleryScreen/PhotosAndVideosScreen";
import { RoomPhotoDetailsScreen } from "../screens/establishment/media/MediaGalleryScreen/DetailedRoomScreen";
import { L1_AboutUs } from "../screens/establishment/about/AboutUsFlow/L1_AboutUs";
import { L1_LogoCover } from "../screens/establishment/about/AboutUsFlow/L1_LogoCover";
import { L2_EstablishmentDescription } from "../screens/establishment/about/AboutUsFlow/L2_EstablishmentDescription";
import { L2_EstablishmentName } from "../screens/establishment/about/AboutUsFlow/L2_EstablishmentName";
import { L2_FoundationYear } from "../screens/establishment/about/AboutUsFlow/L2_FoundationYear";
import { L2_RegistrationFee } from "../screens/establishment/about/AboutUsFlow/L2_RegistrationFee";

const AppNavigator = () => {
    const AppStack = createNativeStackNavigator();

    return (
        <AppStack.Navigator
            initialRouteName="EstablishmentOverview"
            screenOptions={{
                headerShown: false,
                statusBarTranslucent: true,
                statusBarStyle: 'light',
                statusBarBackgroundColor: 'transparent',
                contentStyle: {
                    backgroundColor: colors.bg.tertiary,
                },
            }}
        >
            <AppStack.Screen 
                name="EstablishmentOverview"
                component={EstablishmentOverviewScreen}
                options={{
                    title: "Overview",
                    headerShown: false,
                }}
            />
            <AppStack.Screen
                name="MediaGallery"
                component={MediaGalleryScreen}
                options={{
                    title: "Media Galleryyyy",
                    headerShown: true,
                    // header: ({ navigation, route, options }) => (
                    //     <CustomHeader title="Media Gallery" onBack={() => navigation.goBack()} />
                    // ),
                }}
            />
            <AppStack.Screen
                name="RoomGallery"
                component={RoomGalleryScreen}
                options={{
                    title: "Room Gallery",
                    headerShown: true,
                }}
            />
            <AppStack.Screen
                name="PhotosAndVideos"
                component={PhotosAndVideosScreen}
                options={{
                    title: "Photos and Videos",
                    headerShown: true,
                }}
            />
            <AppStack.Screen
                name="RoomDetails"
                component={RoomPhotoDetailsScreen}
                options={{
                    title: "Room Details",
                    headerShown: true,
                }}
            />
            <AppStack.Screen
                name="L1_AboutUs"
                component={L1_AboutUs}
            />
            <AppStack.Screen
                name="L1_LogoCover"
                component={L1_LogoCover}
            />
            <AppStack.Screen
                name="L2_EstablishmentDescription"
                component={L2_EstablishmentDescription}
            />
            <AppStack.Screen
                name="L2_EstablishmentName"
                component={L2_EstablishmentName}
            />
            <AppStack.Screen
                name="L2_FoundationYear"
                component={L2_FoundationYear}
            />
            <AppStack.Screen
                name="L2_RegistrationFee"
                component={L2_RegistrationFee}
            />
        </AppStack.Navigator>
    )

};

const CustomHeader = ({ title, onBack }: { title: string, onBack: () => void }) => (
    <View style={{
        height: 60,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 56,
        paddingHorizontal: 16,
        elevation: 4,
    }}>
        <TouchableOpacity onPress={onBack}>
            <Text style={{ fontSize: 16 }}>{'< Back'}</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 16 }}>
            {title}
        </Text>
    </View>
);

export default AppNavigator;