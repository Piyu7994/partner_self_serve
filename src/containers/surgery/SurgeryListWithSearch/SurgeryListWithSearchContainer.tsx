import React, {useState, useCallback} from 'react';
import {SurgeryListWithSearch} from '../../../components/surgery/SurgeryListWithSearch/SurgeryListWithSearch';

interface SurgeryListWithSearchContainerProps {
  onSurgeriesSelect: (surgeries: Set<string>) => void;
}

const surgeryListdata = [
  {
    id: '1',
    label: 'Cardiology 99',
    icon_url: 'https://cdn-icons-png.flaticon.com/512/2922/2922510.png',
    isSelected: false,
  },
  {
    id: '2',
    label: 'Neurology',
    icon_url: 'https://cdn-icons-png.flaticon.com/512/2922/2922510.png',
    isSelected: false,
  },
  {
    id: '3',
    label: 'Orthopedics',
    icon_url: 'https://cdn-icons-png.flaticon.com/512/2922/2922510.png',
    isSelected: false,
  },
  {
    id: '4',
    label: 'Pediatrics',
    icon_url: 'https://cdn-icons-png.flaticon.com/512/2922/2922510.png',
    isSelected: false,
  },
  {
    id: '5',
    label: 'Urology',
    icon_url: 'https://cdn-icons-png.flaticon.com/512/2922/2922510.png',
    isSelected: false,
  },
  {
    id: '6',
    label: 'Gynecology',
    icon_url: 'https://cdn-icons-png.flaticon.com/512/2922/2922510.png',
    isSelected: false,
  },
  {
    id: '7',
    label: 'Dermatology',
    icon_url: 'https://cdn-icons-png.flaticon.com/512/2922/2922510.png',
    isSelected: false,
  },
  {
    id: '8',
    label: 'Ophthalmology',
    icon_url: 'https://cdn-icons-png.flaticon.com/512/2922/2922510.png',
    isSelected: false,
  },
  {
    id: '9',
    label: 'Cardiology',
    icon_url: 'https://cdn-icons-png.flaticon.com/512/2922/2922510.png',
    isSelected: false,
  },
  {
    id: '10',
    label: 'Neurology',
    icon_url: 'https://cdn-icons-png.flaticon.com/512/2922/2922510.png',
    isSelected: false,
  },
  {
    id: '11',
    label: 'Orthopedics',
    icon_url: 'https://cdn-icons-png.flaticon.com/512/2922/2922510.png',
    isSelected: false,
  },
  {
    id: '12',
    label: 'Pediatrics',
    icon_url: 'https://cdn-icons-png.flaticon.com/512/2922/2922510.png',
    isSelected: false,
  },
  {
    id: '13',
    label: 'Urology',
    icon_url: 'https://cdn-icons-png.flaticon.com/512/2922/2922510.png',
    isSelected: false,
  },
  {
    id: '14',
    label: 'Gynecology 11',
    icon_url: 'https://cdn-icons-png.flaticon.com/512/2922/2922510.png',
    isSelected: false,
  },
  {
    id: '15',
    label: 'Dermatology',
    icon_url: 'https://cdn-icons-png.flaticon.com/512/2922/2922510.png',
    isSelected: false,
  },
  {
    id: '16',
    label: 'Ophthalmology 000',
    icon_url: 'https://cdn-icons-png.flaticon.com/512/2922/2922510.png',
    isSelected: false,
  },
];

export default function SurgeryListWithSearchContainer({
  onSurgeriesSelect,
}: SurgeryListWithSearchContainerProps) {
  const [selectedSurgeries, setSelectedSurgeries] = useState<Set<string>>(
    new Set(),
  );
  const [searchQuery, setSearchQuery] = useState('');

  const handleSurgerySelect = useCallback((id: string) => {
    setSelectedSurgeries(prev => {
      const newSelected = new Set(prev);
      if (newSelected.has(id)) {
        newSelected.delete(id);
      } else {
        newSelected.add(id);
      }
      return newSelected;
    });
  }, []);

  const filteredSurgeries = surgeryListdata.filter(surgery =>
    surgery.label.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <SurgeryListWithSearch
      surgeryListData={filteredSurgeries}
      onSurgeriesSelect={onSurgeriesSelect}
      setSearchQuery={setSearchQuery}
      selectedSurgeries={selectedSurgeries}
      handleSurgerySelect={handleSurgerySelect}
    />
  );
}
