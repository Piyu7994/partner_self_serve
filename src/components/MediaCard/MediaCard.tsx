import { FlatList, Image, View } from "react-native";
import { MediaCardProps } from "./MediaCardProps";
import { MCStyles } from "./MediaCardStyles";
import GenericCard from "../GenericCard/GenericCard";

const MediaCardComponent: React.FC<MediaCardProps> = ({
    data, onAddPress
}) => {
    const cardContent = {
        header: {
            title: 'Photos and Videos',
            count: `${data.media.length} Photos and Videos`
        },
        emptyState: data.media.length === 0 ? {
            icon: '',
            title: 'You haven\'t added any photos yet',
            description: 'Add photos and videos of your hospital, amenities, rooms and treatments offered for patients to discover'
        } : undefined,
        action: {
            label: 'Add Photos and Videos',
            onPress: onAddPress
        },
        content: data.media.length > 0 ? (
            <FlatList 
                data={data.media}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Image source={{ uri: item.url }} style={MCStyles.media}/>
                )}
            />
        ) : undefined
    }

    return <GenericCard content={cardContent}/>
};

export default MediaCardComponent;