import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList, ScrollView, Dimensions } from 'react-native';
import { GenericCard, InfoCard, Button, GenericBottomSheet, Input, ListItemWithControl, Divider } from '@practo/self-serve';
import { useRoute } from '@react-navigation/native';
import { MediaPreview } from '../../../../components/mediaPreview/MediaPreview';
import { SafeAreaView } from 'react-native-safe-area-context';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const BOTTOM_SHEET_MAX_HEIGHT = SCREEN_HEIGHT * 0.4;

const AMENITY_GROUPS = [
    {
        key: 'bathroom',
        title: 'Bathroom',
        options: ['Private', 'Shared', 'Not available'],
    },
    {
        key: 'attendantBed',
        title: 'Attendant Bed',
        options: ['Available', 'Not available'],
    },
    {
        key: 'tv',
        title: 'TV',
        options: ['LCD', 'LED', 'Flatscreen', 'Regular', 'Not available'],
    },
    {
        key: 'nursingSupport',
        title: '24X7 Nursing Support',
        options: ['Available', 'Not available'],
    },
];

const InfoCardList = ({ onShowField }: { onShowField: (field: string) => void }) => (
    <View style={styles.infoList}>
        <InfoCard
            title="Room Name"
            body={<Text>Add Name</Text>}
            rightIcon="Arrow"
            onRightIconPress={() => onShowField('roomName')}
        />
        <InfoCard
            title="Description"
            body={<Text>Add description</Text>}
            rightIcon="Arrow"
            onRightIconPress={() => onShowField('description')}
        />
        <InfoCard
            title="Price per night"
            body={<Text>Add price</Text>}
            rightIcon="Arrow"
            onRightIconPress={() => onShowField('price')}
        />
        <InfoCard
            title="Amenities"
            body={<Text>Add amenities</Text>}
            rightIcon="Arrow"
            onRightIconPress={() => onShowField('amenities')}
        />
    </View>
);

const getSheetTitle = (field: string | null) => {
    switch (field) {
        case 'roomName': return 'Choose Room';
        case 'description': return 'Add Description';
        case 'price': return 'Add Price';
        case 'amenities': return 'Add Amenities';
        default: return '';
    }
};

const getSheetButtonText = (field: string | null) => {
    switch (field) {
        case 'roomName': return 'Add Room';
        default: return 'Save';
    }
};

const AmenitiesList = ({
    groups,
    selected,
    onSelect,
    maxHeight,
}: {
    groups: typeof AMENITY_GROUPS;
    selected: { [key: string]: string | null };
    onSelect: (groupKey: string, value: string) => void;
    maxHeight: number;
}) => (
    <FlatList
        style={{ maxHeight }}
        data={[]}
        renderItem={null}
        ListHeaderComponent={
            <View>
                {groups.map((group, groupIdx) => (
                    <View key={group.key}>
                        <View style={[styles.titleContainer, { paddingHorizontal: 16 }]}>
                            <Text style={styles.title}>{group.title}</Text>
                        </View>
                        {group.options.map((option, idx) => (
                            <React.Fragment key={option}>
                                <ListItemWithControl
                                    showBorder={false}
                                    imageUrl=""
                                    label={option}
                                    radioProps={{
                                        action: 'Left',
                                        showHeading: false,
                                        showDescription: false,
                                        size: 'Large',
                                        state: 'Default',
                                        type: 'Neutral',
                                        checked: selected[group.key] === option,
                                        onPress: () => onSelect(group.key, option),
                                    }}
                                    onItemClick={() => onSelect(group.key, option)}
                                    showRadio={true}
                                    showCheckbox={false}
                                />
                                {idx < group.options.length - 1 && <Divider />}
                            </React.Fragment>
                        ))}
                        {groupIdx !== groups.length - 1 && (
                            <View style={{ marginBottom: 16 }}>
                                <Divider height={16} />
                            </View>
                        )}
                    </View>
                ))}
            </View>
        }
    />
);

