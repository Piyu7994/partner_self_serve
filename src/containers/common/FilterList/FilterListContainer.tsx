import React, {useState, useCallback, useMemo} from 'react';
import {FilterList} from '../../../components/common/FilterList/FilterList';

//MOCK DATA FOR TEMPORARY USE
const initialFilterListData = [
  {
    label: 'All (60)',
    isSelected: true,
  },
  {
    label: 'Cardiology (10)',
    isSelected: false,
  },
  {
    label: 'Neurology (10)',
    isSelected: false,
  },
  {
    label: 'Orthopedics (10)',
    isSelected: false,
  },
  {
    label: 'Pediatrics (10)',
    isSelected: false,
  },
  {
    label: 'Urology (10)',
    isSelected: false,
  },
];

export default function FilterListContainer({
  onViewAllPillClick,
}: {
  onViewAllPillClick?: () => void;
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filterListData = useMemo(
    () => [
      ...initialFilterListData.map((item, index) => ({
        ...item,
        isSelected: index === selectedIndex,
      })),
      {
        label: 'View all specialities',
        isSelected: false,
        onViewAllPillClick: () => {
          onViewAllPillClick?.();
        },
      },
    ],
    [selectedIndex, onViewAllPillClick],
  );

  const onPillClick = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  return (
    <FilterList filterListData={filterListData} onPillClick={onPillClick} />
  );
}
