import { connect } from 'react-redux';
import DoctorManagementView, { DoctorManagementViewProps } from '../../../components/surgery/DoctorManagementView/DoctorManagementView';

const mapStateToProps = (state: any): DoctorManagementViewProps => ({
  doctorData: [
    {
        name: 'Dr. Aditi P. Ramachandran',
        post: 'Dentist Surgeon, Orthodontist',
        fee: 400,
        experience: 18,
        stories: 324,
        imageUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
        name: 'Dr. Priti P. Ramachandran',
        post: 'Dentist Surgeon, Orthodontist',
        fee: 400,
        experience: 18,
        imageUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
        name: 'Dr. Shruti P. Ramachandran',
        post: 'Dentist Surgeon, Orthodontist',
        experience: 18,
        imageUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      name: 'Dr. Harika P. Ramachandran',
      post: 'Dentist Surgeon, Orthodontist',
      fee: 400,
      experience: 18,
      stories: 324,
      imageUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      name: 'Dr. Rashi P. Ramachandran',
      post: 'Dentist Surgeon, Orthodontist',
      fee: 400,
      experience: 18,
      imageUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      name: 'Dr. Garima P. Ramachandran',
      post: 'Dentist Surgeon, Orthodontist',
      experience: 18,
      imageUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
    name: 'Dr. Anjali  P. Ramachandran',
    post: 'Dentist Surgeon, Orthodontist',
    fee: 400,
    experience: 18,
    stories: 324,
    imageUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
  ],
    doctorItem: {
    size: 'Small',
    state: 'Default',
    type: 'Secondary',
    city: 'Bengaluru',
    councilName: 'Tamil Nadu Medical Council',
    itemType: 'General',
    rating: 0.86,
    registrationNumber: 'TN/12345/2020',
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
    storiesCount: 324,
    videoConsultBadgeProps: {
      label: 'Video Consult',
      leftIcon: false,
      showBorder: true,     
      size: 'Small',
      state: 'Default',
      type: 'Secondary'
    }
  }
});

const mapDispatchToProps = (dispatch: any) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(DoctorManagementView);