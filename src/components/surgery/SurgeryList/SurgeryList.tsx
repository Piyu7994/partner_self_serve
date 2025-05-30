import React, {memo} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {SurgeryCard} from '@practo/self-serve';
import { Loader } from '@practo/self-serve';

interface AlertBox {
  title: string;
  description: string;
}

interface PriceRange {
  min: number;
  max: number;
  currency: string;
}

interface SurgeryItem {
  title: string;
  price?: PriceRange;
  patient_stories_count: number;
  photo_count: number;
  video_count: number;
  alert_box?: AlertBox;
}

interface SurgeryListProps {
  surgeryListData: SurgeryItem[];
}

const getPriceRange = (priceData: PriceRange): string => {
  const {min, max, currency} = priceData;
  return min && max ? `${currency}${min} - ${currency}${max}` : '';
};

const SurgeryCardWrapper = memo(({item}: {item: SurgeryItem}) => {
  const alertBoxData = item.alert_box
    ? {
        CTA: false,
        description: item.alert_box.description,
        priority: 'Secondary',
        rightAction: false,
        state: 'Error',
        title: item.alert_box.title,
      }
    : undefined;

  const surgeryItemData = {
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/2922/2922510.png',
    patientStoriesCount: item.patient_stories_count,
    photosCount: item.photo_count,
    priceRange: item.price ? getPriceRange(item.price) : '',
    title: item.title,
    videosCount: item.video_count,
  };

  return (
    <View style={styles.cardWrapper}>
      <SurgeryCard
        alertBoxData={alertBoxData}
        onPress={() => {}}
        surgeryItemData={surgeryItemData}
      />
    </View>
  );
});

const SurgeryList = ({surgeryListData}: SurgeryListProps) => {
  //TODO: Add onPress handler to redirect to surgery details page
  const renderItem = ({item}: {item: SurgeryItem}) => (
    <SurgeryCardWrapper item={item} />
  );

  const ListFooterComponent = () => (
    <View style={styles.loaderContainer}>
      <Loader size={40} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={surgeryListData}
        keyExtractor={(_, idx) => idx.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={ListFooterComponent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 12,
  },
  cardWrapper: {
    marginBottom: 12,
  },
  loaderContainer: {
    paddingVertical: 16,
    alignItems: 'center',
  },
});

export default SurgeryList;
