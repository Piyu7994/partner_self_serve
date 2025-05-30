import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "../theme/color";
import { MediaGalleryScreen } from "../screens/establishment/media/MediaGalleryScreen/MediaGalleryScreen";
import { View, Text, TouchableOpacity } from "react-native";
import { RoomGalleryScreen } from "../screens/establishment/media/MediaGalleryScreen/RoomGalleryScreen";
import { PhotosAndVideosScreen } from "../screens/establishment/media/MediaGalleryScreen/PhotosAndVideosScreen";
import { RoomPhotoDetailsScreen } from "../screens/establishment/media/MediaGalleryScreen/DetailedRoomScreen";


const AppNavigator = () => {
    const AppStack = createNativeStackNavigator();

    return (
        <AppStack.Navigator
            initialRouteName="MediaGallery"
            screenOptions={{
                headerShown: false,
                // header: ({ navigation, route, options }) => (
                //     <CustomHeader title="Media Gallery" onBack={() => navigation.goBack()} />
                // ),
                statusBarTranslucent: true,
                statusBarStyle: 'dark',
                statusBarBackgroundColor: 'transparent',
                contentStyle: {
                    backgroundColor: colors.bg.tertiary,
                },
            }}
        >
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