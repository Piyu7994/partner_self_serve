import { StyleSheet, View } from "react-native"
import { GenericList, Alert, MediaCollectionTile } from "@practo/self-serve"
import { SafeAreaView } from "react-native-safe-area-context"
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
    RoomGallery: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'RoomGallery'>;

type CollectionItem = {
    title: string;
    photosCount: number;
    videosCount: number;
    variant?: 'Classic' | 'Compact';
    onPress?: () => void;
};

const COLLECTION_ITEMS: CollectionItem[] = [
    {
        title: "Surgeries",
        photosCount: 234,
        videosCount: 234,
    },
    {
        title: "Infrastructure & Equipments",
        photosCount: 234,
        videosCount: 234,
    },
    {
        title: "Rooms",
        photosCount: 234,
        videosCount: 234,
    },
    {
        title: "Amenities",
        variant: 'Classic',
        photosCount: 0,
        videosCount: 0,
    },
    {
        title: "Testimonials",
        photosCount: 0,
        videosCount: 1,
    },
    {
        title: "Others",
        photosCount: 234,
        videosCount: 234,
    },
];

const HeaderAlert = () => (
    <Alert
            description="Missing this can reduce patient trust and hospital credibility"
            leftIconType="Info"
            priority="Secondary"
            rightAction={false}
            state="Error"
            title="Add photos and videos of operation theatre"
        />
);

const CollectionGrid = () => {
    const navigation = useNavigation<NavigationProp>();

    const handleRoomPress = () => {
        navigation.navigate('RoomGallery');
    };

    const renderCollectionTile = (item: CollectionItem) => {
        const onPress = item.title === "Rooms" ? handleRoomPress : undefined;
        
        return (
            <MediaCollectionTile
                key={item.title}
                title={item.title}
                photosCount={item.photosCount}
                videosCount={item.videosCount}
                variant={item.variant}
                onPress={onPress}
            />
        );
    };

    return (
        <GenericList
            data={COLLECTION_ITEMS.map(renderCollectionTile)}
            layout="Grid"
            numColumns={3}
            style={styles.gridList}
        />
    );
};

export const PhotosAndVideosScreen = () => {
    return (
        <SafeAreaView edges={['left', 'right', 'bottom']}>
            <View style={styles.section}>
                <HeaderAlert />
                <CollectionGrid />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    section: {
        gap: 12,
        marginTop: 12,
        paddingHorizontal: 16,
    },
    gridList: {
        alignItems: 'center',
    },
});