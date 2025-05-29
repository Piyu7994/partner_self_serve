import React, { useState } from 'react'
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Modal, Image } from 'react-native'
import { Header, Search, DoctorItemGeneral } from '@practo/self-serve'
import { Button } from '../SurgeryOverviewCard/SurgeryOverviewCard'

export interface DoctorManagementViewProps {
  doctorData?: Array<{
    name: string;
    post: string;
    fee?: number;
    experience?: number;
    stories?: number;
    imageUrl: string;    
  }>;
  doctorItem: {
    size: 'Small',
    state: 'Default',
    type: 'Secondary',
    city?: string;
    councilName?: string;
    itemType: "General" | "Search";
    rating?: number;
    registrationNumber?: string;
    status?: "NONE" | "LIVE" | "PENDING TO GO LIVE" | undefined;
    statusBadgeProps?: {
      isUppercase?: boolean;
      label?: string;
      labelType?: string;
      numberLabel?: number;
      showImage?: boolean;
      state?: string;
      type?: string;
    };
    storiesCount?: number;
    videoConsultBadgeProps?: {
      label?: string;
      leftIcon?: boolean;  
      showBorder?: boolean;
      size?: string;
      state?: string;
      type?: string;
    };
  };
}

const DoctorManagementView: React.FC<DoctorManagementViewProps> = ({ doctorData = [], doctorItem }) => {
  const [pageState, setPageState] = useState<'ViewAll' | 'Remove'>('ViewAll')
  const [isRemoveModalVisible, setIsRemoveModalVisible] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);
  const [query, setQuery] = useState(''); 
  const [doctorList, setDoctorList] = useState(doctorData);

  const handleRemoveDoctor = () => {
    if (selectedDoctor) {
      setDoctorList(prevList => prevList.filter(doctor => doctor.name !== selectedDoctor.name));
      setIsRemoveModalVisible(false);
      setSelectedDoctor(null);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Header
          onBackPress={() => {}}
          showBackIcon={true}
          title={pageState === 'ViewAll' ? 'Doctor' : 'Remove Doctor'}
          variant="Screen Header"
        />
        {pageState === 'ViewAll' && (
        <View style={styles.searchContainer}>
          <Search
            onChangeText={(text) => setQuery(text)}
            bgType="White"
            size="Small"
            enableShadow={false}
            enableVoiceSearch={false}
          />
        </View>
        )}
      </View>
      {!query ? (
        <>
          <View style={styles.doctorListContainer}>
            {doctorList.map((doctor, index) => (
              <View key={index} style={styles.doctorCardContainer}>
                {pageState === 'Remove' && (
                  <TouchableOpacity 
                    style={styles.removeIcon}
                    onPress={() => {
                      setSelectedDoctor(doctor);
                      setIsRemoveModalVisible(true);
                    }}
                  >
                    <Text style={styles.removeIconText}>❌</Text>
                  </TouchableOpacity>
                )}
                <DoctorItemGeneral
                  bookBadgeProps={{
                    label: 'Book',
                    leftIcon: false,
                    showBorder: true,
                    size: doctorItem.size,
                    state: doctorItem.state,
                    type: doctorItem.type
                  }}
                  city={doctorItem.city || "Bengaluru"}
                  councilName={doctorItem.councilName}
                  doctorName={doctor.name}
                  experience={doctor.experience}
                  fees={doctor.fee}
                  imageUrl={doctor.imageUrl}
                  itemType={doctorItem.itemType}
                  rating={doctorItem.rating }
                  registrationNumber={doctorItem.registrationNumber}
                  specialities={[
                    'Dentist Surgeon',
                    'Orthodontist'
                  ]}
                  status={doctorItem.status}
                  statusBadgeProps={{
                    isUppercase: doctorItem.statusBadgeProps?.isUppercase,
                    label: doctorItem.statusBadgeProps?.label,
                    labelType: doctorItem.statusBadgeProps?.labelType,
                    numberLabel: doctorItem.statusBadgeProps?.numberLabel,
                    showImage: doctorItem.statusBadgeProps?.showImage,
                    state: doctorItem.statusBadgeProps?.state,
                    type: doctorItem.statusBadgeProps?.type
                  }}
                  storiesCount={doctor.stories}
                  videoConsultBadgeProps={{
                    label: doctorItem.videoConsultBadgeProps?.label,
                    leftIcon: doctorItem.videoConsultBadgeProps?.leftIcon,
                    showBorder: doctorItem.videoConsultBadgeProps?.showBorder,
                    size: doctorItem.videoConsultBadgeProps?.size,
                    state: doctorItem.videoConsultBadgeProps?.state,
                    type: doctorItem.videoConsultBadgeProps?.type
                  }}
                />
              </View>
            ))}
          </View>
          <Modal
            visible={isRemoveModalVisible}
            onRequestClose={() => setIsRemoveModalVisible(false)}
            transparent={true}
            animationType="slide"
          >
            <View style={styles.bottomSheetOverlay}>
              <View style={styles.bottomSheet}>
                {selectedDoctor && (
                  <View style={styles.modalContent}>
                    <Image
                      source={{ uri: selectedDoctor.imageUrl }}
                      style={styles.modalDoctorImage}
                    />
                    <Text style={styles.modalDoctorName}>{selectedDoctor.name} will be removed from Robotic knee replacement surgery</Text>
                  </View>
                )}
                <Button
                  text="Remove"
                  btnStyle="Fill"
                  type="Warning"
                  size="Large"
                  onPress={handleRemoveDoctor}
                  style={{ marginTop: 16 }}
                />
                <Button
                  text="Cancel"
                  btnStyle="Outline"
                  type="Neutral"
                  size="Large"
                  onPress={() => {
                    setIsRemoveModalVisible(false);
                    setSelectedDoctor(null);
                  }}
                  style={{ marginTop: 16 }}
                />
              </View>
            </View>
          </Modal>
        </>
      ) : (
        <>
          <View style={styles.doctorListContainer}>
            {doctorList
              .filter(doctor => doctor.name.toLowerCase().includes(query.toLowerCase()))
              .map((doctor, index) => (
                <View key={index} style={styles.doctorCardContainer}>
                  <DoctorItemGeneral
                    bookBadgeProps={{
                      label: 'Book',
                      leftIcon: false,
                      showBorder: true,
                      size: doctorItem.size,  
                      state: doctorItem.state,
                      type: doctorItem.type
                    }}
                    city={doctorItem.city || "Bengaluru"}
                    councilName={doctorItem.councilName}
                    doctorName={doctor.name}
                    experience={doctor.experience}
                    fees={doctor.fee}
                    imageUrl={doctor.imageUrl}
                    itemType={doctorItem.itemType}
                    rating={doctorItem.rating}
                    registrationNumber={doctorItem.registrationNumber}
                    specialities={[
                      'Dentist Surgeon',
                      'Orthodontist'
                    ]}
                    status={doctorItem.status}
                    statusBadgeProps={{
                      isUppercase: doctorItem.statusBadgeProps?.isUppercase,
                      label: doctorItem.statusBadgeProps?.label,
                      labelType: doctorItem.statusBadgeProps?.labelType,
                      numberLabel: doctorItem.statusBadgeProps?.numberLabel,
                      showImage: doctorItem.statusBadgeProps?.showImage,
                      state: doctorItem.statusBadgeProps?.state,
                      type: doctorItem.statusBadgeProps?.type
                    }}
                    storiesCount={doctor.stories}
                    videoConsultBadgeProps={{
                      label: doctorItem.videoConsultBadgeProps?.label,
                      leftIcon: doctorItem.videoConsultBadgeProps?.leftIcon,
                      showBorder: doctorItem.videoConsultBadgeProps?.showBorder,
                      size: doctorItem.videoConsultBadgeProps?.size,
                      state: doctorItem.videoConsultBadgeProps?.state,
                      type: doctorItem.videoConsultBadgeProps?.type
                    }}
                  />
                </View>
            ))}
          </View>
        </>
      )}
      <View style={pageState === 'ViewAll' ? styles.btnContainer : styles.doneContainer}>
        {pageState === 'ViewAll' ? (
          <>
        <Button
          text="Remove"
          btnStyle="Outline"
          type="Neutral"
          size="Large"
          onPress={() => setPageState('Remove')}
        />
        <Button
          text="Add"
            btnStyle="Fill"
            type="Secondary"
            size="Large"
          />
          </>
        ) :
        <>
        <Button
          onPress={() => setPageState('ViewAll')} 
          text="Done"
          btnStyle="Fill"
          type="Secondary"
          size="Large"
        />
        </>}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
  headerContainer: {
    height: 'auto',
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingBottom: 12,
    paddingLeft: 8,
    paddingRight: 12,
    gap: 10
  },
  searchContainer: {
    width: '94%',
    alignSelf: 'center',
    borderRadius: 16,
    backgroundColor: '#fff',
  },
  doctorListContainer: {
    padding: 16,
    gap: 10
  },
  btnContainer: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#fff'
  },
  doneContainer: {
    padding: 15,
    backgroundColor: '#fff'
  },
  doctorCardContainer: {
    position: 'relative',
  },
  removeIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#FEE2E2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeIconText: {
    fontSize: 14,
    width: 14,
    height: 14,
    textAlign: 'center',
    lineHeight: 14,
  },
  bottomSheetOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  bottomSheet: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 24,
    height: 'auto',
    width: '100%',
    shadowColor: '#000',
  },
  modalDoctorImage: {
    width: 40,
    height: 40,
    borderRadius: 10,
    marginBottom: 12,
  },
  modalDoctorName: {
    fontFamily: 'Lato',
    fontWeight: 700,
    fontSize: 15,
    lineHeight: 18,
    letterSpacing: -0.16,
    marginBottom: 12
  },
  modalContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginTop: 15,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 20
  }
})

export default DoctorManagementView;
