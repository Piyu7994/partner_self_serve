import { ScrollView, StyleSheet, View } from "react-native"
import { InfoCard, MediaTile } from "@practo/self-serve"

export const OwnershipCard = () => {
    return (
        <View style={styles.card}>
            <InfoCard
                body=""
                rightIcon="None"
                title="Ownership proof"
                titleBodyGap={0}
                variant="Large"
            />
            <View style={styles.contentContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.mediaTileContainer}>
                        <MediaTile
                            borderRadius={0}
                            bottomIconBackgroundColor="#3B82F6"
                            bottomIconSize={16}
                            bottomIconTintColor="#ffffff"
                            thumbnailUri="https://i.ibb.co/k2h82qWT/Images-2.png"
                            tileSize={120}
                            title=""
                            topIconBackgroundColor="#dc2626"
                            topIconSize={16}
                            topIconTintColor="#ffffff"
                            variant="Detailed"
                        />
                        <MediaTile
                            borderRadius={0}
                            bottomIconBackgroundColor="#3B82F6"
                            bottomIconSize={16}
                            bottomIconTintColor="#ffffff"
                            thumbnailUri="https://i.ibb.co/bRskX3PY/Images-3.png"
                            tileSize={120}
                            title=""
                            topIconBackgroundColor="#dc2626"
                            topIconSize={16}
                            topIconTintColor="#ffffff"
                            variant="Detailed"
                        />
                        <MediaTile
                            borderRadius={0}
                            bottomIconBackgroundColor="#3B82F6"
                            bottomIconSize={16}
                            bottomIconTintColor="#ffffff"
                            thumbnailUri="https://i.ibb.co/k2h82qWT/Images-2.png"
                            tileSize={120}
                            title=""
                            topIconBackgroundColor="#dc2626"
                            topIconSize={16}
                            topIconTintColor="#ffffff"
                            variant="Detailed"
                        />
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        paddingTop: 12,
        paddingHorizontal: 12
    },
    contentContainer: {
        paddingBottom: 64,
        borderRadius:12
    },
    mediaTileContainer: {
        flexDirection: 'row',
        paddingHorizontal: 12,
        gap: 12
    }
})