import { StyleSheet, View } from "react-native"
import { Alert, GenericList, MediaTile, Button } from "@practo/self-serve"
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Update RootStackParamList type
type RootStackParamList = {
    RoomDetails: { imageUrl: string; isVideo?: boolean; duration?: string };
    // ...other screens if needed
};

type MediaItem = {
    thumbnailUri: string;
    title: string;
    duration?: string;
    isVideo?: boolean;
};

const MEDIA_ITEMS: MediaItem[] = [
    {
        thumbnailUri: "https://picsum.photos/200/307",
        title: "Photo 1",
    },
    {
        thumbnailUri: "https://picsum.photos/200/306",
        title: "Video 1",
        duration: "01:25",
        isVideo: true,
    },
    {
        thumbnailUri: "https://picsum.photos/200/305",
        title: "Photo 2",
    },
    {
        thumbnailUri: "https://peach.blender.org/wp-content/uploads/title_anouncement.jpg",
        title: "Video 2",
        duration: "00:56",
        isVideo: true,
    },
    {
        thumbnailUri: "https://picsum.photos/200/303",
        title: "Photo 3",
    },
    {
        thumbnailUri: "https://picsum.photos/200/302",
        title: "Photo 4",
    },
    {
        thumbnailUri: "https://picsum.photos/200/301",
        title: "Photo 5",
    },
    {
        thumbnailUri: "https://picsum.photos/200/308",
        title: "Photo 6",
    },
    {
        thumbnailUri: "https://picsum.photos/200/309",
        title: "Video 3",
        duration: "02:12",
        isVideo: true,
    },
    {
        thumbnailUri: "https://picsum.photos/200/307",
        title: "Photo 1",
    },
    {
        thumbnailUri: "https://picsum.photos/200/306",
        title: "Video 1",
        duration: "01:25",
        isVideo: true,
    },
    {
        thumbnailUri: "https://picsum.photos/200/305",
        title: "Photo 2",
    },
    {
        thumbnailUri: "https://peach.blender.org/wp-content/uploads/title_anouncement.jpg",
        title: "Video 2",
        duration: "00:56",
        isVideo: true,
    },
    {
        thumbnailUri: "https://picsum.photos/200/303",
        title: "Photo 3",
    },
    {
        thumbnailUri: "https://picsum.photos/200/302",
        title: "Photo 4",
    },
    {
        thumbnailUri: "https://picsum.photos/200/301",
        title: "Photo 5",
    },
    {
        thumbnailUri: "https://picsum.photos/200/308",
        title: "Photo 6",
    },
    {
        thumbnailUri: "https://picsum.photos/200/309",
        title: "Video 3",
        duration: "02:12",
        isVideo: true,
    },
];

const MediaGrid = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const renderMediaTile = (item: MediaItem) => (
        <MediaTile
            key={item.thumbnailUri}
            thumbnailUri={item.thumbnailUri}
            title={item.title}
            variant="Default"
            duration={item.duration}
            isVideo={item.isVideo}
            onPress={() => navigation.navigate('RoomDetails', { imageUrl: item.thumbnailUri, isVideo: item.isVideo, duration: item.duration })}
        />
    );

    return (
        <GenericList
            data={MEDIA_ITEMS.map(renderMediaTile)}
            layout="Grid"
            numColumns={3}
            style={styles.gridList}
        />
    );
};

const HeaderAlert = () => (
    <View style={{ paddingHorizontal: 16 }}>
        <Alert
            description="Open a photo/video to update pricing, amenities and more."
            leftIconType="Info"
            priority="Secondary"
            state="Info"
            title="Add details to these rooms"
        />
    </View>
);

const BottomButton = () => (
    <View style={styles.buttonContainer}>
        <Button
            btnStyle="Fill"
            size="Large"
            state="Default"
            text="Add Photos & Videos"
            type="Secondary"
        />
    </View>
);

export const RoomGalleryScreen = () => {
    return (
        <SafeAreaView edges={['left', 'right', 'bottom']} style={styles.container}>
            <View style={styles.flexColumn}>
                <HeaderAlert />
                <MediaGrid />
                <BottomButton />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flexColumn: {
        flex: 1,
        marginTop: 12,
        gap: 8,
        flexDirection: 'column',
    },
    gridList: {
        alignItems: 'center',
        flexGrow: 1,
    },
    buttonContainer: {
        paddingHorizontal: 16,
        paddingBottom: 20,
        paddingTop: 12, 
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#E5E7EB',
    },
});