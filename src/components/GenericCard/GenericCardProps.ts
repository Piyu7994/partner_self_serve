import { StyleProp, ViewStyle } from "react-native";
import { CardContent } from "../../types/Card";

export interface GenericCardProps {
    content: CardContent;
    style?: StyleProp<ViewStyle>;
}