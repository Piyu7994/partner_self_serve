import React from "react";
import { GenericCardProps } from "./GenericCardProps";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { GCStyles } from "./GenericCardStyle";
import errInfoIcon from '../../assets/icons/ic_info_err.png'

const GenericCard: React.FC<GenericCardProps> = ({
    content, style
}) => {
    const { header, emptyState, action, content: customContent } = content;

    return (
        <View style={[GCStyles.card, style]}>
            {/* Header Section */}
            <View style={GCStyles.header}>
                <Text style={GCStyles.title}>{header.title}</Text>
                {header.count !== undefined && (
                    <Text style={GCStyles.count}>{header.count}</Text>
                )}
                {header.subtitle && (
                    <Text style={GCStyles.subtitle}>{header.subtitle}</Text>
                )}
            </View>
            {/* Content Section */}
            <View style={GCStyles.content}>
                {customContent ? ( customContent ) : emptyState ? (
                    <View style={GCStyles.emptyState}>
                        <Image source={errInfoIcon} style={GCStyles.emptyStateIcon}/>
                        <View style={{flex: 1}}>
                            <Text style={GCStyles.emptyStateTitle}>{emptyState.title}</Text>
                            <Text style={GCStyles.emptyStateDescription}>{emptyState.description}</Text>
                        </View>
                    </View>
                ) : null}
            </View>

            {/* Action Button Section */}
            <TouchableOpacity style={GCStyles.actionButton} onPress={action.onPress}>
                <Text style={GCStyles.actionButtonText}>{action.label}</Text>
            </TouchableOpacity>
        </View>
    )
};

export default GenericCard;