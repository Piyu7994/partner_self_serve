import React, { useState } from "react";
import { SurgeryItem, Alert } from "@practo/self-serve";
import { View, FlatList, Text, StyleSheet, TouchableOpacity, Image, ViewStyle, TextStyle, ImageStyle, Modal, TouchableWithoutFeedback } from "react-native";

interface ButtonProps {
  text: string;
  onPress?: () => void;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  iconStyle?: ImageStyle;
  btnStyle?: 'Fill' | 'Outline' | 'Soft' | 'Ghost';
  type?: 'Primary' | 'Secondary' | 'Neutral' | 'Warning';
  size?: 'Tiny' | 'Small' | 'Medium' | 'Large';
  enableRightIcon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  onPress,
  disabled = false,
  style,
  textStyle,
  iconStyle,
  btnStyle = 'Soft',
  type = 'Neutral',
  size = 'Medium',
}) => {
  // Get colors based on type and style
  const getColors = () => {
    if (btnStyle === 'Fill') {
      return {
        backgroundColor: type === 'Secondary' ? '#FAB318' : '#1890FF',
        textColor: '#FFFFFF',
        iconColor: '#FFFFFF'
      };
    }
    if (btnStyle === 'Soft') {
      return {
        backgroundColor: type === 'Neutral' ? '#F5F5F5' : '#E6F4FF',
        textColor: type === 'Neutral' ? '#666666' : '#1890FF',
        iconColor: type === 'Neutral' ? '#666666' : '#1890FF'
      };
    }
    if (btnStyle === 'Outline') {
      return {
        backgroundColor: '#FFFFFF',
        textColor: type === 'Neutral' ? '#000000' : '#1890FF',
        iconColor: type === 'Neutral' ? '#000000' : '#1890FF'
      };
    }
    return {
      backgroundColor: '#FFFFFF',
      textColor: '#000000',
      iconColor: '#000000'
    };
  };

  // Get size styles
  const getSizeStyles = () => {
    switch (size) {
      case 'Tiny':
        return {
          height: 26,
          paddingHorizontal: 10,
          fontSize: 10
        };
      case 'Small':
        return {
          height: 40,
          paddingHorizontal: 12,
          fontSize: 12
        };
      case 'Medium':
        return {
          height: 42,
          paddingHorizontal: 20,
          fontSize: 16
        };
      case 'Large':
        return {
          height: 56,
          paddingHorizontal: 24,
          fontSize: 18
        };
      default:
        return {
          height: 42,
          paddingHorizontal: 20,
          fontSize: 16
        };
    }
  };

  const colors = getColors();
  const sizeStyles = getSizeStyles();

  const containerStyle: ViewStyle = {
    backgroundColor: colors.backgroundColor,
    minWidth: 140,
    height: sizeStyles.height,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: sizeStyles.paddingHorizontal,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
    opacity: disabled ? 0.5 : 1,
    ...(btnStyle === 'Outline' && {
      borderWidth: 1,
      borderColor: '#000000',
    })
  };

  const defaultTextStyle: TextStyle = {
    color: colors.textColor,
    fontWeight: '600',
    fontSize: sizeStyles.fontSize,
    fontFamily: 'Lato'
  };

  const defaultIconStyle: ImageStyle = {
    width: sizeStyles.fontSize,
    height: sizeStyles.fontSize,
    tintColor: colors.iconColor,
    resizeMode: 'contain'
  };

  return (
    <TouchableOpacity
      style={[containerStyle, style]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[defaultTextStyle, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

interface HeaderProps {
  title: string;
  subtext?: string;
  showBackIcon?: boolean;
  onBackPress?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  title,
  subtext
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        {subtext && <Text style={styles.subtext}>{subtext}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  backButton: {
    marginRight: 16,
    padding: 4,
  },
  backIcon: {
    width: 36,
    height: 36,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 2,
  },
  subtext: {
    fontSize: 12,
    color: '#666666',
  },
});

export interface L0ScreenCardProps {
  header: {
    title: string;
    subtext: string;
  };
  buttons: {
    helpButton: {
      text: string;
      btnStyle:  'Fill' | 'Outline' | 'Soft' | 'Ghost';
      size: 'Tiny' | 'Small' | 'Medium' | 'Large';
      state: 'Default' | 'Hover' | 'Active' | 'Disabled';
      type: 'Primary' | 'Secondary' | 'Neutral' | 'Warning';
    };
    addButton: {
      text: string;
      btnStyle: 'Fill' | 'Outline' | 'Soft' | 'Ghost';
      size: 'Tiny' | 'Small' | 'Medium' | 'Large';
      state: 'Default' | 'Hover' | 'Active' | 'Disabled';
      type: 'Primary' | 'Secondary' | 'Neutral' | 'Warning';
    };
    modalButton: {
      text: string;
      size: 'Tiny' | 'Small' | 'Medium' | 'Large';
    }
  };
  surgeries: Array<{
    imageUrl: string;
    patientStoriesCount: number;
    photosCount: number;
    priceRange: string;
    title: string;
    videosCount: number;
  }>;
  alert: {
    dataAlert:{
      description: string;
      label: string;
      leftIcon: boolean;
      leftIconType: "Info" | "Time" | undefined;
      priority: "Primary" | "Secondary" | "Tertiary" | undefined;
      state: "Neutral" | "Info" | "Error" | "Accent" | "Success" | undefined;
      title: string;
    };
    emptyDataAlert: {
      description: string;
      title: string;
    }
  };
  bottomSheetData: Array<{
    title: string;
    example: string;
  }>;
  bottomSheetHeader: {
    title: string;
    subtext: string;
  };
}


const L0ScreenCard: React.FC<L0ScreenCardProps> = ({header, buttons, surgeries, alert, bottomSheetData, bottomSheetHeader}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View style={styles2.cont}>
      <Header
        // onBackPress={() => {}}
        title={header.title}
        subtext={header.subtext}
      />
      <Button
        style={styles2.btn}
        btnStyle={buttons.helpButton.btnStyle}
        size={buttons.helpButton.size}
        text={buttons.helpButton.text}
        type={buttons.helpButton.type}
        onPress={()=>{setIsModalVisible(true)}}
      />
      <FlatList
        style={styles2.list}
        data={surgeries}
        renderItem={({ item, index}) => (
          <View style={[styles2.listItem, index === surgeries.length - 1 && { borderBottomWidth: 0}]}>
          <SurgeryItem
            imageUrl={item.imageUrl}
            patientStoriesCount={item.patientStoriesCount}
            photosCount={item.photosCount}
            priceRange={item.priceRange}
            title={item.title}
            videosCount={item.videosCount}
          />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      {surgeries.length >= 1 ?
      <View style={styles2.alert}>
<Alert
  description={alert.dataAlert.description}
  label={alert.dataAlert.label}
  leftIcon={alert.dataAlert.leftIcon}
  leftIconType={alert.dataAlert.leftIconType}
  // loaderPercentage={15}
  priority={alert.dataAlert.priority}
  // showLoader={true}
  state={alert.dataAlert.state}
  title={alert.dataAlert.title}
/>
</View>
:
<View style={styles2.alert}>
  <Alert
  description={alert.emptyDataAlert.description}
  title={alert.emptyDataAlert.title}
  leftIcon={alert.dataAlert.leftIcon}
  leftIconType={alert.dataAlert.leftIconType}
  // loaderPercentage={15}
  priority={alert.dataAlert.priority}
  // showLoader={true}
  state={alert.dataAlert.state}
  />
</View>
}
      <Button
        style={styles2.btn2}
        btnStyle={buttons.addButton.btnStyle}
        size={buttons.addButton.size}
        text={buttons.addButton.text}
        type={buttons.addButton.type}
      />
      <Modal
      animationType="none"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={()=>{}}
      > 
      <View style={styles2.modalOverlay}>
        <View style={styles2.modalContent}>
        <TouchableWithoutFeedback onPress={()=>{setIsModalVisible(false)}}>
        <View style={styles2.closeButtonContainer}>
          <Text style={styles2.xText}>✕</Text>
          <Text style={styles2.examplesText}> Examples</Text>
        </View>
        </TouchableWithoutFeedback>
        <View style={styles2.modalHeader}>
        <Header
          title={bottomSheetHeader.title}
          subtext={bottomSheetHeader.subtext}
        />
        </View>
        <Text style={styles2.exampleHeaderText}>Examples:</Text>
        <FlatList
        data={bottomSheetData}
        renderItem={({ item, index}) => (
          <View style={styles2.exampleList}>
            <Text style={styles2.exampleTitle}>{item.title}</Text>
            <Text style={styles2.exampleText}>{item.example}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button
        text={buttons.modalButton.text}
        size={buttons.modalButton.size}
        style={styles2.modalButton}
        textStyle={{color:"#FFFFFF"}}
      />
      </View>
      </View>
      </Modal>
    </View>
  );
};

const styles2 = StyleSheet.create({
  cont:{
    marginTop: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 10
  },
  btn: {
    width: '94%',
    alignSelf: 'center',
    marginBottom: 15
  },
  btn2: {
    width: '94%',
    alignSelf: 'center',
    marginBottom: 15,
    borderWidth: 2,
    height: 50
  },
  list:{
    marginTop: 10
  },
  listItem:{
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F5',
    paddingBottom: 20,
    paddingLeft: 15
  },
  alert:{
    width: '94%',
    alignSelf: 'center',
    marginBottom: 15
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  // semi-transparent background
    justifyContent: 'flex-end',  // aligns modal to bottom
  },
  modalContent: {
    backgroundColor: 'white',
    height: 'auto',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  closeButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F5',
  },
  closeButtonText: {
    fontSize: 16,
  },
  xText: {
    fontSize: 20,
  },
  examplesText: {
    fontWeight: 'bold',
  },
  modalHeader: {
    marginLeft: -15
  },
  exampleHeaderText:{
    fontWeight: 'bold',
    marginBottom: 13
  },
  exampleList: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F5',
    marginBottom: 10,
    paddingBottom: 15,
    gap: 50,
    alignItems: 'center'
  },
  exampleTitle: {
    width: 100,  
    fontWeight: 600,
    fontSize: 10
  },
  exampleText: {
    flex: 1  
  },
  modalButton: {
    backgroundColor: 'rgb(250, 179, 24)',
  }
})



export default L0ScreenCard;
