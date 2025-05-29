import { View, ScrollView, StyleSheet } from "react-native"
import { InfoCard, MediaTile } from "@practo/self-serve"

export const InsuranceCard = () => {
    return (
        <View style={styles.card}>
            <InfoCard
                body=""
                rightIcon="None"
                title="Insurance & Corporate Tie-ups"
                titleBodyGap={0}
                variant="Large"
            />
            <View style={styles.contentContainer}>
                <InfoCard
                    body=""
                    rightIcon="Arrow"
                    title="Insurances"
                    variant="Default"
                />
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.mediaTileContainer}>
                        <MediaTile
                            borderRadius={0}
                            bottomIconBackgroundColor="#3B82F6"
                            bottomIconSize={16}
                            bottomIconTintColor="#ffffff"
                            thumbnailUri="https://i.ibb.co/WW71qyjw/Images.png"
                            tileSize={120}
                            title="HDFC Ergo Life Insurance..."
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
                            thumbnailUri="https://i.ibb.co/KjdyLx87/Images-1.png"
                            tileSize={120}
                            title="New India Insurance"
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
                            thumbnailUri="https://i.ibb.co/WW71qyjw/Images.png"
                            tileSize={120}
                            title="BHEL"
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
                            thumbnailUri="https://i.ibb.co/KjdyLx87/Images-1.png"
                            tileSize={120}
                            title="NTPC"
                            topIconBackgroundColor="#dc2626"
                            topIconSize={16}
                            topIconTintColor="#ffffff"
                            variant="Detailed"
                        />
                    </View>
                </ScrollView>

                <InfoCard
                    body=""
                    rightIcon="Arrow"
                    title="Corporate Tie-Ups"
                    variant="Default"
                />

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.mediaTileContainer}>
                        <MediaTile
                            borderRadius={0}
                            bottomIconBackgroundColor="#3B82F6"
                            bottomIconSize={16}
                            bottomIconTintColor="#ffffff"
                            thumbnailUri="https://i.ibb.co/WW71qyjw/Images.png"
                            tileSize={120}
                            title="Indian Oil"
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
                            thumbnailUri="https://i.ibb.co/KjdyLx87/Images-1.png"
                            tileSize={120}
                            title="NTPC"
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
                            thumbnailUri="https://i.ibb.co/WW71qyjw/Images.png"
                            tileSize={120}
                            title="BHEL"
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
                            thumbnailUri="https://i.ibb.co/KjdyLx87/Images-1.png"
                            tileSize={120}
                            title="NTPC"
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
        paddingBottom: 24
    },
    mediaTileContainer: {
        flexDirection: 'row',
        paddingHorizontal: 12,
        gap: 12
    }
})