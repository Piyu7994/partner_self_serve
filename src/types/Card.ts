import React from "react";

export enum CardType {
    MEDIA = 'media',
    DOCTORS = 'doctors',
    RATING = 'rating',
    SURGERIES = 'surgeries',
    EST_PROFILE = 'est_profile',
    EST_ABOUT = 'est_about'
}

export type CardAction = {
    label: string;
    onPress: () => void;
};

export type CardEmptyState = {
    icon?: string;
    title: string;
    description: string;
};

export type CardHeader = {
    title: string;
    count?: string;
    subtitle?: string;
};

export type CardContent = {
    header: CardHeader;
    emptyState?: CardEmptyState;
    action: CardAction;
    content: React.ReactNode;
}

