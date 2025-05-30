/**
 * @description BottomSheetContainer is a component that provides a bottom sheet modal with a header and content.
 */
import React, {ReactNode} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

const {height: screenHeight} = Dimensions.get('window');

interface BottomSheetProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  backgroundColor?: string;
  titleStyle?: StyleProp<TextStyle>;
  closeIconStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

const BottomSheet = ({
  visible,
  onClose,
  title,
  children,
  backgroundColor = '#FFFFFF',
  titleStyle,
  closeIconStyle,
  containerStyle,
}: BottomSheetProps) => {
  const handleContentPress = (e: any) => {
    e.stopPropagation();
  };

  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback onPress={handleContentPress}>
            <View
              style={[
                styles.bottomSheetContainer,
                {
                  backgroundColor,
                  maxHeight: screenHeight * 0.9,
                  minHeight: screenHeight * 0.2,
                },
                containerStyle,
              ]}>
              {/* Header */}
              <View style={styles.header}>
                <Text style={[styles.title, titleStyle]}>{title}</Text>
                <TouchableOpacity
                  onPress={onClose}
                  hitSlop={styles.closeButtonHitSlop}>
                  <Text style={[styles.closeIconText, closeIconStyle]}>✕</Text>
                </TouchableOpacity>
              </View>

              {/* Content */}
              {children}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  bottomSheetContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: '#030712',
    flex: 1,
  },
  closeIconText: {
    fontSize: 18,
    color: '#6B7280',
    fontWeight: '700',
  },
  closeButtonHitSlop: {
    top: 15,
    bottom: 15,
    left: 15,
    right: 15,
  },
});

export default BottomSheet;
