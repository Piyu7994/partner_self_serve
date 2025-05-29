import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
  KeyboardAvoidingView,
} from 'react-native';
import {colors} from '../../theme/color';
import {SafeAreaView} from 'react-native-safe-area-context';
import React, { useEffect, useState } from 'react';

import {
  Address,
  AboutUsFee,
  CurrentLocationCTA,
  HolidayWithToggleCard,
  TimingWithDays,
  AboutUsTiming,
  DoctorDisplayPicture,
  AvailabilityDetailWithToggleItem,
  ConsultationDetailCard,
  DoctorItemCard,
  DoctorStatusCard,
  NoDoctorMatchCard,
  Alert,
  Badge,
  Checkbox,
  Chip,
  Header,
  Input,
  Radio,
  Search,
  Snackbar,
  Tags,
  ToggleButton,
  Loader,
  DeleteBottomSheet,
  FeeInputBox,
  GenericBottomSheet,
  TransparentPill,
  NoResultFoundBox,
  GenericCard,
  GenericList,
  MediaTile,
  InfoCard,
  ListItemWithControl,
  ImageUploadComponent,
  ImagePreview,
  AddLogo,
  MediaCollectionTile,
  SurgeryCard,
  SurgeryItem,
  Button,
  Divider,
  ConfirmationBottomSheet,
  DoctorDraftCard,
  DoctorInfoBottomSheet,
  DoctorItemGeneral,
  WeekSession,
} from '@practo/self-serve';
import { ConfirmationBS } from './ConfirmationBS';
import { DeleteBS } from './DeleteBS';
import { GenericBS } from './GenericBS';
import { DrBS } from './DrBS';

