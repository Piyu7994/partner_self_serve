import React, {memo} from 'react';
import {
  Search,
  Button,
  ListItemWithControl,
  NoResultFoundBox,
} from '@practo/self-serve';
import {View, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

interface SpecialityItem {
  id: string;
  label: string;
  icon_url: string;
  isSelected: boolean;
}

interface SpecialityListItemProps {
  item: SpecialityItem;
  isSelected: boolean;
  onSelect: () => void;
  showItemRightIcon?: boolean;
}

interface SpecialityListWithSearchProps {
  specialityListData: SpecialityItem[];
  onSpecialityButtonClick?: (
    specialityId: string,
    specialityLabel: string,
  ) => void;
  showButton?: boolean;
  showItemRightIcon?: boolean;
  setSearchQuery: (query: string) => void;
  selectedSpeciality: {
    id: string;
    label: string;
  } | null;
  handleSelect: (id: string, label: string) => void;
  filteredSpecialities: SpecialityItem[];
}

const SpecialityListItem = memo(
  ({
    item,
    isSelected,
    onSelect,
    showItemRightIcon,
  }: SpecialityListItemProps) => (
    <TouchableOpacity style={styles.listItemContainer}>
      <ListItemWithControl
        showBorder={false}
        imageUrl={item.icon_url}
        label={item.label}
        radioProps={{
          action: 'Left',
          showHeading: false,
          showDescription: false,
          size: 'Large',
          state: isSelected ? 'Checked' : 'Default',
          type: 'Neutral',
        }}
        onItemClick={onSelect}
        showRadio={showItemRightIcon}
        showCheckbox={false}
      />
    </TouchableOpacity>
  ),
);

const SpecialityListWithSearch = ({
  onSpecialityButtonClick,
  showButton = true,
  showItemRightIcon = true,
  setSearchQuery,
  selectedSpeciality,
  handleSelect,
  filteredSpecialities,
}: SpecialityListWithSearchProps) => {
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
      data={filteredSpecialities}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.listContent}
      renderItem={({item}) => (
        <SpecialityListItem
          item={item}
          isSelected={selectedSpeciality?.id === item.id}
          onSelect={() => handleSelect(item.id, item.label)}
          showItemRightIcon={showItemRightIcon}
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
        state={selectedSpeciality ? 'Default' : 'Disabled'}
        text="Continue"
        type="Secondary"
        onPress={() =>
          selectedSpeciality &&
          onSpecialityButtonClick?.(
            selectedSpeciality.id,
            selectedSpeciality.label,
          )
        }
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

      {/* List of specialities */}
      <View style={styles.listContainer}>
        {filteredSpecialities.length === 0 ? renderNoResults() : renderList()}
      </View>

      {/* Bottom button */}
      {showButton && renderButton()}
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
  listItemContainer: {
    marginBottom: 8,
  },
});

export {SpecialityListWithSearch};
