import { CardType } from "./card"

//Profile Card
export type HospitalProfileCard = {
    type: CardType.EST_PROFILE,
    logoUrl: string;
    name: string;
    speciality: string;
    departments: string[];
    openTime: string;
    closeTime: string;
    location: string;
    profileCompletion: number;
    profileCompletionMessage: string;
}

//Doctos Card
export type DoctorItem = {
    id: string;
    name: string;
    speciality: string;
    image?: string;
}
export type DoctorCard = {
    type: CardType.DOCTORS;
    doctors: Array<DoctorItem>;
}

//Surgery Card
export type SurgeryItem = {
    id: string;
    name: string;
    description: string;
}
export type SurgeryCard = {
    type: CardType.SURGERIES;
    surgeries: Array<SurgeryItem>;
}

//Ratings Card
export type RatingCardItem = {
    name: string;
    rating: number;
}
export type RatingCard = {
    type: CardType.RATING;
    overallRating: number;
    ratingProvider: string;
    categories: Array<RatingCardItem>;
}

//Photos & Video Card
export type MediaType = 'photos' | 'video'
export type MediaItem = {
    id: string;
    url: string;
    type: MediaType;
}
export type MediaCard = {
    type: CardType.MEDIA;
    media: Array<MediaItem>;
}

//About Hospital Card
export type EstTimings = {
    days: string;
    slots: string[];
}
export type EstAboutCard = {
    type: CardType.EST_ABOUT;
    hospitalName: string;
    establishedYear: number;
    address: string;
    mapImageUrl: string;
    timings: Array<EstTimings>;
    paymentModes: string[];
    registrationFee: string;
    insuranceTieUps: string;
    description: string;
    ownershipVerified: boolean;
    ownershipMessage: string;
    profileCompletion: number;
    profileCompletionTitle: string;
    profileCompletionMessage: string;
  };