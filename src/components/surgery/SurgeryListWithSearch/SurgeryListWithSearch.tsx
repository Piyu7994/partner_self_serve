import React, {memo} from 'react';
import {
  Search,
  Button,
  ListItemWithControl,
  NoResultFoundBox,
} from '@practo/self-serve';
import {View, FlatList, StyleSheet} from 'react-native';

interface SurgeryItem {
  id: string;
  label: string;
  icon_url: string;
  isSelected: boolean;
}

interface SurgeryListItemProps {
  item: SurgeryItem;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

interface SurgeryListWithSearchProps {
  surgeryListData: SurgeryItem[];
  onSurgeriesSelect: (surgeries: Set<string>) => void;
  setSearchQuery: (query: string) => void;
  selectedSurgeries: Set<string>;
  handleSurgerySelect: (id: string) => void;
}

const SurgeryListItem = memo(
  ({item, isSelected, onSelect}: SurgeryListItemProps) => (
    <ListItemWithControl
      checkboxProps={{
        action: 'Left',
        description: item.label,
        label: item.label,
        showDescription: false,
        showHeading: false,
        size: 'Large',
        state: isSelected ? 'Checked' : 'Default',
        type: 'Neutral',
      }}
      imageUrl={item.icon_url}
      label={item.label}
      showBorder={false}
      showCheckbox
      onItemClick={() => onSelect(item.id)}
    />
  ),
);

export const SurgeryListWithSearch = ({
  surgeryListData,
  onSurgeriesSelect,
  setSearchQuery,
  selectedSurgeries,
  handleSurgerySelect,
}: SurgeryListWithSearchProps) => {
    
  const renderNoResults = () => (
    <View style={styles.noResultsContainer}>
      <NoResultFoundBox
        subtitle="We can't find any matching doctors for your search."
        title="No results found"
      />
    </View>
  );

  const renderList = () => (
    <FlatList
      data={surgeryListData}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.listContent}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      renderItem={({item}) => (
        <SurgeryListItem
          item={item}
          isSelected={selectedSurgeries.has(item.id)}
          onSelect={handleSurgerySelect}
        />
      )}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    />
  );

  const renderButton = () => (
    <View style={styles.buttonContainer}>
      <Button
        btnStyle="Fill"
        size="Large"
        state={selectedSurgeries.size > 0 ? 'Default' : 'Disabled'}
        text={`Add (${selectedSurgeries.size})`}
        type="Secondary"
        onPress={() => onSurgeriesSelect(selectedSurgeries)}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Search bar */}
      <Search
        bgType="White"
        size="Small"
        enableShadow={false}
        enableVoiceSearch={false}
        onChangeText={setSearchQuery}
      />

      {/* List of surgeries */}
      <View style={styles.listContainer}>
        {surgeryListData.length === 0 ? renderNoResults() : renderList()}
      </View>

      {/* Bottom button */}
      {renderButton()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#fff',
    gap: 20,
  },
  listContainer: {
    height: '80%',
  },
  listContent: {
    backgroundColor: '#fff',
    paddingBottom: 100,
  },
  noResultsContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  buttonContainer: {
    padding: 12,
    height: 80,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  separator: {
    height: 1,
    backgroundColor: '#F3F4F6',
    marginLeft: 16,
  },
});
