import { View, StyleSheet, FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { MediaTile, Button } from "@practo/self-serve"
import { AddMedia } from "../../../../components/media/AddMedia";
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
    PhotosAndVideos: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'PhotosAndVideos'>;

type MediaItem = {
    thumbnailUri: string;
    title: string;
    duration?: string;
    isVideo?: boolean;
    variant?: "Detailed" | "Default";
};

const MEDIA_ITEMS: MediaItem[] = [
    {
        thumbnailUri: "https://picsum.photos/200/300",
        title: "Video 1",
        duration: "10s",
        isVideo: true,
        variant: "Detailed",
    },
    {
        thumbnailUri: "https://picsum.photos/200/300",
        title: "Photo 1",
        variant: "Detailed",
    },
    {
        thumbnailUri: "https://picsum.photos/200/300",
        title: "Photo 2",
        variant: "Detailed",
    },
    {
        thumbnailUri: "https://picsum.photos/200/300",
        title: "Video 2",
        duration: "10s",
        isVideo: true,
        variant: "Detailed",
    },
];

const MediaGalleryContent = () => {
    const navigation = useNavigation<NavigationProp>();

    const handleAddMediaPress = () => {
        navigation.navigate('PhotosAndVideos');
    };

    const renderMediaTile = (item: MediaItem) => (
        <MediaTile
            key={item.thumbnailUri}
            thumbnailUri={item.thumbnailUri}
            title={item.title}
            variant={item.variant || "Default"}
            duration={item.duration}
            isVideo={item.isVideo}
            onPress={() => {}}
        />
    );

    const mediaTiles = MEDIA_ITEMS.map(renderMediaTile);

    return (
        <View style={styles.content}>
            <AddMedia
                mediaTiles={mediaTiles}
                title="Media Gallery"
                subtext="Add media to your gallery"
                errorAlertTitle="Add photos & videos of operation theatre"
                errorAlertDescription="Missing this can reduce patient trust and hospital credibility"
                progressAlertTitle="Progress"
                progressAlertDescription="Progress"
                progressAlertShowLoader={true}
                progressAlertRightAction={true}
                progressAlertLoaderPercentage={100}
                onAddMediaPress={handleAddMediaPress}
            />
        </View>
    );
};

export const MediaGalleryScreen = () => {
    return (
        <SafeAreaView edges={['left', 'right', 'bottom']} style={styles.container}>
            <FlatList
                data={[]}
                renderItem={null}
                contentContainerStyle={styles.flatList}
                style={styles.scrollView}
                ListHeaderComponent={<MediaGalleryContent />}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
    },
    content: {
        padding: 12,
    },
    flatList: {
        paddingBottom: 12,
    },
});