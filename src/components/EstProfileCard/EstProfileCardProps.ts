export interface EstProfileCardProps {
    data: {
        logoUrl: string;
        name: string;
        speciality: string;
        departments: string[];
        openTime: string;
        closeTime: string;
        location: string;
        profileCompletion: number;
        profileCompletionMessage: string;
    };
}