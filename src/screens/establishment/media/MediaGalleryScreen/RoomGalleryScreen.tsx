import { StyleSheet, View, FlatList, Dimensions } from "react-native"
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
];

const GRID_CONFIG = {
    numColumns: 3,
    gap: 2, // gap between items in pixels
    containerPadding: 12, // padding of the container in pixels
} as const;

const calculateTileWidth = () => {
    const screenWidth = Dimensions.get('window').width;
    const { numColumns, gap, containerPadding } = GRID_CONFIG;
    
    // Calculate total width available for tiles (screen width minus container padding)
    const availableWidth = screenWidth - (containerPadding * 2);
    
    // Calculate total width taken by gaps (number of gaps is numColumns - 1)
    const totalGapWidth = gap * (numColumns - 1);
    
    // Calculate width for each tile
    // (available width - total gap width) / number of columns
    const tileWidth = (availableWidth - totalGapWidth) / numColumns;
    
    return tileWidth;
};

const MediaGrid = () => {
    const tileWidth = calculateTileWidth();

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const renderMediaTile = (item: MediaItem) => (
        <View style={[styles.gridItem, { width: tileWidth, height: tileWidth }]}>
            <MediaTile
                key={item.thumbnailUri}
                thumbnailUri={item.thumbnailUri}
                title={item.title}
                variant="Default"
                duration={item.duration}
                isVideo={item.isVideo}
                onPress={() => navigation.navigate('RoomDetails', { imageUrl: item.thumbnailUri, isVideo: item.isVideo, duration: item.duration })}
            />
        </View>
    );

    return (
        <View style={styles.gridContainer}>
            <View style={styles.gridWrapper}>
                <GenericList
                    data={MEDIA_ITEMS.map(renderMediaTile)}
                    layout="Grid"
                    numColumns={GRID_CONFIG.numColumns}
                    style={styles.gridList}
                />
            </View>
        </View>
    );
};

const HeaderAlert = () => (
    <Alert
        description="Open a photo/video to update pricing, amenities \nand more."
        leftIconType="Info"
        priority="Secondary"
        state="Info"
        title="Add details to these rooms"
    />
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
            <View style={styles.contentContainer}>
                <FlatList
                    data={[]}
                    renderItem={null}
                    ListHeaderComponent={
                        <View>
                            <HeaderAlert />
                            <MediaGrid />
                        </View>
                    }
                    contentContainerStyle={styles.listContent}
                />
                <BottomButton />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        position: 'relative',
    },
    listContent: {
        paddingBottom: 100,
    },
    gridContainer: {
        paddingHorizontal: GRID_CONFIG.containerPadding,
        marginTop: 12,
    },
    gridWrapper: {
        width: '100%',
    },
    gridList: {
        width: '100%',
        gap: GRID_CONFIG.gap,
    },
    gridItem: {
        aspectRatio: 1,
    },
    buttonContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        paddingHorizontal: 16,
        paddingBottom: 20,
        paddingTop: 12,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#E5E7EB',
    },
});