const L0_Screen: React.FC = () => {

  return (
    <SafeAreaView edges={['left', 'right', 'bottom']} style={{flex: 1}}>
      <StatusBar />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          paddingHorizontal: 16,
          paddingTop: 72,
          backgroundColor: "#F3F4F6"
        }}>
          {/*Atoms*/}
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.heading}>Atoms</Text>
            <Divider style={{ height: 2 }} color='#D1D5DB'/>
          </View>
          <View style={styles.subContainer}>
            {/*Alert*/}
            <View style={styles.compContainer}>
            <View>
                <Text style={styles.subheading}>Alert</Text>
                <Divider color='#D1D5DB'/>
              </View>
              <Alert
                title="A title for the Alert"
                description="This is just the subtitle of the Alert."
                leftIcon
                leftIconType="Info"
                priority="Secondary"
                state="Accent"
              />
            </View>

            {/*Badge*/}
            <View style={styles.compContainer}>
            <View>
                <Text style={styles.subheading}>Badge</Text>
                <Divider color='#D1D5DB'/>
              </View>
              <Badge
                isUppercase
                label="General"
                labelType="Text"
                state="Success"
                type="Primary"
              />
            </View>

            {/*Button*/}
            <View style={styles.compContainer}>
            <View>
                <Text style={styles.subheading}>Button</Text>
                <Divider color='#D1D5DB'/>
              </View>
              <Button
                btnStyle="Fill"
                size="Medium"
                state="Default"
                text="Add Doctor"
                type="Secondary"
              />
            </View>
            
            {/*Checkbox*/}
            <View style={styles.compContainer}>
              <View>
                <Text style={styles.subheading}>Checkbox</Text>
                <Divider color='#D1D5DB'/>
              </View>
              <Checkbox
                action="Left"
                description="Please read our terms before proceeding"
                showHeading
                label="Accept terms and conditions"
                showDescription
                size="Large"
                type="Neutral"
                state='Default'
                handleClick={true}
              />
            </View>

            {/*Chip*/}
            <View style={styles.compContainer}>
            <View>
                <Text style={styles.subheading}>Chip</Text>
                <Divider color='#D1D5DB'/>
              </View>
              <View style={{ alignSelf: 'center' }}>
                <Chip
                  chipType="Primary"
                  contains="Text"
                  defaultLabel="Speciality"
                  defaultNumber={0}
                  defaultSubLabel=""
                  size="Large"
                  state="Success"
                  type="Secondary"
                  leftIcon={false}
                />
              </View>
            </View>

            {/*Header*/}
            <View style={styles.compContainer}>
            <View>
                <Text style={styles.subheading}>Header</Text>
                <Divider color='#D1D5DB'/>
              </View>
              <View style={{backgroundColor: 'white', padding: 4}}>
                <Header
                  onBackPress={() => {}}
                  showBackIcon
                  subtext="Subtext"
                  title="Title"
                  variant="Screen Header"
                />
              </View>
            </View>

            {/*Input*/}
            <KeyboardAvoidingView>
              <View style={styles.compContainer}>
                <View>
                  <Text style={styles.subheading}>Input</Text>
                  <Divider color='#D1D5DB'/>
                </View>
                <Input
                  helperState="Default"
                  isLabelMandatory
                  rightActionType="Cross"
                  showHelperField
                  showHelperIcon
                  showLabel
                  showRightButton
                  showTextCount
                  state="Default"
                  type="Text"
                  disableRightAction={false}
                />
              </View>
            </KeyboardAvoidingView>

            {/*Radio*/}
            <View style={styles.compContainer}>
              <View>
                <Text style={styles.subheading}>Radio</Text>
                <Divider color='#D1D5DB'/>
              </View>
          
                <Radio
                  action="Left"
                  description="More details about this option"
                  heading
                  label="Select this option"
                  showDescription
                  size="Small"
                  state="Default"
                  type="Neutral"
                  handleClick={true}
                />
            
            </View>

            {/*Search*/}
            <View style={styles.compContainer}>
              <View>
                <Text style={styles.subheading}>Search</Text>
                <Divider color='#D1D5DB'/>
              </View>
              <Search
                bgType='Grey'
                size="Small"
                enableShadow={false}
                enableVoiceSearch={false}
              />
            </View>

            {/*Snackbar*/}
            <View style={styles.compContainer}>
              <View>
                <Text style={styles.subheading}>Snackbar</Text>
                <Divider color='#D1D5DB'/>
              </View>
              <View style={{ alignSelf: 'center' }}>
                <Snackbar
                  Icon
                  Snackbar_Types="Natural"
                  TextButton
                  label=""
                  message="A thing happened"
                />
              </View>
            </View>

            {/*Tags*/}
            <View style={styles.compContainer}>
              <View>
                <Text style={styles.subheading}>Tag</Text>
                <Divider color='#D1D5DB'/>
              </View>
              <View style={{ alignSelf: 'center' }}>
                <Tags
                  label="A Tag"
                  size="Large"
                  state="Pending"
                  type="Primary"
                />
              </View>
            </View>

            {/*Toggle Button*/}
            <View style={styles.compContainer}>
              <View>
                <Text style={styles.subheading}>Toggle Button</Text>
                <Divider color='#D1D5DB'/>
              </View>
              <View style={{ alignSelf: 'center' }}>
                <ToggleButton
                  os='Android'
                  showIcon
                  size="Large"
                  handleClick={true}
                />
              </View>
            </View>
          </View>

          <View style={{ marginTop: 96 }}></View>

          {/*About Us*/}
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.heading}>About Us</Text>
            <Divider style={{ height: 2 }} color='#D1D5DB'/>
          </View>
          <View style={styles.subContainer}>
            {/*Fee Section*/}
            <View style={styles.compContainer}>
              <View>
                <Text style={styles.subheading}>Fee Section</Text>
                <Divider color='#D1D5DB'/>
              </View>
              <AboutUsFee
                fee=""
                feeTitle="Registration fee for new patients (₹)"
                paymentModes="Paytm, BHIM UPI, Net Banking"
                paymentModesTitle="Modes of payment accepted"
                title="Payments & Fees"
              />
            </View>

            {/*Timing Section*/}
            <View style={styles.compContainer}>
              <View>
                <Text style={styles.subheading}>Timing Section</Text>
                <Divider color='#D1D5DB'/>
              </View>
              <AboutUsTiming
                days1="Monday - Saturday"
                days2="Monday - Saturday"
                slot1a="10:00 AM - 8PM"
                slot1b="10:00 AM - 8PM"
                slot2a="10:00 AM - 8PM"
                slot2b="10:00 AM - 8PM"
                title="Timings"
              />
            </View>

            {/*Address Section*/}
            <View style={styles.compContainer}>
              <View>
                <Text style={styles.subheading}>Address Section</Text>
                <Divider color='#D1D5DB'/>
              </View>
              <Address
                address="Vishal Patil Clinic, 154/11, Bannerghatta Road,
                        Landmark: Opposite IIM,
                        Bangalore"
                imageUrl="https://i.ibb.co/67wgTzcL/image-1.png"
              />
            </View>

            {/*Current Location Section*/}
            <View style={styles.compContainer}>
              <View>
                <Text style={styles.subheading}>Current Location Section</Text>
                <Divider color='#D1D5DB'/>
              </View>
              <CurrentLocationCTA
                leftIconEnabled
                onLocationCTAPress={() => {}}
                rightIconEnabled
                title="Use Current Location"
              />
            </View>

            {/*Times (With Days) Section*/}
            <View style={styles.compContainer}>
              <View>
                <Text style={styles.subheading}>Times (With Days) Section</Text>
                <Divider color='#D1D5DB'/>
              </View>
              <View style={{ alignSelf: 'center' }}>
                <TimingWithDays
                  days="Mon - Sat"
                  slot1="09:00 am - 01:00 pm"
                  slot2="03:00 pm - 09:00 pm"
                />
              </View>
            </View>
          </View>

          <View style={{ marginTop: 96 }}></View>

          {/*Doctor*/}
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.heading}>Doctor</Text>
            <Divider style={{ height: 2 }} color='#D1D5DB'/>
          </View>
          <View style={styles.subContainer}>
            {/*Doctor Availability*/}
            <View style={styles.compContainer}>
              <View>
                <Text style={styles.subheading}>Doctor Availability</Text>
                <Divider color='#D1D5DB'/>
              </View>
              <AvailabilityDetailWithToggleItem
                onToggleButtonPress={() => {}}
                subtitle="Turn OFF to indicate the doctor is now available for consultation."
                title="Doctor on holiday"
                toggleButtonState="Disabled"
              />
            </View>

            {/*Consultation Detail Card*/}
            <View style={styles.compContainer}>
              <View>
                <Text style={styles.subheading}>Consultation Detail Card</Text>
                <Divider color='#D1D5DB'/>
              </View>
              <ConsultationDetailCard
                onPress={() => {}}
                rightIconEnabled
                title="Consultation fee"
                children={<><Text>A Sample Text</Text></>}
              />
            </View>

            {/*Display Picture*/}
            <View style={styles.compContainer}>
              <View>
                <Text style={styles.subheading}>Display Picture</Text>
                <Divider color='#D1D5DB'/>
              </View>
              <View style={{padding: 8}}>
                <DoctorDisplayPicture imageUrl="https://ik.imagekit.io/98u12ijfs/Profile%20image.png?updatedAt=1747904648547" />
              </View>
            </View>

            {/*Doctor Draft Card*/}
            <View style={styles.compContainer}>
              <View>
                <Text style={styles.subheading}>Doctor Draft Card</Text>
                <Divider color='#D1D5DB'/>
              </View>
              <DoctorDraftCard
                badgeProps={{
                  isUppercase: true,
                  label: 'DRAFT',
                  labelType: 'Text',
                  numberLabel: 100,
                  showImage: false,
                  state: 'General',
                  type: 'Secondary'
                }}
                buttonProps={{
                  btnStyle: 'Outline',
                  enableLeftIcon: false,
                  enableRightIcon: false,
                  size: 'Medium',
                  state: 'Default',
                  text: 'Complete Profile',
                  type: 'Primary'
                }}
                imageUrl="https://randomuser.me/api/portraits/women/44.jpg"
                name="Dr. Aditi P. Ramachandran"
                regNo="TN/12345/2020"
                specialities={[
                  'Dentist Surgeon',
                  'Orthodontist'
                ]}
                status="DRAFT"
              />
            </View>

            {/*Doctor Info BottomSheet*/}
            <View style={styles.compContainer}>
              <View>
                <Text style={styles.subheading}>Doctor Info BottomSheet</Text>
                <Divider color='#D1D5DB'/>
              </View>
              <DrBS />
            </View>

            {/*Doctor Item Card*/}
            <View style={styles.compContainer}>
              <View>
                <Text style={styles.subheading}>Doctor Item Card</Text>
                <Divider color='#D1D5DB'/>
              </View>
              <DoctorItemCard
                alertProps={{
                  CTA: false,
                  description: 'This could lead to fewer consultations',
                  label: 'Book Appointment',
                  leftIcon: true,
                  leftIconType: 'Info',
                  priority: 'Secondary',
                  rightAction: false,
                  state: 'Error',
                  title: 'Consultation Fee is missing'
                }}
                doctorItemProps={{
                  bookAvailable: true,
                  bookBadgeProps: {
                    label: 'Book',
                    leftIcon: false,
                    showBorder: true,
                    size: 'Medium',
                    state: 'Brand',
                    type: 'Secondary'
                  },
                  city: 'Bengaluru',
                  councilName: 'Tamil Nadu Medical Council',
                  doctorName: 'Dr. Aditi P. Ramachandran',
                  experience: 18,
                  fees: 400,
                  imageUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
                  itemType: 'General',
                  registrationNumber: 'TN/12345/2020',
                  showChevron: false,
                  specialities: [
                    'Dentist Surgeon',
                    'Orthodontist'
                  ],
                  status: 'NONE',
                  statusBadgeProps: {
                    isUppercase: true,
                    label: 'LIVE',
                    labelType: 'Text',
                    numberLabel: 100,
                    showImage: false,
                    state: 'Success',
                    type: 'Secondary'
                  },
                  storiesCount: 120,
                  videoConsultAvailable: true,
                  videoConsultBadgeProps: {
                    label: 'Video Consult',
                    leftIcon: false,
                    showBorder: true,
                    size: 'Medium',
                    state: 'Brand',
                    type: 'Secondary'
                  }
                }}
              />
            </View>

            {/*Doctor Item General*/}
            <View style={styles.compContainer}>
              <View>
                <Text style={styles.subheading}>Doctor Item General</Text>
                <Divider color='#D1D5DB'/>
              </View>
              <DoctorItemGeneral
                bookAvailable
                bookBadgeProps={{
                  label: 'Book',
                  leftIcon: false,
                  showBorder: true,
                  size: 'Small',
                  state: 'Default',
                  type: 'Secondary'
                }}
                city="Bengaluru"
                councilName="Tamil Nadu Medical Council"
                doctorName="Dr. Aditi P. Ramachandran"
                experience={18}
                fees={400}
                imageUrl="https://randomuser.me/api/portraits/women/44.jpg"
                itemType="General"
                rating={0.86}
                registrationNumber="TN/12345/2020"
                specialities={[
                  'Dentist Surgeon',
                  'Orthodontist'
                ]}
                status="NONE"
                statusBadgeProps={{
                  isUppercase: true,
                  label: 'LIVE',
                  labelType: 'Text',
                  numberLabel: 100,
                  showImage: false,
                  state: 'Success',
                  type: 'Secondary'
                }}
                storiesCount={120}
                videoConsultAvailable
                videoConsultBadgeProps={{
                  label: 'Video Consult',
                  leftIcon: false,
                  showBorder: true,
                  size: 'Small',
                  state: 'Default',
                  type: 'Secondary'
                }}
              />
            </View>

            {/*Doctor Status Card*/}
            <View style={styles.compContainer}>
              <View>
                <Text style={styles.subheading}>Doctor Status Card</Text>
                <Divider color='#D1D5DB'/>
              </View>
              <DoctorStatusCard
                alertProps={{
                  CTA: false,
                  description: 'This may take upto 48 hours to complete meanwhile add other details',
                  label: 'Book Appointment',
                  leftIcon: true,
                  leftIconType: 'Info',
                  priority: 'Secondary',
                  rightAction: false,
                  state: 'Accent',
                  title: 'Profile is under review'
                }}
                doctorItemProps={{
                  bookAvailable: true,
                  bookBadgeProps: {
                    label: 'Book',
                    leftIcon: false,
                    showBorder: true,
                    size: 'Medium',
                    state: 'Brand',
                    type: 'Secondary'
                  },
                  city: 'Bengaluru',
                  councilName: 'Tamil Nadu Medical Council',
                  doctorName: 'Dr. Aditi P. Ramachandran',
                  experience: 18,
                  fees: 400,
                  imageUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
                  itemType: 'General',
                  rating: 0.86,
                  registrationNumber: 'TN/12345/2020',
                  showBorder: true,
                  showChevron: false,
                  showInfo: false,
                  specialities: [
                    'Dentist Surgeon',
                    'Orthodontist'
                  ],
                  status: 'NONE',
                  statusBadgeProps: {
                    isUppercase: true,
                    label: 'LIVE',
                    labelType: 'Text',
                    numberLabel: 100,
                    showImage: false,
                    state: 'Success',
                    type: 'Secondary'
                  },
                  storiesCount: 120,
                  videoConsultAvailable: true,
                  videoConsultBadgeProps: {
                    label: 'Video Consult',
                    leftIcon: false,
                    showBorder: true,
                    size: 'Medium',
                    state: 'Brand',
                    type: 'Secondary'
                  }
                }}
                showAlert
              />
            </View>

            {/*Fee Box Section*/}
            <View style={styles.compContainer}>
              <View>
                <Text style={styles.subheading}>Fee Box Section</Text>
                <Divider color='#D1D5DB'/>
              </View>
              <FeeInputBox
                onPress={() => {}}
                subTitle="Add fee"
                title="Hospital appointment"
                type="Primary"
              />
            </View>

            {/*Doctor Availability Card*/}
            <View style={styles.compContainer}>
              <View>
                <Text style={styles.subheading}>Doctor Availability Card</Text>
                <Divider color='#D1D5DB'/>
              </View>
              <HolidayWithToggleCard
                cardDetails={{
                  onDateSectionPress: () => {},
                  onToggleButtonPress: () => {},
                  subtitle: 'Turn OFF to indicate the doctor is now available for consultation.',
                  title: 'Doctor on holiday',
                  toggleButtonState: 'Disabled'
                }}
                fromDate="11-06-2024"
                onDateSectionPress={() => {}}
                toDate="26-06-2024"
              />
            </View>

            {/*No Doctor Match Card*/}
            <View style={styles.compContainer}>
              <View>
                <Text style={styles.subheading}>No Doctor Match Card</Text>
                <Divider color='#D1D5DB'/>
              </View>
              <NoDoctorMatchCard
                leftIconEnabled
                onPress={() => {}}
                rightIconEnabled
                subtitle="Create new doctor profile"
                title="None of the above?"
              />
            </View>

            {/*Week Session Section*/}
            <View style={styles.compContainer}>
              <View>
                <Text style={styles.subheading}>Week Session Section</Text>
                <Divider color='#D1D5DB'/>
              </View>
              <WeekSession
                days={[
                  {
                    day: 'Monday-Friday',
                    onAddSession: () => {},
                    sessions: [
                      {
                        description: 'Hospital appointment & Video Consultation',
                        time: '09:00 am to 01:00 pm'
                      },
                      {
                        description: 'Follow-up appointments',
                        time: '02:00 pm to 05:00 pm'
                      }
                    ]
                  },
                  {
                    day: 'Saturday',
                    onAddSession: () => {},
                    sessions: [
                      {
                        description: 'Hospital appointment & Video Consultation',
                        time: '09:00 am to 01:00 pm'
                      }
                    ]
                  },
                  {
                    day: 'Sunday',
                    onAddSession: () => {},
                    sessions: []
                  }
                ]}
              />
            </View>
            
          </View>

          {/*Media*/}
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.heading}>Media</Text>
            <Divider style={{ height: 2 }} color='#D1D5DB'/>
          </View>
          <View style={styles.subContainer}>
            {/*Add Logo*/}
            <View style={styles.compContainer}>
              <View>
                <Text style={styles.subheading}>Add Logo</Text>
                <Divider color='#D1D5DB'/>
              </View>
              <AddLogo
                borderRadius={16}
                containerWidth="70%"
                imageUri="https://picsum.photos/200/300"
                logoSize={100}
                subtitle="Upload a 100x100 px image for your logo"
                title="Add New Logo"
                verticalAlignment="Center"
              />
            </View>

            {/*Image Preview*/}
            <View style={styles.compContainer}>
              <View>
                <Text style={styles.subheading}>Image Preview</Text>
                <Divider color='#D1D5DB'/>
              </View>
              <ImagePreview
                imageUri="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
                title="Registration proof"
              />
            </View>

            {/*Image Upload*/}
            <View style={styles.compContainer}>
              <View>
                <Text style={styles.subheading}>Image Upload</Text>
                <Divider color='#D1D5DB'/>
              </View>
              <ImageUploadComponent
                cardProps={{
                  style: {
                    margin: 16
                  }
                }}
                headerVariant="Screen Header"
                images={[
                  {
                    thumbnailUri: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
                    title: 'IMG_123489.JPG',
                    variant: 'Detailed'
                  },
                  {
                    thumbnailUri: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
                    title: 'IMG_123490.JPG',
                    variant: 'Detailed'
                  },
                  {
                    thumbnailUri: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png0',
                    title: 'IMG_123491.JPG',
                    variant: 'Detailed'
                  },
                  {
                    thumbnailUri: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
                    title: 'IMG_123492.JPG',
                    variant: 'Detailed'
                  }
                ]}
                mediaTileListProps={{
                  numColumns: 4
                }}
                onUploadPress={() => {}}
                subtitle="JPEG, PNG and PDF format, up to 5mb."
                title="Degree proof (required)"
              />
            </View>

            {/*Media Collection Tile*/}
            <View style={styles.compContainer}>
              <View>
                <Text style={styles.subheading}>Media Collection Tile</Text>
                <Divider color='#D1D5DB'/>
              </View>
              <MediaCollectionTile
                galleryTypeName="Surgery/Transplant"
                photoLabel="Images"
                photosCount={15}
                thumbnailUri="https://picsum.photos/200"
                tileSize={120}
                title="Gallery"
                variant="Classic"
                videoLabel="Clips"
                videosCount={3}
              />
            </View>

            {/*Media Tile*/}
            <View style={styles.compContainer}>
              <View>
                <Text style={styles.subheading}>Media Tile</Text>
                <Divider color='#D1D5DB'/>
              </View>
              <MediaTile
                borderRadius={0}
                bottomIconBackgroundColor="#3B82F6"
                bottomIconSize={16}
                bottomIconTintColor="#ffffff"
                thumbnailUri="https://picsum.photos/200"
                tileSize={120}
                title="IMG_123489.JPG"
                topIconBackgroundColor="#dc2626"
                topIconSize={16}
                topIconTintColor="#ffffff"
                variant="Detailed"
              />
            </View>
          </View>

          <View style={{ marginTop: 96 }}></View>

           {/*Generics*/}
           <View style={{ marginBottom: 20 }}>
            <Text style={styles.heading}>Generics</Text>
            <Divider style={{ height: 2 }} color='#D1D5DB'/>
          </View>
          <View style={styles.subContainer}>
            {/*Confirmation BottomSheet*/}
            <View style={styles.compContainer}>
              <ConfirmationBS />
            </View>

            {/*Delete BottomSheet*/}
            <View style={styles.compContainer}>
              <DeleteBS />
            </View>

            {/*Generic BottomSheet*/}
            <View style={styles.compContainer}>
               <GenericBS />
            </View>

            {/*Generic Card*/}
            <View style={styles.compContainer}>
              <View>
                <Text style={styles.subheading}>Generic Card</Text>
                <Divider color='#D1D5DB'/>
              </View>
              <GenericCard
              body={<Text>You haven't added any doctors. Add doctors to appear in doctor search and get appointments.</Text>}
              buttonProps={{
                btnStyle: 'Outline',
                enableLeftIcon: false,
                enableRightIcon: false,
                onPress: () => {},
                size: 'Medium',
                state: 'Default',
                text: 'Add Doctors',
                type: 'Neutral'
              }}
              headerProps={{
                showBackIcon: false,
                subtext: '0 Doctors',
                title: 'Doctors',
                variant: 'Card Header'
              }}
            />
            </View>

            {/*Generic List*/}
            <View style={styles.compContainer}>
              <View>
                <Text style={styles.subheading}>Generic List</Text>
                <Divider color='#D1D5DB'/>
              </View>
              <GenericList
                data={[
                  <MediaTile key="1" bottomIconBackgroundColor="#4762e9" bottomIconSize={16} bottomIconTintColor="#ffffff" thumbnailUri="https://picsum.photos/200" tileSize={120} title="IMG_123489.JPG" topIconBackgroundColor="#ef4444" topIconSize={16} topIconTintColor="#ffffff"/>,
                  <MediaTile key="2" bottomIconBackgroundColor="#4762e9" bottomIconSize={16} bottomIconTintColor="#ffffff" duration="2:30" isVideo thumbnailUri="https://picsum.photos/200" tileSize={120} title="VID_123490.MP4" topIconBackgroundColor="#ef4444" topIconSize={16} topIconTintColor="#ffffff"/>
                ]}
                layout='Vertical'
                numColumns={2}
              />
            </View>

            {/*Info Card*/}
            <View style={styles.compContainer}>
              <View>
                <Text style={styles.subheading}>Info Card</Text>
                <Divider color='#D1D5DB'/>
              </View>
              <InfoCard
                body={<Text>Apollo Hospital</Text>}
                rightIcon="Edit"
                title="Establishment Name"
              />
            </View>

            {/*Generic List Item*/}
            <View style={styles.compContainer}>
              <View>
                <Text style={styles.subheading}>Generic List Item</Text>
                <Divider color='#D1D5DB'/>
              </View>
              <ListItemWithControl
                checkboxProps={{
                  action: 'Left',
                  description: 'Ear Nose Throat',
                  heading: false,
                  label: 'Ear Nose Throat',
                  showDescription: false,
                  size: 'Large',
                  state: 'Default',
                  type: 'Neutral'
                }}
                imageUrl="https://cdn-icons-png.flaticon.com/512/2922/2922510.png"
                label="Ear Nose Throat"
                radioProps={{
                  action: 'Left',
                  description: 'Ear Nose Throat',
                  heading: false,
                  label: 'Ear Nose Throat',
                  showDescription: false,
                  size: 'Large',
                  state: 'Default',
                  type: 'Neutral'
                }}
                showCheckbox
              />
            </View>

            {/*No Result Found Box*/}
            <View style={styles.compContainer}>
              <View>
                <Text style={styles.subheading}>No Result Found Box</Text>
                <Divider color='#D1D5DB'/>
              </View>
              <NoResultFoundBox
                subtitle="We can't find any matching doctors for your search."
                title="No results found"
              />
            </View>

            {/*Pill*/}
            <View style={styles.compContainer}>
              <View>
                <Text style={styles.subheading}>Pill</Text>
                <Divider color='#D1D5DB'/>
              </View>
              <View style={{ alignSelf: 'center' }}>
                <TransparentPill
                  leftIcon
                  onPress={() => {}}
                  text="Change Cover"
                />
              </View>
            </View>
            
          </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 40,
  },
  subContainer: {
    paddingTop: 8,
    gap: 16
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold', 
    paddingStart: 8,
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold', 
    marginBottom: 4
  },
  compContainer: {
    gap: 10
  }
});

export default L0_Screen;
