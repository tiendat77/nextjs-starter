'use client';

import { FC } from 'react';
import Link from 'next/link';

import NavigationDropdown from './NavigationDropdown';

import { navigationLinks } from '@/configs/navigation-links';
import { NavigationModel } from '@/models';

export interface NavigationProps {
  className?: string;
  navigation?: NavigationModel[];
}

const Navigation: FC<NavigationProps> = ({ navigation = navigationLinks }) => {
  return (
    <ul
      tabIndex={0}
      className="menu menu-horizontal menu-lg items-center justify-center px-1"
    >
      {navigation?.map((nav, index) => (
        <li key={index}>
          <NavigationDropdown navigation={nav} />
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
