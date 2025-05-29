// src/containers/L0Screen/L0Screen.tsx
import React from 'react';
import { connect } from 'react-redux';
import SurgeryOverviewCard, {SurgeryOverviewCardProps} from '../../../components/surgery/SurgeryOverviewCard/SurgeryOverviewCard'

const mapStateToProps = (state: any): SurgeryOverviewCardProps => ({
  header: {
    title: "Surgeries & treatments",
    subtext: "18 surgeries & 10 treatments  Need help? See examples",
  },
  buttons: {
    helpButton: {
      text: "Need help? See example",
      btnStyle: "Soft",
      size: "Medium",
      state: "Default",
      type: "Neutral",
    },
    addButton: {
      text: "Add Surgeries/treatments",
      btnStyle: "Outline" as const,
      size: "Medium" as const,
      state: "Default" as const,
      type: "Neutral" as const
    },
    modalButton: {
      text: "Add Surgeries/treatments",
      size: "Small"
    }
  },
  surgeries: [
    {
      imageUrl: "https://cdn-icons-png.flaticon.com/512/2922/2922510.png",
      patientStoriesCount: 234,
      photosCount: 23,
      priceRange: "₹5,000 - ₹15,000",
      title: "Robotic total hip replacement",
      videosCount: 10
    },
    {
      imageUrl: "https://cdn-icons-png.flaticon.com/512/2922/2922510.png",
      patientStoriesCount: 156,
      photosCount: 15,
      priceRange: "₹8,000 - ₹20,000",
      title: "Knee replacement surgery",
      videosCount: 8
    },
    {
      imageUrl: "https://cdn-icons-png.flaticon.com/512/2922/2922510.png",
      patientStoriesCount: 189,
      photosCount: 18,
      priceRange: "₹6,000 - ₹18,000",
      title: "Spine surgery",
      videosCount: 12
    }
  ],
  alert: {
    dataAlert: {
      description: "Reassure patients with trusted experts performing these surgeries",
      label: "Label",
      leftIcon: true,
      leftIconType: "Info",
      priority: "Secondary",
      state: "Error",
      title: "Add doctors performing 5 surgeries"
    },
    emptyDataAlert: {
      description:"Adding detailed surgery information builds patient trust and encourages more booking",
      title:"You haven't added any surgeries"
    }
  },
  bottomSheetData: [
    {
      title: 'SURGERIES',
      example: 'Knee Replacement Surgery'
    },
    {
      title: 'TREATMENTS',
      example: 'Back pain physiotherapy'
    },
    {
      title: 'TESTS',
      example: 'X-ray (spine)'
    },
    {
      title: 'SERVICES',
      example: 'Post-op Home Rehab'
    }
  ],
  bottomSheetHeader: {
    title: 'Add all your offerings in one place.',
    subtext: 'Surgeries, treatment, tests, and services'
  }
});

const mapDispatchToProps = (dispatch: any) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SurgeryOverviewCard);