import { Image, StyleSheet, View } from "react-native";
import React, { ReactNode } from 'react';
import { Modal } from 'react-native';
import { Button } from "../surgery/SurgeryOverviewCard/SurgeryOverviewCard";

interface RemoveModalProps {
    isRemoveModalVisible: boolean;
    onModalClose: () => void;
    animationStyle: "none" | "slide" | "fade";
    children: ReactNode;
}

export const RemoveModal: React.FC<RemoveModalProps> = ({
    isRemoveModalVisible,
    onModalClose,
    animationStyle,
    children
}) => {
    return (
        <Modal
        visible={isRemoveModalVisible}
        onRequestClose={onModalClose}
        transparent={true}
        animationType={animationStyle}
      >
        {children}
      </Modal>
    )
}