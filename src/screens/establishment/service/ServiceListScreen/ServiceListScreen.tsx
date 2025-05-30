/**
 * @description Level-1 Screen of Service/Surgery Flow.
 */

import React, {useState, useEffect} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Search, Button, Snackbar} from '@practo/self-serve';
import BottomSheet from '../../../../containers/common/BottomSheet/BottomSheetContainer';
import FilterListContainer from '../../../../containers/common/FilterList/FilterListContainer';
import SurgeryListContainer from '../../../../containers/surgery/SurgeryList/SurgeryListContainer';
import SpecialityListContainer from '../../../../containers/common/SpecialityList/SpecialityListContainer';
import SurgeryListWithSearchContainer from '../../../../containers/surgery/SurgeryListWithSearch/SurgeryListWithSearchContainer';
import {SURGERY_LIST_SCREEN_BOTTOM_SHEET_STEPS} from '../../../../constants/surgery/surgeryListScreen';

interface Speciality {
  id: string;
  label: string;
}

const ServiceListScreen = () => {
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [specialityToFilterBy, setSpecialityToFilterBy] =
    useState<Speciality | null>(null);
  const [currentBottomSheetStep, setcurrentBottomSheetStep] = useState<
    'SPECIALITY_SELECTION' | 'SURGERY_SELECTION' | 'FILTER_BY_SPECIALITY'
  >('SPECIALITY_SELECTION');
  const [selectedSpeciality, setSelectedSpeciality] =
    useState<Speciality | null>(null);
  const [selectedSurgeries, setSelectedSurgeries] = useState<Set<string>>(
    new Set(),
  );

  const handleSpecialitySelect = (
    specialityId: string,
    specialityLabel: string,
  ) => {
    setSelectedSpeciality({id: specialityId, label: specialityLabel});
    setcurrentBottomSheetStep('SURGERY_SELECTION');
  };

  const handleSurgerySelect = (surgeries: Set<string>) => {
    setSelectedSurgeries(surgeries);
    setBottomSheetVisible(false);
    setcurrentBottomSheetStep('SPECIALITY_SELECTION');
    setSelectedSpeciality(null);
    setSnackbarVisible(true);
  };

  const handleBottomSheetClose = () => {
    setBottomSheetVisible(false);
    setcurrentBottomSheetStep('SPECIALITY_SELECTION');
    setSelectedSpeciality(null);
  };

  useEffect(() => {
    if (snackbarVisible) {
      const timer = setTimeout(() => {
        setSnackbarVisible(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [snackbarVisible]);

  const getBottomSheetTitle = () => {
    switch (currentBottomSheetStep) {
      case SURGERY_LIST_SCREEN_BOTTOM_SHEET_STEPS.SPECIALITY_SELECTION:
        return 'Select Speciality';
      case SURGERY_LIST_SCREEN_BOTTOM_SHEET_STEPS.SURGERY_SELECTION:
        return `Add ${selectedSpeciality?.label} surgeries/treatments`;
      case SURGERY_LIST_SCREEN_BOTTOM_SHEET_STEPS.FILTER_BY_SPECIALITY:
        return 'Filter by Speciality';
      default:
        return 'Select Speciality';
    }
  };

  const handleFilterBySpecialitySelect = (
    specialityId: string,
    specialityLabel: string,
  ) => {
    setSpecialityToFilterBy({id: specialityId, label: specialityLabel});
    setcurrentBottomSheetStep('SPECIALITY_SELECTION');
    setBottomSheetVisible(false);
  };

  const openFilterBySpecialityBottomSheet = () => {
    setcurrentBottomSheetStep('FILTER_BY_SPECIALITY');
    setBottomSheetVisible(true);
  };

  const renderSearchSection = () => (
    <View style={styles.searchContainer}>
        <Search
          bgType="Grey"
          size="Small"
          enableShadow={false}
          enableVoiceSearch={false}
        />
      <FilterListContainer
        onViewAllPillClick={openFilterBySpecialityBottomSheet}
      />
    </View>
  );

  const renderBottomSheetContent = () => {
    switch (currentBottomSheetStep) {
      case SURGERY_LIST_SCREEN_BOTTOM_SHEET_STEPS.SPECIALITY_SELECTION:
        return (
          <SpecialityListContainer
            onSpecialityButtonClick={handleSpecialitySelect}
          />
        );
      case SURGERY_LIST_SCREEN_BOTTOM_SHEET_STEPS.SURGERY_SELECTION:
        return (
          <SurgeryListWithSearchContainer
            onSurgeriesSelect={handleSurgerySelect}
          />
        );
      case SURGERY_LIST_SCREEN_BOTTOM_SHEET_STEPS.FILTER_BY_SPECIALITY:
        return (
          <SpecialityListContainer
            onItemClick={handleFilterBySpecialitySelect}
            showButton={false}
            showItemRightIcon={false}
          />
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView edges={['left', 'right', 'bottom']} style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderSearchSection()}

        {/* Surgery card List */}
        <View style={styles.surgeryListContainer}>
          <SurgeryListContainer />
        </View>

        <BottomSheet
          visible={bottomSheetVisible}
          onClose={handleBottomSheetClose}
          title={getBottomSheetTitle()}>
          {renderBottomSheetContent()}
        </BottomSheet>
      </ScrollView>

      {snackbarVisible && (
        <View style={styles.snackbarContainer}>
          <Snackbar
            Icon
            Snackbar_Types="Natural"
            label=""
            message={`${selectedSurgeries.size} surgeries/treatments added successfully`}
          />
        </View>
      )}

      <View style={styles.addButtonContainer}>
        <Button
          btnStyle="Fill"
          size="Large"
          state="Default"
          text="Add surgery/treatment"
          type="Secondary"
          onPress={() => setBottomSheetVisible(true)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  surgeryListContainer: {
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 12,
  },
  snackbarContainer: {
    height: 60,
    paddingHorizontal: 12,
    paddingBottom: 8,
  },
  addButtonContainer: {
    padding: 12,
  },
});

export default ServiceListScreen;
