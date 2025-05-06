import { DoctorCard } from "../../types/UICard";

export interface DoctorCardProps {
    data: DoctorCard;
    onAddPress: () => void;
}