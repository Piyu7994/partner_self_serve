import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { GenericCard, InfoCard, Button } from '@practo/self-serve';
import { useRoute } from '@react-navigation/native';
import { MediaPreview } from '../../../../components/mediaPreview/MediaPreview';
import { SafeAreaView } from 'react-native-safe-area-context';

const InfoCardList = () => (
  <View style={styles.infoList}>
    <InfoCard
      title="Room Name"
      body={<Text>Add Name</Text>}
      rightIcon="Arrow"
      onRightIconPress={() => {}}
    />
    <InfoCard
      title="Description"
      body={<Text>Add description</Text>}
      rightIcon="Arrow"
      onRightIconPress={() => {}}
    />
    <InfoCard
      title="Price per night"
      body={<Text>Add price</Text>}
      rightIcon="Arrow"
      onRightIconPress={() => {}}
    />
    <InfoCard
      title="Amenities"
      body={<Text>Add amenities</Text>}
      rightIcon="Arrow"
      onRightIconPress={() => {}}
    />
  </View>
);

export const RoomPhotoDetailsScreen = () => {
  const route = useRoute();
  const { imageUrl } = route.params as { imageUrl: string };

  return (
    <SafeAreaView edges={['left', 'right', 'bottom']} style={styles.container}>
      <MediaPreview uri={imageUrl} isVideo={false} duration={undefined} />
      <GenericCard body={<InfoCardList />} />
      <Button
        text="Delete Photo"
        btnStyle="Outline"
        size="Large"
        onPress={() => {}}
        type="Warning"
        state="Default"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  infoList: {
    marginTop: 8,
  },
  deleteButton: {
    marginTop: 24,
    width: '100%',
    alignSelf: 'center',
  },
});