export const RoomPhotoDetailsScreen = () => {
    const route = useRoute();
    const { imageUrl } = route.params as { imageUrl: string };
    const [isSheetVisible, setIsSheetVisible] = useState(false);
    const [selectedField, setSelectedField] = useState<string | null>(null);
    const [selectedAmenities, setSelectedAmenities] = useState<{ [key: string]: string | null }>({
        bathroom: null,
        attendantBed: null,
        tv: null,
        nursingSupport: null,
    });
    const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

    const handleShowField = (field: string) => {
        setSelectedField(field);
        setIsSheetVisible(true);
    };

    const getSheetContent = (field: string | null) => {
        switch (field) {
            case 'roomName':
                return (
                    <FlatList style={{ maxHeight: BOTTOM_SHEET_MAX_HEIGHT, }}
                        data={['Private Room', 'Deluxe Room', 'VIP Room', 'GeneralRoom', 'Antipolo', 'Antipolo']}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(_, index) => index.toString()}
                        renderItem={({ item }) => (
                            <>
                                <ListItemWithControl showBorder={false}
                                    imageUrl=""
                                    label={item}
                                    radioProps={{
                                        action: 'Left',
                                        showHeading: false,
                                        showDescription: false,
                                        size: 'Large',
                                        state: 'Default',
                                        type: 'Neutral',
                                        checked: selectedRoom === item,
                                        onPress: () => setSelectedRoom(item),
                                    }}
                                    onItemClick={() => setSelectedRoom(item)}
                                    showRadio={true}
                                    showCheckbox={false}
                                />
                                <Divider />
                            </>
                        )}
                    />
                );
            case 'description':
                return (
                    <View style={{ paddingHorizontal: 16 }}>
                        <Input
                            label="Description (required)"
                            helperState="Default"
                            isLabelMandatory={false}
                            showHelperField={true}
                            showHelperIcon={false}
                            showTextCount={true}
                            showRightButton={false}
                            state="Default"
                            type="Custom"
                            isMultiline={true}
                        />
                    </View>
                );
            case 'price':
                return (
                    <View style={{ paddingHorizontal: 16 }}>
                        <Input
                            label="Price per Night"
                            helperState="Default"
                            showHelperField={false}
                            state="Default"
                            showRightButton={false}
                            isLabelMandatory={false}
                            type='Amount'
                            changeDefaultLabel={true}
                        />
                    </View>
                );
            case 'amenities':
                return (
                    <AmenitiesList
                        groups={AMENITY_GROUPS}
                        selected={selectedAmenities}
                        onSelect={(groupKey, value) =>
                            setSelectedAmenities(prev => ({ ...prev, [groupKey]: value }))
                        }
                        maxHeight={BOTTOM_SHEET_MAX_HEIGHT}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <SafeAreaView edges={['left', 'right', 'bottom']} style={styles.container}>
            <ScrollView>
                <View style={styles.flexColumn}>
                    <MediaPreview uri={imageUrl} isVideo={false} duration={undefined} />
                    <GenericCard body={<InfoCardList onShowField={handleShowField} />} />
                    <View style={styles.deleteButton}>
                        <Button
                            text="Delete Photo"
                            btnStyle="Outline"
                            size="Large"
                            onPress={() => { }}
                            type="Warning"
                            state="Default"
                        />
                    </View>
                    <GenericBottomSheet
                        isSheetVisible={isSheetVisible}
                        onClose={() => setIsSheetVisible(false)}
                        headerText={getSheetTitle(selectedField)}
                        showHeader
                        showHeaderIcon
                        showHeaderText
                        showFooter
                        footerButtonProps={{
                            btnStyle: 'Fill',
                            enableLeftIcon: false,
                            enableRightIcon: false,
                            onPress: () => { },
                            size: 'Large',
                            state: 'Default',
                            text: getSheetButtonText(selectedField),
                            type: 'Secondary'
                        }}
                    >
                        {getSheetContent(selectedField)}
                    </GenericBottomSheet>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
    },
    flexColumn: {
        flexDirection: 'column',
    },
    infoList: {
        marginTop: 8,
    },
    deleteButton: {
        marginTop: 16,
        height: 56,
    },
    title: {
        fontFamily: 'Lato',
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 24,
        letterSpacing: -0.20000000298023224,
        color: "#030712"
    },
    titleContainer: {
        marginBottom: 16,
        justifyContent: 'center',
    }
});
