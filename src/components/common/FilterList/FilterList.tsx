import React from 'react';
import {View, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import {Chip} from '@practo/self-serve';

interface FilterItem {
  label: string;
  isSelected: boolean;
  onViewAllPillClick?: () => void;
}

interface FilterListProps {
  filterListData: FilterItem[];
  onPillClick: (index: number) => void;
}

export function FilterList({filterListData, onPillClick}: FilterListProps) {
  
  const renderFilterItem = (filter: FilterItem, index: number) => {
    const isLastItem = index === filterListData.length - 1;
    const handlePress = () => {
      if (isLastItem) {
        filter.onViewAllPillClick?.();
      } else {
        onPillClick(index);
      }
    };

    return (
      <TouchableOpacity
        key={`${filter.label}-${index}`}
        onPress={handlePress}
        style={styles.filterItem}>
        <Chip
          chipType={filter.isSelected ? 'Primary' : 'Secondary'}
          defaultLabel={filter.label}
          defaultSubLabel=""
          leftIcon={false}
          size="Large"
          state="General"
          type="Tertiary"
        />
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scrollView}>
      <View style={styles.container}>
        {filterListData && filterListData.map(renderFilterItem)}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    marginRight: -12,
    paddingVertical: 8,
  },
  container: {
    flexDirection: 'row',
    gap: 8,
    backgroundColor: '#fff',
  },
  filterItem: {
    marginRight: 8,
  },
});
