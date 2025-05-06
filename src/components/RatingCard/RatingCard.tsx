import { Text, View } from "react-native";
import { RatingCardItem } from "../../types/UICard";
import { RCStyles } from "./RatingCardStyles";
import React from "react";
import { RatingCardProps } from "./RatingCardProps";
import GenericCard from "../GenericCard/GenericCard";

const RatingStars: React.FC<RatingCardItem> = ({
    rating, name
}) => (
    <View style={RCStyles.starsContainer}>
        {[1,2,3,4,5].map((star) => (
            <Text key={star}
                style={[
                    RCStyles.star, { color: star <= rating ? '#FFD700' : '#E0E0E0' }
                ]}
            >*</Text>
        ))}
    </View>
);

const RatingCardComponent: React.FC<RatingCardProps> = ({
    data, onUpdatePress
}) => {
    const cardContent = {
        header: {
            title: 'Hospital Excellence Rating',
            subtitle: `Hospital excellence rating is given by ${data.ratingProvider} after auditing`
        },
        content: (
            <View style={RCStyles.ratingContent}>
                <View style={RCStyles.overallRating}>
                    <Text style={RCStyles.ratingTitle}>Overall Rating</Text>
                    <RatingStars rating={data.overallRating} name="" />
                    <Text style={RCStyles.ratingValue}>{data.overallRating.toFixed(1)}/5.0</Text>
                </View>

                <View style={RCStyles.categoriesContainer}>
                    {data.categories.map((category, index) => (
                        <View key={index} style={RCStyles.categoryItem}>
                            <Text style={RCStyles.categoryName}>{category.name}</Text>
                            <RatingStars rating={category.rating} name=""/>
                        </View>
                    ))}
                </View>
            </View>
        ),
        action: {
            label: 'View Details',
            onPress: onUpdatePress
        }
    }
    return <GenericCard content={cardContent} />
};

export default RatingCardComponent;