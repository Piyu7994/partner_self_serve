import React, {useState, useCallback, useMemo} from 'react';
import {SpecialityListWithSearch} from '../../../components/common/SpecialityListWithSearch/SpecialityListWithSearch';

interface SpecialityListContainerProps {
  onSpecialityButtonClick?: (
    specialityId: string,
    specialityLabel: string,
  ) => void;
  showButton?: boolean;
  showItemRightIcon?: boolean;
  onItemClick?: (id: string, label: string) => void;
}


//MOCK DATA FOR TEMPORARY USE
const specialityListData = [
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

export default function SpecialityListContainer({
  onSpecialityButtonClick,
  showButton = true,
  showItemRightIcon = true,
  onItemClick,
}: SpecialityListContainerProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpeciality, setSelectedSpeciality] = useState<{
    id: string;
    label: string;
  } | null>(null);

  const handleSelect = useCallback(
    (id: string, label: string) => {
      setSelectedSpeciality({id, label});
      if (onItemClick) {
        onItemClick(id, label);
      }
    },
    [onItemClick],
  );

  const filteredSpecialities = useMemo(() => {
    return specialityListData.filter(item =>
      item.label.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery]);

  return (
    <SpecialityListWithSearch
      specialityListData={filteredSpecialities}
      onSpecialityButtonClick={onSpecialityButtonClick}
      showButton={showButton}
      showItemRightIcon={showItemRightIcon}
      setSearchQuery={setSearchQuery}
      selectedSpeciality={selectedSpeciality}
      handleSelect={handleSelect}
      filteredSpecialities={filteredSpecialities}
    />
  );
}
