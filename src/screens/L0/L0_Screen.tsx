import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import {colors} from '../../theme/color';
import {SafeAreaView} from 'react-native-safe-area-context';
import React from 'react';

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
} from '@practo/self-serve';

const L0_Screen: React.FC = () => {
  return (
    <SafeAreaView edges={['left', 'right', 'bottom']} style={{flex: 1}}>
      <StatusBar />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginTop: 72,
          paddingHorizontal: 16,
        }}>
        <View style={styles.container}>
          {/* Address*/}
          <AboutUsFee
            fee=""
            feeTitle="Registration fee for new patients (₹)"
            paymentModes=""
            paymentModesTitle="Modes of payment accepted"
            title="Payments & Fees"
          />

          <Address
            address="Vishal Patil Clinic, 154/11, Bannerghatta Road,
Landmark: Opposite IIM,
Bangalore"
            imageUrl="https://i.ibb.co/67wgTzcL/image-1.png"
          />

          <CurrentLocationCTA
            leftIconEnabled
            onLocationCTAPress={() => {}}
            rightIconEnabled
            title="Use Current Location"
          />

          <TimingWithDays
            days="Mon - Sat"
            slot1="09:00 am - 01:00 pm"
            slot2="03:00 pm - 09:00 pm"
          />

          {/* About Us Timing */}
          <AboutUsTiming
            days1="Monday - Saturday"
            days2="Monday - Saturday"
            slot1a="10:00 AM - 8PM"
            slot1b="10:00 AM - 8PM"
            slot2a="10:00 AM - 8PM"
            slot2b="10:00 AM - 8PM"
            title="Timings"
          />

          {/* Doctor */}
          <DoctorDisplayPicture imageUrl="https://ik.imagekit.io/98u12ijfs/Profile%20image.png?updatedAt=1747904648547" />

          <AvailabilityDetailWithToggleItem
            onToggleButtonPress={() => {}}
            subtitle="Turn OFF to indicate the doctor is now available for consultation."
            title="Doctor on holiday"
            toggleButtonState="Disabled"
          />
          <ConsultationDetailCard
            onPress={() => {}}
            rightIconEnabled
            title="Consultation fee"
            children={<></>}
          />

          <ConsultationDetailCard
            onPress={() => {}}
            rightIconEnabled
            title="Consultation fee"
            children={<></>}
          />

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
              title: 'Consultation Fee is missing',
            }}
            doctorItemProps={{
              bookAvailable: true,
              bookBadgeProps: {
                label: 'Book',
                leftIcon: false,
                showBorder: true,
                size: 'Medium',
                state: 'Brand',
                type: 'Secondary',
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
              specialities: ['Dentist Surgeon', 'Orthodontist'],
              status: 'NONE',
              statusBadgeProps: {
                isUppercase: true,
                label: 'LIVE',
                labelType: 'Text',
                numberLabel: 100,
                showImage: false,
                state: 'Success',
                type: 'Secondary',
              },
              storiesCount: 120,
              videoConsultAvailable: true,
              videoConsultBadgeProps: {
                label: 'Video Consult',
                leftIcon: false,
                showBorder: true,
                size: 'Medium',
                state: 'Brand',
                type: 'Secondary',
              },
            }}
          />

          <DoctorStatusCard
            alertProps={{
              CTA: false,
              description:
                'This may take upto 48 hours to complete meanwhile add other details',
              label: 'Book Appointment',
              leftIcon: true,
              leftIconType: 'Info',
              priority: 'Secondary',
              rightAction: false,
              state: 'Error',
              title: 'Profile is under review',
            }}
            doctorItemProps={{
              bookAvailable: true,
              bookBadgeProps: {
                label: 'Book',
                leftIcon: false,
                showBorder: true,
                size: 'Medium',
                state: 'Brand',
                type: 'Secondary',
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
              specialities: ['Dentist Surgeon', 'Orthodontist'],
              status: 'NONE',
              statusBadgeProps: {
                isUppercase: true,
                label: 'LIVE',
                labelType: 'Text',
                numberLabel: 100,
                showImage: false,
                state: 'Success',
                type: 'Secondary',
              },
              storiesCount: 120,
              videoConsultAvailable: true,
              videoConsultBadgeProps: {
                label: 'Video Consult',
                leftIcon: false,
                showBorder: true,
                size: 'Medium',
                state: 'Brand',
                type: 'Secondary',
              },
            }}
            showAlert
          />

          <HolidayWithToggleCard
            cardDetails={{
              onDateSectionPress: () => {},
              onToggleButtonPress: () => {},
              subtitle:
                'Turn OFF to indicate the doctor is now available for consultation.',
              title: 'Doctor on holiday',
              toggleButtonState: 'Disabled',
            }}
            fromDate="11-06-2024"
            onDateSectionPress={() => {}}
            toDate="26-06-2024"
          />

          <NoDoctorMatchCard
            leftIconEnabled
            onPress={() => {}}
            rightIconEnabled
            subtitle="Create new doctor profile"
            title="None of the above?"
          />

          {/**ATOMS */}
          <Alert
            description="This is some part of secondary text about the main text on the title"
            label="Label"
            leftIcon
            leftIconType="Info"
            // loaderPercentage={83}
            priority="Secondary"
            // showLoader
            state="Success"
            title="As a part of verification"
          />
          <Badge
            label="General"
            labelType="Text"
            state="General"
            type="Primary"
          />

          <Badge
            label="General"
            labelType="Text"
            state="General"
            type="Primary"
          />
          <Checkbox
            action="Left"
            content
            description="Please read our terms before proceeding"
            heading
            label="Accept terms and conditions"
            showDescription
            size="Large"
            type="Neutral"
          />
          <Chip
            chipType="Primary"
            defaultLabel="Label"
            defaultSubLabel="Label"
            leftIcon
            size="Large"
            state="General"
            type="Primary"
          />
          <Header
            onBackPress={() => {}}
            showBackIcon
            subtext="Subtext"
            title="Title"
            variant="Screen Header"
          />
          <Input
            disableRightAction
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
          />

          <Loader color="#FFA000" duration={1000} size={36} width={2} />

          <Radio
            description="More details about this option"
            heading
            label="Select this option"
            showDescription
          />

          <Search
            bgType="White"
            onChangeText={() => {}}
            size="Large"
            enableShadow={false}
            enableVoiceSearch={false}
          />

          <Snackbar
            Icon
            Snackbar_Types="Natural"
            TextButton
            label="Label"
            message="A thing happened"
          />

          {/* GIVING ERROR: Fix required */}
          {/* <Tags
            label="Label"
            leftIcon
            showBorder
            size="Large"
            state="Active"
            type="Primary"
          /> */}

          <ToggleButton os="iOS" showIcon size="Large" state="Default" />

          {/* Generic Components */}

          {false && (
            <DeleteBottomSheet
              buttonLayout="Column"
              icon="https://i.postimg.cc/85z10p6t/image.png"
              isVisible
              onClose={() => {}}
              primaryButtonProps={{
                btnStyle: 'Fill',
                enableLeftIcon: false,
                enableRightIcon: false,
                onPress: () => {},
                size: 'Medium',
                state: 'Default',
                text: 'Remove',
                type: 'Warning',
              }}
              secondaryButtonProps={{
                btnStyle: 'Outline',
                enableLeftIcon: false,
                enableRightIcon: false,
                onPress: () => {},
                size: 'Medium',
                state: 'Default',
                text: 'Cancel',
                type: 'Neutral',
              }}
              title="Are you sure you want to delete this image?"
            />
          )}

          <FeeInputBox
            onPress={() => {}}
            subTitle="Add fee"
            title="Hospital appointment"
            type="Primary"
          />
          {false && (
            <>
              <GenericBottomSheet
                footerButtonProps={{
                  btnStyle: 'Fill',
                  enableLeftIcon: false,
                  enableRightIcon: false,
                  onPress: () => {},
                  size: 'Large',
                  state: 'Default',
                  text: 'Add speciality',
                  type: 'Primary',
                }}
                headerText="Add speciality"
                isSheetVisible
                onClose={() => {}}
                onFooterButtonPress={() => {}}
                showFooter
                showHeader
                showHeaderIcon
                showHeaderText>
                <React.Fragment key=".0">
                  <View
                    style={{
                      paddingHorizontal: 16,
                    }}>
                    <Search
                      bgType="White"
                      onChangeText={() => {}}
                      size="Large"
                      enableShadow={false}
                      enableVoiceSearch={false}
                    />
                  </View>
                  <FlatList
                    data={[
                      'Ear Nore Throat',
                      'Sexual Health',
                      'Orthopaedics',
                      'Child Specialist',
                      'Digestive Issues',
                      'Homeopathy',
                      'Eye Specialist',
                      'Ear Nore Throat',
                      'Sexual Health',
                      'Orthopaedics',
                      'Child Specialist',
                      'Digestive Issues',
                      'Homeopathy',
                      'Eye Specialist',
                    ]}
                    keyExtractor={item => item}
                    renderItem={({item}) => (
                      <Text style={{padding: 16}}>{item}</Text>
                    )}
                    style={{
                      maxHeight: 575.4,
                      paddingHorizontal: 16,
                    }}
                  />
                </React.Fragment>
              </GenericBottomSheet>
            </>
          )}

          <GenericCard
            body={
              <>
                You haven't added any doctors. Add doctors to appear in doctor
                search and get appointments.
              </>
            }
            buttonProps={{
              btnStyle: 'Outline',
              enableLeftIcon: false,
              enableRightIcon: false,
              onPress: () => {},
              size: 'Medium',
              state: 'Default',
              text: 'Add Doctors',
              type: 'Neutral',
            }}
            headerProps={{
              showBackIcon: false,
              subtext: '0 Doctors',
              title: 'Doctors',
              variant: 'Card Header',
            }}
          />

          {/* <GenericList
  data={[
    <MediaTile key="1" bottomIconBackgroundColor="#4762e9" bottomIconSize={16} bottomIconTintColor="#ffffff" bottomRightIcon="static/media/src/assets/icons/ic_done.png" thumbnailUri="https://placehold.co/400x400" tileSize={120} title="IMG_123489.JPG" topIconBackgroundColor="#ef4444" topIconSize={16} topIconTintColor="#ffffff" topRightIcon="static/media/src/assets/icons/ic_alert_filled.png"/>,
    <MediaTile key="2" bottomIconBackgroundColor="#4762e9" bottomIconSize={16} bottomIconTintColor="#ffffff" bottomRightIcon="static/media/src/assets/icons/ic_done.png" duration="2:30" isVideo thumbnailUri="https://placehold.co/400x400" tileSize={120} title="VID_123490.MP4" topIconBackgroundColor="#ef4444" topIconSize={16} topIconTintColor="#ffffff" topRightIcon="static/media/src/assets/icons/ic_alert_filled.png"/>
  ]}
  keyExtractor={() => {}}
  layout="Grid"
  numColumns={2}
/> */}

          <InfoCard
            body={<Text>Apollo Hospital</Text>}
            rightIcon="Edit"
            title="Establishment Name"
          />

          <ListItemWithControl
            checkboxProps={{
              action: 'Left',
              description: 'Ear Nose Throat',
              heading: false,
              label: 'Ear Nose Throat',
              showDescription: false,
              size: 'Large',
              state: 'Default',
              type: 'Neutral',
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
              type: 'Neutral',
            }}
            showCheckbox
          />

          <NoResultFoundBox
            subtitle="We can't find any matching doctors for your search."
            title="No results found"
          />

          <TransparentPill leftIcon onPress={() => {}} text="Change Cover" />

          {/* Media */}
          <AddLogo
            borderRadius={16}
            containerWidth="70%"
            // size={100}
            subtitle="Upload a 100x100 px image for your logo"
            title="Add New Logo"
            verticalAlignment="Center"
          />

          <ImagePreview
            imageUri="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
            title="Registration proof"
          />

          <ImageUploadComponent
            cardProps={{
              style: {
                margin: 16,
              },
            }}
            headerVariant="Screen Header"
            images={[
              {
                thumbnailUri: 'https://placehold.co/400x400',
                title: 'IMG_123489.JPG',
                variant: 'Detailed',
              },
              {
                thumbnailUri: 'https://placehold.co/400x400',
                title: 'IMG_123490.JPG',
                variant: 'Detailed',
              },
              {
                thumbnailUri: 'https://placehold.co/400x400',
                title: 'IMG_123491.JPG',
                variant: 'Detailed',
              },
              {
                thumbnailUri: 'https://placehold.co/400x400',
                title: 'IMG_123492.JPG',
                variant: 'Detailed',
              },
            ]}
            mediaTileListProps={{
              numColumns: 4,
            }}
            onUploadPress={() => {}}
            subtitle="JPEG, PNG and PDF format, up to 5mb."
            title="Degree proof (required)"
          />

          <MediaCollectionTile
            galleryTypeName="Surgery/Transplant"
            photoLabel="Images"
            photosCount={15}
            thumbnailUri="https://placehold.co/400"
            tileSize={120}
            title="Gallery"
            variant="Classic"
            videoLabel="Clips"
            videosCount={3}
          />

          <MediaTile
            borderRadius={0}
            bottomIconBackgroundColor="#3B82F6"
            bottomIconSize={16}
            bottomIconTintColor="#ffffff"
            // bottomRightIcon="static/media/src/assets/icons/ic_done.png"
            thumbnailUri="https://placehold.co/400x400"
            tileSize={120}
            title="IMG_123489.JPG"
            topIconBackgroundColor="#dc2626"
            topIconSize={16}
            topIconTintColor="#ffffff"
            // topRightIcon="static/media/src/assets/icons/ic_alert_filled.png"
            variant="Detailed"
          />

          {/* Surgery Flow */}

          <SurgeryCard
            alertBoxData={{
              CTA: true,
              description: 'This could lead to fewer appointments!',
              priority: 'Secondary',
              rightAction: false,
              state: 'Error',
              title: 'Associated doctors are missing.',
            }}
            onPress={() => {}}
            surgeryItemData={{
              imageUrl:
                'https://cdn-icons-png.flaticon.com/512/2922/2922510.png',
              patientStoriesCount: 202,
              photosCount: 23,
              priceRange: '₹10,000 - ₹20,000',
              title: 'Robotic total hip replacement',
              videosCount: 10,
            }}
          />

          <SurgeryItem
            imageUrl="https://cdn-icons-png.flaticon.com/512/2922/2922510.png"
            patientStoriesCount={202}
            photosCount={23}
            priceRange="₹10,000 - ₹20,000"
            title="Robotic total hip replacement"
            videosCount={10}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 40,
  },
});

export default L0_Screen;
