import React from 'react';
import SurgeryList from '../../../components/surgery/SurgeryList/SurgeryList';

const SurgeryListContainer = () => {
  const surgeryListData = [
    {
      title: 'Robotic Surgery',
      price: {
        min: 1000,
        max: 10000,
        currency: '₹',
      },
      patient_stories_count: 200,
      photo_count: 10,
      video_count: 20,
      alert_box: {
        title: 'As a part of verification',
        description:
          'This is some part of secondary text about the main text on the title',
      },
    },
    {
      title: 'Robotic Surgery',
      price: {
        min: 1000,
        max: 10000,
        currency: '₹',
      },
      patient_stories_count: 200,
      photo_count: 10,
      video_count: 20,
      alert_box: {
        title: 'As a part of verification',
        description:
          'This is some part of secondary text about the main text on the title',
      },
    },
    {
      title: 'Robotic Surgery',
      price: {
        min: 1000,
        max: 10000,
        currency: '₹',
      },
      patient_stories_count: 200,
      photo_count: 10,
      video_count: 20,
      alert_box: {
        title: 'As a part of verification',
        description:
          'This is some part of secondary text about the main text on the title',
      },
    },
    {
      title: 'Robotic Surgery',
      price: {
        min: 1000,
        max: 10000,
        currency: '₹',
      },
      patient_stories_count: 200,
      photo_count: 10,
      video_count: 20,
      alert_box: {
        title: 'As a part of verification',
        description:
          'This is some part of secondary text about the main text on the title',
      },
    },
    {
      title: 'Laparoscopic Surgery',
      price: {
        min: 1000,
        max: 10000,
        currency: '₹',
      },
      patient_stories_count: 200,
      photo_count: 10,
      video_count: 20,
    },
    {
      title: 'Minimally Invasive Surgery',
      price: {
        min: 1000,
        max: 10000,
        currency: '₹',
      },
      patient_stories_count: 200,
      photo_count: 10,
      video_count: 20,
    },
    {
      title: 'Minimally Invasive Surgery',
      patient_stories_count: 200,
      photo_count: 10,
      video_count: 20,
    },
    {
      title: 'Minimally Invasive Surgery',
      patient_stories_count: 200,
      photo_count: 10,
      video_count: 20,
    },
  ];

  return <SurgeryList surgeryListData={surgeryListData} />;
};

export default SurgeryListContainer;
